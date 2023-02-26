---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = []
const otherMembers = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #lead>核心领导者</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
    <VPTeamPageSection>
    <template #title>团队成员</template>
    <template #members>
      <VPTeamMembers size="small" :members="otherMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
