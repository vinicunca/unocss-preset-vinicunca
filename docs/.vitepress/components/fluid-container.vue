<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  contentClass: string;
  styleProperty: string;
}>();

const fluidRef = ref(null);
const elementValue = ref('');

function updateValue() {
  if (fluidRef.value) {
    const style = window.getComputedStyle(fluidRef.value);
    elementValue.value = style[props.styleProperty];
  }
}

onMounted(() => {
  updateValue();
  window.addEventListener('resize', updateValue);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateValue);
});
</script>

<template>
  <div class="flex flex-col gap-4 pt-4">
    <div
      ref="fluidRef"
      class="bg-$vp-c-gray-1 rounded"
      :class="contentClass"
    >
      <slot :el-value="elementValue" />
    </div>

    <div class="p-2 bg-$vp-c-gray-1 w-fit rounded self-end">
      {{ elementValue }}
    </div>
  </div>
</template>
