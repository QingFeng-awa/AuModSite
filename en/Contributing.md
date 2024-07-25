---
title: Contribute
---
# Contribute
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/Image/QingFeng.png',
    name: 'QingFeng',
    title: 'Main Developer',
    org: 'XtremeWave',
    orgLink: 'https://github.com/XtremeWave',
    links: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa' }
    ]
  },
  {
    avatar: '/Image/LezaiYa1.png',
    name: 'LezaiYa1',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/LezaiYa1' }
    ]
  },
]
</script>
<div align="center">
<h3>Thank you to the members below for their contributions to the site</h3>
<VPTeamMembers size="medium" :members="members" />
</div>
<br>

# How to Contribute to This Site
You can contribute to this site by submitting a Pull Request to the GitHub repository. Once your PR is merged, you will become a contributor to the site.