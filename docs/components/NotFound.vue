<template>
  <div class="flex flex-col items-center h-full my-40 mx-4 leading-loose">
    <div class="text-4xl font-bold mb-4">Ooops...</div>
    <div>
      同志，看起来你偏离了航向，或许有些迷茫，不过这都是暂时的，就像我们不确定的人生。
    </div>
    <div>
      <span class="font-bold"
        >"时空是个圆圈，直行或是转弯，我们最终都会相见。"</span
      >
      <iframe
        class="mx-auto h-100px"
        frameborder="no"
        src="//music.163.com/outchain/player?type=2&id=1974443814&auto=1&height=66"
      />
    </div>
    <var-button
      type="primary"
      loading-type="wave"
      :loading="isLoading"
      @click="handleRedirect"
      >⛵调整航向</var-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();
const isLoading = ref(false);

const handleRedirect = () => {
  isLoading.value = true;
  setTimeout(() => router.go("/"), 500);
};
</script>
