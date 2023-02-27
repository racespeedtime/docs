<template>
  <div class="flex flex-col items-center h-full my-40 mx-4">
    <div class="text-3xl font-bold mb-4 italic">Ooops...</div>
    <div class="text-sm mb-4 leading-relaxed">
      <span>同志，看起来你</span>
      <span class="italic font-[宋体] font-bold mx-1">偏离了航向</span>
      <span>，或许有些迷茫，不过这都是暂时的，就像我们不确定的人生。</span>
    </div>
    <div class="font-bold text-sm leading-relaxed">
      "{{ especiallyForYou[randIdx] }}"
    </div>
    <iframe
      class="mt-4 mb-8"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      src="//music.163.com/outchain/player?type=2&id=1974443814&auto=1&height=66"
    />
    <div class="flex gap-4">
      <var-button type="info" @click="changeRandIdx">🥳 换一句</var-button>
      <var-button
        type="primary"
        loading-type="wave"
        :loading="isLoading"
        @click="handleRedirect"
        >⛵ 调整航向</var-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();
const isLoading = ref(false);

const especiallyForYou = [
  "时空是个圆圈，直行或是转弯，我们最终都会相见。",
  "只有小时候是纯粹而又简单的快乐，长大后的快乐只有建立在数字和自由的前提之上。",
  "偶尔远离繁杂的现实世界，拥入怀抱虚拟世界的一片净土。",
  "忘记尘世烦恼，沉浸在自己的小世界里。",
  "我是个没有远大理想抱负的庸人。",
  "每个优秀的人，都有一段沉默的时光。那段时光，是付出了很多努力却得不到结果的日子，我们把它叫做扎根。",
  "悄悄沉淀，不解释，不张扬。",
  "真正的死亡是被人遗忘。",
  "名字只是个称呼，重要的是一个人的灵魂。",
  "网上的口水战，几乎都无关紧要，别去参与。",
  "活着就好，大内卷时代的浪潮下每个人都是无力的。",
  "快时代的今天，慢慢是一种奢求。",
  "互联网有时只是个消遣工具。",
  "黑暗中寻找微光，却被时代的巨浪拍在沙滩上。",
  "当劳动无法实现人的自身价值时，人们将会像逃避瘟疫一样逃避劳动。",
  "一个人，要走多远的距离，才能在时间的尽头，追回最初的自己。",
  "你就来这一趟。",
  "成年人的安全感来自稳定的情绪和稳定的收入。",
  "当大众认为某个行业很赚钱的时候，那它就已经不赚钱了。",
  "若无闲事挂心头，便是人间好时节。",
  "别人拥有的，你也会有的。",
  "找到自己的生活节奏。",
  "多数情况下，你只要做好自己就够了。",
  "成年人的底气来自于有多少钱和有多优秀。",
  "除了终身学习，别无退路可言。",
  "生存是第一法则，信仰是唯一动力。",
  "你来的太晚了，但我转念一想，你来的又太及时了，你再不来我可能就撑不下去了。",
  "少关注别人，多塑造自己。",
  "不要让自己的生活节奏被他人打乱，要给自己空间。",
  "不要因为没有掌声而丢掉梦想。",
  "从疫情手里夺回一点青春。",
  "自在自由毕竟是追求，实现不了大不了就算了。",
  "时代的红利过去了，现在该还债了。",
  "苦难就是苦难，苦难不会带来成功。苦难不值得追求，磨练意志是因为苦难无法躲开。",
  "不要去取悦别人。喜欢的人会喜欢你，不喜欢你的人不会喜欢你。",
  "我的青春太过于安静，以至于到它结束，一时都没反应过来，自己已经是一个成年人了。没有遇到小时候幻想的白净少年，没有激情洋溢的校园时光，没有偷偷藏起的脸红心跳，没有恣意而为的潇洒，没有漫画里憧憬的许多美好，只有一些旧旧的回忆，黄昏时站在窗前看树影。",
  "生命中永远都会有懊恼的事，但我知道，我们是为了不留遗憾而活着的。",
  "有些话不能说，有些话不能那么说，然后，然后我就不想说话了。",
  "总有些人想用三言两语来轻描淡写别人多年下来的积累。",
  "你呢？也一样追求自由吗？我的灵魂可太想要自由了，渴望自由的鸟儿是关不住的。",
  "谁说这个时代没有诗人？你我不都是吗。",
  "知识不能靠本身传播，需要有人承载着它，才能扩散出去。",
  "旧人不知我近况，新人不知我过往。",
  "总有一个瞬间，内心的那团火被点燃了，然后，一切都变得不一样了。",
  "活在每一个必将到来的当下，与虚无，残酷，而又痛苦的生活斗争到最后一秒，在每一个痛苦且没有意义的日子中起舞，最后勇敢地爱上生活。",
  "偏航太久了，该回来了。",
  "有时互联网很吵，那是属于一群胜利者的欢呼。",
  "所以困住你的到底是什么？",
  "别在混沌的世界里迷失自己！",
];

const randIdx = ref(0);

const changeRandIdx = () => {
  randIdx.value = Math.floor(Math.random() * especiallyForYou.length);
};

const handleRedirect = () => {
  isLoading.value = true;
  setTimeout(() => router.go("/"), 500);
};
</script>
