(function () {
  var root = document.querySelector('[data-idea-lock]');
  if (!root) return;

  var form = root.querySelector('[data-login-form]');
  var message = root.querySelector('[data-login-message]');
  var notebook = root.querySelector('[data-notebook]');
  var editor = root.querySelector('[data-markdown-editor]');
  var preview = root.querySelector('[data-markdown-preview]');
  var storageKey = root.dataset.storageKey || 'crazy-ideas-markdown';
  var sessionKey = 'crazy-ideas-unlocked';

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char];
    });
  }

  function inlineMarkdown(value) {
    return escapeHtml(value)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function renderMarkdown(markdown) {
    var html = '';
    var inList = false;
    markdown.split(/\r?\n/).forEach(function (line) {
      if (/^###\s+/.test(line)) {
        if (inList) { html += '</ul>'; inList = false; }
        html += '<h3>' + inlineMarkdown(line.replace(/^###\s+/, '')) + '</h3>';
      } else if (/^##\s+/.test(line)) {
        if (inList) { html += '</ul>'; inList = false; }
        html += '<h2>' + inlineMarkdown(line.replace(/^##\s+/, '')) + '</h2>';
      } else if (/^#\s+/.test(line)) {
        if (inList) { html += '</ul>'; inList = false; }
        html += '<h1>' + inlineMarkdown(line.replace(/^#\s+/, '')) + '</h1>';
      } else if (/^-\s+/.test(line)) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + inlineMarkdown(line.replace(/^-\s+/, '')) + '</li>';
      } else if (line.trim()) {
        if (inList) { html += '</ul>'; inList = false; }
        html += '<p>' + inlineMarkdown(line) + '</p>';
      } else if (inList) {
        html += '</ul>';
        inList = false;
      }
    });
    if (inList) html += '</ul>';
    preview.innerHTML = html;
  }

  async function sha256(value) {
    var data = new TextEncoder().encode(value);
    var hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(function (byte) {
      return byte.toString(16).padStart(2, '0');
    }).join('');
  }

  function unlock() {
    form.hidden = true;
    notebook.hidden = false;
    editor.value = localStorage.getItem(storageKey) || editor.value;
    renderMarkdown(editor.value);
  }

  if (sessionStorage.getItem(sessionKey) === 'true') {
    unlock();
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    var username = form.elements.username.value.trim();
    var password = form.elements.password.value;
    var hash = await sha256(username + ':' + password);
    if (hash === root.dataset.authHash) {
      sessionStorage.setItem(sessionKey, 'true');
      unlock();
    } else {
      message.textContent = document.documentElement.lang.indexOf('zh') === 0
        ? '用户名或密码错误。'
        : 'Wrong username or password.';
    }
  });

  editor.addEventListener('input', function () {
    localStorage.setItem(storageKey, editor.value);
    renderMarkdown(editor.value);
  });

  root.querySelector('[data-copy-markdown]').addEventListener('click', function () {
    navigator.clipboard.writeText(editor.value);
  });

  root.querySelector('[data-download-markdown]').addEventListener('click', function () {
    var blob = new Blob([editor.value], { type: 'text/markdown' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'crazy-ideas.md';
    link.click();
    URL.revokeObjectURL(link.href);
  });

  root.querySelector('[data-lock-again]').addEventListener('click', function () {
    sessionStorage.removeItem(sessionKey);
    notebook.hidden = true;
    form.hidden = false;
  });
})();
