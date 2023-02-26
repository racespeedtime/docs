<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>团队成员(部分,含历史)</template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
      <template #title>Fire核心领导者</template>
      <template #members>
        <Member :members="fireCoreMembers" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>Fire车队成员</template>
      <template #members>
        <Member :members="fireMembers" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>RST核心领导者</template>
      <template #members>
        <Member :members="rstCoreMembers" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>RST团队成员</template>
      <template #members>
        <Member :members="rstMembers" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
} from "vitepress/theme";
import Member from "./Member.vue";

const fireMembers = [
  { name: "ED_Ven8" },
  { name: "X_Andy" },
  { name: "KB" },
  { name: "S_Ben" },
  { name: "KiVen" },
  { name: "ED_DreamF" },
  { name: "ED_Spider" },
  { name: "ED_Aaron" },
  { name: "FlameS" },
  { name: "XuWei" },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=727035705&s=140",
    name: "JoshenKM",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=252368991&s=140",
    name: "波仔",
  },
];

const fireCoreMembers = [
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1105670977&s=140",
    name: "ED_Death",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=809339467&s=140",
    name: "Yi1_Mr(Myron)",
  },
];

const rstCoreMembers = [
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1939023940&s=140",
    name: "Denver",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=727035705&s=140",
    name: "JoshenKM",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1040859075&s=140",
    name: "Hygen",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1538808163&s=140",
    name: "Safford",
  },
];

const rstMembers = [
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2540755159&s=140",
    name: "747800",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=78641613&s=140",
    name: "Air",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2583026386&s=140",
    name: "ASK",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2806687237&s=140",
    name: "Ambrose",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1243631613&s=140",
    name: "Amosso",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1456847933&s=140",
    name: "Amouons",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=354143464&s=140",
    name: "Ap_Igniz",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=635520987&s=140",
    name: "ArvinJM",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1330996169&s=140",
    name: "Asso",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3332150349&s=140",
    name: "Best.Yz",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1664116967&s=140",
    name: "Best_Hz",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1044240334&s=140",
    name: "Byron",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2777201082&s=140",
    name: "ChiTu",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=780691418&s=140",
    name: "Coid",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=447824449&s=140",
    name: "CyCt",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2778158264&s=140",
    name: "DFcat",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1491239661&s=140",
    name: "DavisZy",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3298434685&s=140",
    name: "Donji",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1425801863&s=140",
    name: "EX丶XH",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=527501940&s=140",
    name: "E_Lope",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3313545759&s=140",
    name: "FengZi",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3225172542&s=140",
    name: "FunnySnake1111",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=153359314&s=140",
    name: "Gemzf",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1244030192&s=140",
    name: "Glenn_DK",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2814305061&s=140",
    name: "Harland",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=935635062&s=140",
    name: "Hurt",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2269167988&s=140",
    name: "Iridescent.",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1621190564&s=140",
    name: "KanoD",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1541614363&s=140",
    name: "Kavan",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=714334785&s=140",
    name: "Keisuke",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2049733622&s=140",
    name: "Kiven",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2357674566&s=140",
    name: "Kodak",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1345749978&s=140",
    name: "LTRCN",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1513017037&s=140",
    name: "LeonScott",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=505683486&s=140",
    name: "Mark",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1027352750&s=140",
    name: "MooNcaKe",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2087480355&s=140",
    name: "Promise.DC",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=751081898&s=140",
    name: "QiuMeng",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=823090278&s=140",
    name: "Reaper",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=383901021&s=140",
    name: "Rooftops",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2480616753&s=140",
    name: "Ryosuke",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1530551866&s=140",
    name: "Shoumar",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2763445403&s=140",
    name: "SoloBag",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3473214434&s=140",
    name: "Stnzzd",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1352138067&s=140",
    name: "Xy_Eddy",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1491152475&s=140",
    name: "YI",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2225741902&s=140",
    name: "Yuk1N6",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3184687545&s=140",
    name: "ad",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2503669433&s=140",
    name: "peretdk",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=386835894&s=140",
    name: "xuxiao",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=258314027&s=140",
    name: "xyljj",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1722924569&s=140",
    name: "云鶴",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=252368991&s=140",
    name: "波仔",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2045562054&s=140",
    name: "自由的规则",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=3051619248&s=140",
    name: "酱油",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2807952029&s=140",
    name: "Maki",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=1085846804&s=140",
    name: "Johnny_DK",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=2280634125&s=140",
    name: "GongB",
  },
  {
    avatar: "https://q4.qlogo.cn/g?b=qq&nk=812295052&s=140",
    name: "诺屿",
  },
];
</script>
