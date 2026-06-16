---
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: 个人简介
      username: admin
  - block: skills
    content:
      title: 技术能力
      text: ''
      username: admin
    design:
      columns: '1'
  - block: experience
    content:
      title: 经历
      date_format: Jan 2006
      items:
        - title: PhD
          company: State Key Laboratory for Mesoscopic Physics and Frontiers Science Center for Nano-optoelectronics, School of Physics @ Peking University
          company_url: 'https://nano-optoelectronics.pku.edu.cn/index.htm'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2025-09-01'
          date_end: ''
          description: 搭建 YbII 系统，一套可以连续装载的光镊 Yb 原子阵列。
        - title: Pre-PhD & FYP
          company: State Key Laboratory for Mesoscopic Physics and Frontiers Science Center for Nano-optoelectronics, School of Physics @ Peking University
          company_url: 'https://nano-optoelectronics.pku.edu.cn/index.htm'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-08-01'
          date_end: '2025-08-01'
          description: 搭建 YbI 系统，包括设计 MOT 光路和光镊光路，并优化 compressed MOT。
        - title: Semester Intern
          company: Institute of Quantum Electronics @ PKU
          company_url: 'https://iqe.pku.edu.cn/'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-03-01'
          date_end: '2024-07-01'
          description: 参与超冷原子陀螺仪实验的图像处理和数据分析。
        - title: Summer Intern
          company: Center for Quantum Technology @ NUS & School of Physical and Mathematical Science @ NTU
          company_url: 'https://cqt10.quantumlah.org/'
          company_logo: cqt.png
          location: Singapore
          date_start: '2022-07-01'
          date_end: '2022-10-01'
          description: 搭建基于激光烧蚀技术的紧凑 Sr 原子源，并分析原子荧光信号。
        - title: Undergraduate
          company: Chern Institute of Mathematics @ NKU
          company_url: 'http://www.nim.nankai.edu.cn/'
          company_logo: nankai-emblem.svg
          location: Tianjin, China
          date_start: '2022-03-01'
          date_end: '2024-07-01'
          description: 参与自旋和对称性的理论研究。
    design:
      columns: '2'
  - block: collection
    id: research-news
    content:
      title: 科研动态
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - research-news
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: 项目
      filters:
        folders:
          - project
      default_button_index: 0
      buttons:
        - name: 全部
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< personal-gallery >}}
    design:
      columns: '1'
  - block: markdown
    id: featured
    content:
      title: 精选论文
      subtitle: ''
      text: |-
        <div class="selected-publications">
          <article class="selected-publication">
            <div class="selected-pub-thumb">
              <img src="../media/publications/so4-symmetry.png" alt="SO(4) symmetry energy-level diagram">
            </div>
            <div class="selected-pub-body">
              <h3><a href="publication/conference-paper/">SO(4) symmetry in hydrogen-atom-like model with spin</a></h3>
              <p class="selected-pub-authors">Fan, X.-Y.; <strong>Xie, X.-R.</strong>*; Li, S.-M.; Chen, J.-L.</p>
              <p class="selected-pub-venue"><em>Results in Physics</em> <span>2024</span>, 63, 107879</p>
              <p class="selected-pub-note">*共同一作。</p>
              <div class="selected-pub-links">
                <a href="publication/conference-paper/">ABS</a>
                <a href="https://doi.org/10.1016/j.rinp.2024.107879" target="_blank" rel="noopener">DOI</a>
                <a href="https://doi.org/10.1016/j.rinp.2024.107879" target="_blank" rel="noopener">HTML</a>
              </div>
            </div>
          </article>

          <article class="selected-publication">
            <div class="selected-pub-thumb">
              <img src="../media/publications/spin-vector-potential.png" alt="Spin vector potential and spin Aharonov-Bohm effect schematic">
            </div>
            <div class="selected-pub-body">
              <h3><a href="publication/journal-article/">Spin vector potential and spin Aharonov-Bohm effect</a></h3>
              <p class="selected-pub-authors">Chen, J.-L.; Fan, X.-Y.; <strong>Xie, X.-R.</strong></p>
              <p class="selected-pub-venue"><em>Fundamental Research</em> <span>2025</span>, 5(6), 2500-2504</p>
              <div class="selected-pub-links">
                <a href="publication/journal-article/">ABS</a>
                <a href="https://doi.org/10.1016/j.fmre.2023.10.003" target="_blank" rel="noopener">DOI</a>
                <a href="https://doi.org/10.1016/j.fmre.2023.10.003" target="_blank" rel="noopener">HTML</a>
              </div>
            </div>
          </article>

          <article class="selected-publication">
            <div class="selected-pub-thumb">
              <img src="../media/publications/gyromagnetic-factor.png" alt="Gyromagnetic factor mechanism schematic">
            </div>
            <div class="selected-pub-body">
              <h3><a href="publication/alter-gyromagnetic-factor/">A possible mechanism to alter gyromagnetic factor</a></h3>
              <p class="selected-pub-authors">Chen, J.-L.; Fan, X.-Y.; <strong>Xie, X.-R.</strong></p>
              <p class="selected-pub-venue"><em>Results in Physics</em> <span>2025</span>, 69, 108125</p>
              <div class="selected-pub-links">
                <a href="publication/alter-gyromagnetic-factor/">ABS</a>
                <a href="https://doi.org/10.1016/j.rinp.2025.108125" target="_blank" rel="noopener">DOI</a>
                <a href="https://doi.org/10.1016/j.rinp.2025.108125" target="_blank" rel="noopener">HTML</a>
              </div>
            </div>
          </article>

          <article class="selected-publication">
            <div class="selected-pub-thumb">
              <img src="../media/publications/angular-momentum-waves.png" alt="Angular-momentum waves schematic">
            </div>
            <div class="selected-pub-body">
              <h3><a href="publication/preprint/">Predicting angular-momentum waves based on Yang-Mills equations</a></h3>
              <p class="selected-pub-authors">Fan, X.-Y.; <strong>Xie, X.-R.</strong>; Chen, J.-L.</p>
              <p class="selected-pub-venue"><em>Results in Physics</em> <span>2024</span>, 56, 107300</p>
              <div class="selected-pub-links">
                <a href="publication/preprint/">ABS</a>
                <a href="https://doi.org/10.1016/j.rinp.2023.107300" target="_blank" rel="noopener">DOI</a>
                <a href="https://doi.org/10.1016/j.rinp.2023.107300" target="_blank" rel="noopener">HTML</a>
              </div>
            </div>
          </article>

          <article class="selected-publication">
            <div class="selected-pub-thumb">
              <img src="../media/publications/epr-steering-inequalities.png" alt="Einstein-Podolsky-Rosen steering inequalities schematic">
            </div>
            <div class="selected-pub-body">
              <h3><a href="publication/epr-steering-inequalities/">Stronger Einstein-Podolsky-Rosen steering inequalities to detect the boundary between quantum mechanics and classical models</a></h3>
              <p class="selected-pub-authors">Wang, R.-C.; Li, Z.-C.; Fan, X.-Y.; <strong>Xie, X.-R.</strong>; Wei, H.-H.; Oh, C. H.; Chen, J.-L.</p>
              <p class="selected-pub-venue"><em>Physical Review A</em> <span>2024</span>, 110, 052210</p>
              <div class="selected-pub-links">
                <a href="publication/epr-steering-inequalities/">ABS</a>
                <a href="https://doi.org/10.1103/PhysRevA.110.052210" target="_blank" rel="noopener">DOI</a>
                <a href="https://doi.org/10.1103/PhysRevA.110.052210" target="_blank" rel="noopener">HTML</a>
              </div>
            </div>
          </article>
        </div>
    design:
      columns: '2'
  - block: collection
    id: talks
    content:
      title: 报告
      count: 5
      filters:
        folders:
          - event
        exclude_future: false
        exclude_past: false
    design:
      columns: '2'
      view: compact
  - block: collection
    id: posts
    content:
      title: 生活随笔
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - post
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: compact
      columns: '2'
  - block: contact
    id: contact
    content:
      title: 联系方式
      subtitle:
      text: |-
        欢迎就冷原子物理、中性原子量子计算和学术合作进行交流。
      email: 1805972161@qq.com
      address:
        street: 北京大学新燕园校区
        city: 北京市
        region: 昌平区马池口镇
        country: 中国
        country_code: CN
      coordinates:
        latitude: '40.17498'
        longitude: '116.15692'
      contact_links:
        - icon: envelope
          icon_pack: fas
          name: Gmail
          link: 'mailto:xxr2110584@gmail.com'
        - icon: github
          icon_pack: fab
          name: GitHub
          link: 'https://github.com/Jim-108ghost'
        - icon: university
          icon_pack: fas
          name: 北京大学
          link: 'https://www.pku.edu.cn/'
      autolink: true
      form:
        provider: ''
        formspree:
          id:
        netlify:
          captcha: false
    design:
      columns: '2'
  - block: markdown
    id: crazy-ideas
    content:
      title: 疯狂想法
      subtitle: ''
      text: |-
        <details class="crazy-ideas-panel">
          <summary>打开低调笔记本</summary>
          <p>一个低调的位置，用来记录还没有完全成形的科研想法、猜想方案，以及未来可能发展成项目的问题。</p>
          <p><a href="crazy-ideas/">浏览笔记本</a></p>
        </details>
    design:
      columns: '2'
---
