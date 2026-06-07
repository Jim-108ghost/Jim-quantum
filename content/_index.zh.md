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
        - title: Pre-PhD & FYP
          company: State Key Laboratory for Mesoscopic Physics and Frontiers Science Center for Nano-optoelectronics, School of Physics @ Peking University
          company_url: 'https://nano-optoelectronics.pku.edu.cn/index.htm'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-08-01'
          date_end: ''
          description: 参与冷原子和量子光学相关实验研究。
        - title: Semester Intern
          company: Institute of Quantum Electronics @ PKU
          company_url: 'https://iqe.pku.edu.cn/'
          company_logo: pku-emblem.svg
          location: Beijing, China
          date_start: '2024-03-01'
          date_end: '2024-07-01'
          description: 参与量子电子学和原子物理相关实验工作。
        - title: Summer Intern
          company: Center for Quantum Technology @ NUS & School of Physical and Mathematical Science @ NTU
          company_url: 'https://cqt10.quantumlah.org/'
          company_logo: cqt.png
          location: Singapore
          date_start: '2022-07-01'
          date_end: '2022-10-01'
          description: 参与量子技术相关学习与研究训练。
        - title: Undergraduate
          company: Chern Institute of Mathematics @ NKU
          company_url: 'http://www.nim.nankai.edu.cn/'
          company_logo: nankai-emblem.svg
          location: Tianjin, China
          date_start: '2022-03-01'
          date_end: '2024-07-01'
          description: 完成本科阶段的科研训练与课程学习。
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
    id: featured
    content:
      title: 论文
      subtitle: ''
      text: |-
        1. Fan, X.-Y.; **Xie, X.-R.**\*; Li, S.-M.; Chen, J.-L. [SO(4) symmetry in hydrogen-atom-like model with spin](/zh/publication/conference-paper/). *Results in Physics* **2024**, *63*, 107879. [DOI](https://doi.org/10.1016/j.rinp.2024.107879)  
           \*共同一作。

        2. Chen, J.-L.; Fan, X.-Y.; **Xie, X.-R.** [Spin vector potential and spin Aharonov-Bohm effect](/zh/publication/journal-article/). *Fundamental Research* **2025**, *5*(6), 2500-2504. [DOI](https://doi.org/10.1016/j.fmre.2023.10.003)

        3. Chen, J.-L.; Fan, X.-Y.; **Xie, X.-R.** [A possible mechanism to alter gyromagnetic factor](/zh/publication/alter-gyromagnetic-factor/). *Results in Physics* **2025**, *69*, 108125. [DOI](https://doi.org/10.1016/j.rinp.2025.108125)

        4. Fan, X.-Y.; **Xie, X.-R.**; Chen, J.-L. [Predicting angular-momentum waves based on Yang-Mills equations](/zh/publication/preprint/). *Results in Physics* **2024**, *56*, 107300. [DOI](https://doi.org/10.1016/j.rinp.2023.107300)
    design:
      columns: '2'
  - block: collection
    id: talks
    content:
      title: 报告
      filters:
        folders:
          - event
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
---
