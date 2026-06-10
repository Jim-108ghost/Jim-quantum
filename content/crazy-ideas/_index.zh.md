---
title: 疯狂想法
cms_exclude: true

view: 2

header:
  caption: ''
  image: ''
---

<section class="crazy-lock" data-idea-lock data-auth-hash="203f1c1f65c11d4b77c62cce7be6cb401db8612f3d8b45c7c2672936c9461906" data-storage-key="crazy-ideas-markdown-zh">
  <form class="crazy-login" data-login-form>
    <h2>低调笔记本</h2>
    <p>这里用来记录还没有完全成形的科研想法、猜想方案，以及未来可能发展成项目的问题。</p>
    <label>
      用户名
      <input type="text" name="username" autocomplete="username" required>
    </label>
    <label>
      密码
      <input type="password" name="password" autocomplete="current-password" required>
    </label>
    <button type="submit">解锁</button>
    <p class="crazy-login-message" data-login-message></p>
  </form>

  <div class="crazy-notebook" data-notebook hidden>
    <div class="crazy-notebook-toolbar">
      <div>
        <h2>疯狂想法</h2>
        <p>用 Markdown 书写。草稿会保存在当前浏览器中。</p>
      </div>
      <div class="crazy-notebook-actions">
        <button type="button" data-copy-markdown>复制 Markdown</button>
        <button type="button" data-download-markdown>下载 .md</button>
        <button type="button" data-lock-again>锁定</button>
      </div>
    </div>

    <div class="crazy-markdown-workspace">
      <label class="crazy-editor-wrap">
        Markdown
        <textarea data-markdown-editor spellcheck="false"># 种子想法

## 中性原子平台

- 在这里快速记录想法草稿。
- 可以保留假设、可能的实验方案和开放问题。

## 问题

- 什么结果会让这个想法值得发展成一个正式项目？</textarea>
      </label>

      <section class="crazy-preview-wrap">
        <div class="crazy-preview-label">预览</div>
        <article class="crazy-preview" data-markdown-preview></article>
      </section>
    </div>
  </div>
</section>

<script src="../../js/crazy-ideas.js"></script>
