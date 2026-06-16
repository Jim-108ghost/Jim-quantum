---
title: Crazy Ideas
cms_exclude: true

view: 2

header:
  caption: ''
  image: ''
---

<section class="crazy-lock" data-idea-lock data-auth-hash="6dce97ca3baf703365dd8f10c4eea7c07dc558cc80eacb25a15368b1a78833aa" data-storage-key="crazy-ideas-markdown">
  <form class="crazy-login" data-login-form>
    <h2>Quiet notebook</h2>
    <p>This page is a low-key place for early research ideas, speculative schemes, and questions that may become projects later.</p>
    <label>
      Username
      <input type="text" name="username" autocomplete="username" required>
    </label>
    <label>
      Password
      <input type="password" name="password" autocomplete="current-password" required>
    </label>
    <button type="submit">Unlock</button>
    <p class="crazy-login-message" data-login-message></p>
  </form>

  <div class="crazy-notebook" data-notebook hidden>
    <div class="crazy-notebook-toolbar">
      <div>
        <h2>Crazy Ideas</h2>
        <p>Write in Markdown. The draft is saved in this browser.</p>
      </div>
      <div class="crazy-notebook-actions">
        <button type="button" data-copy-markdown>Copy Markdown</button>
        <button type="button" data-download-markdown>Download .md</button>
        <button type="button" data-lock-again>Lock</button>
      </div>
    </div>

    <div class="crazy-markdown-workspace">
      <label class="crazy-editor-wrap">
        Markdown
        <textarea data-markdown-editor spellcheck="false"># Seed Ideas

## Neutral-Atom Platforms

- Write quick sketches here.
- Keep hypotheses, possible experiments, and open questions lightweight.

## Questions

- What result would make this idea worth a serious project?</textarea>
      </label>

      <section class="crazy-preview-wrap">
        <div class="crazy-preview-label">Preview</div>
        <article class="crazy-preview" data-markdown-preview></article>
      </section>
    </div>
  </div>
</section>

<script src="../js/crazy-ideas.js"></script>
