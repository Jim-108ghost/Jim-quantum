---
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      username: admin
  - block: skills
    content:
      title: Skills
      text: ''
      username: admin
    design:
      columns: '1'
  - block: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: PhD
          company: State Key Laboratory for Mesoscopic Physics and Frontiers Science Center for Nano-optoelectronics, School of Physics @ Peking University
          company_url: 'https://nano-optoelectronics.pku.edu.cn/index.htm'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2025-09-01'
          date_end: ''
          description: Building the YbII system, a continuously reloadable optical-tweezer array of ytterbium atoms.
        - title: Pre-PhD & FYP
          company: State Key Laboratory for Mesoscopic Physics and Frontiers Science Center for Nano-optoelectronics, School of Physics @ Peking University
          company_url: 'https://nano-optoelectronics.pku.edu.cn/index.htm'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-08-01'
          date_end: '2025-08-01'
          description: Building the YbI system, including MOT and optical-tweezer beam-path design and optimization of the compressed MOT.
        - title: Semester Intern
          company: Institute of Quantum Electronics @ PKU
          company_url: 'https://iqe.pku.edu.cn/'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-03-01'
          date_end: '2024-07-01'
          description: Worked on image processing and data analysis for an ultracold-atom gyroscope experiment.
        - title: Summer Intern
          company: Center for Quantum Technology @ NUS & School of Physical and Mathematical Science @ NTU
          company_url: 'https://cqt10.quantumlah.org/'
          company_logo: cqt.png
          location: Singapore
          date_start: '2022-07-01'
          date_end: '2022-10-01'
          description: Built a compact Sr atomic source based on laser ablation and analyzed atomic fluorescence signals.
        - title: Undergraduate
          company: Chern Institute of Mathematics @ NKU
          company_url: 'http://www.nim.nankai.edu.cn/'
          company_logo: nankai-emblem.svg
          location: Tianjin, China
          date_start: '2022-03-01'
          date_end: '2024-07-01'
          description: Participated in theoretical research on spin and symmetry.
    design:
      columns: '2'
  - block: collection
    id: research-news
    content:
      title: Research News
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
      title: 椤圭洰
      filters:
        folders:
          - project
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
        - name: Numerical Simulation
          tag: Numerical Simulation
        - name: SolidWorks
          tag: SolidWorks
        - name: Theory Notes
          tag: Theory Notes
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
      title: Selected Publications
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
              <p class="selected-pub-note">*鍏卞悓涓€浣溿€?/p>
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
      title: 鎶ュ憡
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
      title: 鐢熸椿闅忕瑪
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
      title: Contact
      subtitle:
      text: |-
        I am open to discussions on cold-atom physics, neutral-atom quantum computation, and academic collaboration.
      email: 1805972161@qq.com
      address:
        street: New Yanyuan Campus, Peking University
        city: Beijing
        region: Changping District, Machikou Town
        country: China
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
          name: 鍖椾含澶у
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
      title: 鐤媯鎯虫硶
      subtitle: ''
      text: |-
        <details class="crazy-ideas-panel">
          <summary>鎵撳紑浣庤皟绗旇鏈?/summary>
          <p>涓€涓綆璋冪殑浣嶇疆锛岀敤鏉ヨ褰曡繕娌℃湁瀹屽叏鎴愬舰鐨勭鐮旀兂娉曘€佺寽鎯虫柟妗堬紝浠ュ強鏈潵鍙兘鍙戝睍鎴愰」鐩殑闂銆?/p>
          <p><a href="crazy-ideas/">娴忚绗旇鏈?/a></p>
        </details>
    design:
      columns: '2'
---
