---
title: 贡献
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/Image/QingFeng.png',
    name: 'QingFeng',
    title: '主开发者',
    org: 'XtremeWave',
    orgLink: 'https://github.com/XtremeWave',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' }
    ]
  },
  {
    avatar: '/Image/LezaiYa1.png',
    name: 'LezaiYa1',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/LezaiYa1' }
    ]
  },
  {
    avatar: '/Image/Slok7565.png',
    name: 'Slok7565',
    title: '贡献者',
    org: 'XtremeWave',
    orgLink: 'https://github.com/XtremeWave',
    links: [
      { icon: 'github', link: 'https://github.com/Slok7565' }
    ]
  }
]
</script>

<div align="center">
<h2>贡献</h2>
<h2>感谢下方成员对本站的贡献</h2>
<VPTeamMembers size="medium" :members="members" />
<br>

<h1>如何为本站做出贡献?</h1>
您可以在本网站的GitHub的仓库Pr,在Pr合并后您将成为本网站的贡献者。

</div>