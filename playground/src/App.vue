<script setup lang="ts">
import { toCamelCase } from '@vinicunca/perkakas';
import { nextTick, ref } from 'vue';
import { animationNames } from './data';
</script>

<template>
  <div
    data-orientation="vertical"
    data-collapsed="false"
    class="relative grid grid-cols-[1fr_250px] h-screen gap-4 [&[data-orientation=vertical][data-collapsed=false]]:w-48"
  >
    <h1>hehehehe</h1>
  </div>
</template>

<style lang="postcss">
body {
  margin: 0;
}
</style>
