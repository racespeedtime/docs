<template>
  <div class="my-6 grid grid-cols-[repeat(auto-fit,minmax(224px,1fr))] gap-4">
    <div
      v-for="member in sortedMembers"
      class="px-4 py-6 flex flex-col justify-center items-center border border-light-100 rounded-lg bg-light-400 dark:bg-dark-400 dark:border-dark-100"
    >
      <var-avatar class="shadow-xl" :src="member.avatar" size="large">
        {{ member.name.slice(0, 1) }}
      </var-avatar>
      <div class="font-semibold text-lg mt-5">{{ member.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
});

const sortedMembers = computed(() => {
  return props.members.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
});
</script>
