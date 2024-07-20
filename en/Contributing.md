---
title: 贡献
---
# 贡献
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cn-sy1.rains3.com/xtremewave/QingFeng.png',
    name: 'QingFeng',
    title: 'Main Developer',
    org: 'XtremeWave',
    orgLink: 'https://github.com/XtremeWave',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' }
    ]
  },
  {
    avatar: 'https://cn-sy1.rains3.com/xtremewave/LezaiYa1.jpg',
    name: 'LezaiYa1',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/LezaiYa1' }
    ]
  },
]
</script>
<div align="center">
<h3>感谢下方成员对本站的贡献</h3>
<VPTeamMembers size="medium" :members="members" />
</div>
<br>

# 如何为本站做出贡献
您可以在本网站的GitHub的仓库Pr,在Pr合并后您将成为本网站的贡献者。