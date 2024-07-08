<script setup lang="ts">
import { toCamelCase } from '@vinicunca/perkakas';
import 'animate.css';
import 'magic.css/dist/magic.css';
import { nextTick, ref } from 'vue';

import { animationNames } from './data';

const isAnimating = ref(false);
const animationName = ref();
const oriName = ref();

async function setAnimated(value: string = animationName.value) {
  if (isAnimating.value) {
    animationName.value = undefined;
    oriName.value = undefined;
    isAnimating.value = false;

    await nextTick();
  }

  animationName.value = value;
  const oriValue = value.replace('animate-', '');
  oriName.value = `animate__animated animate__${toCamelCase(oriValue)} magictime ${toCamelCase(oriValue)}`;
  isAnimating.value = true;
}

function setAnimatedStop() {
  isAnimating.value = false;
}
</script>

<template>
  <div class="relative grid grid-cols-[1fr_250px] h-screen gap-4">
    <button
      class="absolute left-10px top-10px"
      @click="isAnimating ? setAnimatedStop() : setAnimated()"
    >
      play
    </button>

    <div class="flex items-center self-center justify-center justify-self-center gap-10">
      <div
        class="size-25 flex items-center self-center justify-center justify-self-center rounded bg-sky text-center font-bold"
        :class="[
          {
            [oriName]: isAnimating,
          },
        ]"
        @animationend="setAnimatedStop"
      >
        Animated O
      </div>
      <div
        class="size-25 flex items-center self-center justify-center justify-self-center rounded bg-sky text-center font-bold"
        :class="[
          {
            [animationName]: isAnimating,
          },
        ]"
        @animationend="setAnimatedStop"
      >
        Animated
      </div>
    </div>

    <div class="overflow-auto p-9">
      <div class="flex flex-col gap-2">
        <button
          v-for="item in animationNames"
          :key="item"
          @click="setAnimated(item)"
        >
          {{ item.replace('animate-', '') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
body {
  margin: 0;
}
</style>
