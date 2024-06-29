<script setup lang="ts">
import { ref } from 'vue';

const classLists = [
  {
    name: 'bounce',
    unoClass: 'animate__bounce',
  },
  {
    name: 'flash',
    unoClass: 'animate__flash',
  },
  {
    name: 'pulse',
    unoClass: 'animate__pulse',
  },
  {
    name: 'rubberBand',
    unoClass: 'animate__rubberBand',
  },
  {
    name: 'shakeX',
    unoClass: 'animate__shakeX',
  },
  {
    name: 'shakeY',
    unoClass: 'animate__shakeY',
  },
  {
    name: 'headShake',
    unoClass: 'animate__headShake',
  },
  {
    name: 'swing',
    unoClass: 'animate__swing',
  },
  {
    name: 'tada',
    unoClass: 'animate__tada',
  },
  {
    name: 'wobble',
    unoClass: 'animate__wobble',
  },
  {
    name: 'jello',
    unoClass: 'animate__jello',
  },
  {
    name: 'heartBeat',
    unoClass: 'animate__heartBeat',
  },
  {
    name: 'backInDown',
    unoClass: 'animate__backInDown',
  },
  {
    name: 'backInLeft',
    unoClass: 'animate__backInLeft',
  },
  {
    name: 'backInRight',
    unoClass: 'animate__backInRight',
  },
  {
    name: 'backInUp',
    unoClass: 'animate__backInUp',
  },
  {
    name: 'backOutDown',
    unoClass: 'animate__backOutDown',
  },
  {
    name: 'backOutLeft',
    unoClass: 'animate__backOutLeft',
  },
  {
    name: 'backOutRight',
    unoClass: 'animate__backOutRight',
  },
  {
    name: 'backOutUp',
    unoClass: 'animate__backOutUp',
  },
  {
    name: 'bounceIn',
    unoClass: 'animate__bounceIn',
  },
  {
    name: 'bounceInDown',
    unoClass: 'animate__bounceInDown',
  },
  {
    name: 'bounceInLeft',
    unoClass: 'animate__bounceInLeft',
  },
  {
    name: 'bounceInRight',
    unoClass: 'animate__bounceInRight',
  },
  {
    name: 'bounceInUp',
    unoClass: 'animate__bounceInUp',
  },
  {
    name: 'bounceOut',
    unoClass: 'animate__bounceOut',
  },
  {
    name: 'bounceOutDown',
    unoClass: 'animate__bounceOutDown',
  },
  {
    name: 'bounceOutLeft',
    unoClass: 'animate__bounceOutLeft',
  },
  {
    name: 'bounceOutRight',
    unoClass: 'animate__bounceOutRight',
  },
  {
    name: 'bounceOutUp',
    unoClass: 'animate__bounceOutUp',
  },
  {
    name: 'fadeIn',
    unoClass: 'animate__fadeIn',
  },
  {
    name: 'fadeInDown',
    unoClass: 'animate__fadeInDown',
  },
  {
    name: 'fadeInDownBig',
    unoClass: 'animate__fadeInDownBig',
  },
  {
    name: 'fadeInLeft',
    unoClass: 'animate__fadeInLeft',
  },
  {
    name: 'fadeInLeftBig',
    unoClass: 'animate__fadeInLeftBig',
  },
  {
    name: 'fadeInRight',
    unoClass: 'animate__fadeInRight',
  },
  {
    name: 'fadeInRightBig',
    unoClass: 'animate__fadeInRightBig',
  },
  {
    name: 'fadeInUp',
    unoClass: 'animate__fadeInUp',
  },
  {
    name: 'fadeInUpBig',
    unoClass: 'animate__fadeInUpBig',
  },
  {
    name: 'fadeInTopLeft',
    unoClass: 'animate__fadeInTopLeft',
  },
  {
    name: 'fadeInTopRight',
    unoClass: 'animate__fadeInTopRight',
  },
  {
    name: 'fadeInBottomLeft',
    unoClass: 'animate__fadeInBottomLeft',
  },
  {
    name: 'fadeInBottomRight',
    unoClass: 'animate__fadeInBottomRight',
  },
  {
    name: 'fadeOut',
    unoClass: 'animate__fadeOut',
  },
  {
    name: 'fadeOutDown',
    unoClass: 'animate__fadeOutDown',
  },
  {
    name: 'fadeOutDownBig',
    unoClass: 'animate__fadeOutDownBig',
  },
  {
    name: 'fadeOutLeft',
    unoClass: 'animate__fadeOutLeft',
  },
  {
    name: 'fadeOutLeftBig',
    unoClass: 'animate__fadeOutLeftBig',
  },
  {
    name: 'fadeOutRight',
    unoClass: 'animate__fadeOutRight',
  },
  {
    name: 'fadeOutRightBig',
    unoClass: 'animate__fadeOutRightBig',
  },
  {
    name: 'fadeOutUp',
    unoClass: 'animate__fadeOutUp',
  },
  {
    name: 'fadeOutUpBig',
    unoClass: 'animate__fadeOutUpBig',
  },
  {
    name: 'fadeOutTopLeft',
    unoClass: 'animate__fadeOutTopLeft',
  },
  {
    name: 'fadeOutTopRight',
    unoClass: 'animate__fadeOutTopRight',
  },
  {
    name: 'fadeOutBottomRight',
    unoClass: 'animate__fadeOutBottomRight',
  },
  {
    name: 'fadeOutBottomLeft',
    unoClass: 'animate__fadeOutBottomLeft',
  },
  {
    name: 'flip',
    unoClass: 'animate__flip',
  },
  {
    name: 'flipInX',
    unoClass: 'animate__flipInX',
  },
  {
    name: 'flipInY',
    unoClass: 'animate__flipInY',
  },
  {
    name: 'flipOutX',
    unoClass: 'animate__flipOutX',
  },
  {
    name: 'flipOutY',
    unoClass: 'animate__flipOutY',
  },
  {
    name: 'lightSpeedInRight',
    unoClass: 'animate__lightSpeedInRight',
  },
  {
    name: 'lightSpeedInLeft',
    unoClass: 'animate__lightSpeedInLeft',
  },
  {
    name: 'lightSpeedOutRight',
    unoClass: 'animate__lightSpeedOutRight',
  },
  {
    name: 'lightSpeedOutLeft',
    unoClass: 'animate__lightSpeedOutLeft',
  },
  {
    name: 'rotateIn',
    unoClass: 'animate__rotateIn',
  },
  {
    name: 'rotateInDownLeft',
    unoClass: 'animate__rotateInDownLeft',
  },
  {
    name: 'rotateInDownRight',
    unoClass: 'animate__rotateInDownRight',
  },
  {
    name: 'rotateInUpLeft',
    unoClass: 'animate__rotateInUpLeft',
  },
  {
    name: 'rotateInUpRight',
    unoClass: 'animate__rotateInUpRight',
  },
  {
    name: 'rotateOut',
    unoClass: 'animate__rotateOut',
  },
  {
    name: 'rotateOutDownLeft',
    unoClass: 'animate__rotateOutDownLeft',
  },
  {
    name: 'rotateOutDownRight',
    unoClass: 'animate__rotateOutDownRight',
  },
  {
    name: 'rotateOutUpLeft',
    unoClass: 'animate__rotateOutUpLeft',
  },
  {
    name: 'rotateOutUpRight',
    unoClass: 'animate__rotateOutUpRight',
  },
  {
    name: 'hinge',
    unoClass: 'animate__hinge',
  },
  {
    name: 'jackInTheBox',
    unoClass: 'animate__jackInTheBox',
  },
  {
    name: 'rollIn',
    unoClass: 'animate__rollIn',
  },
  {
    name: 'rollOut',
    unoClass: 'animate__rollOut',
  },
  {
    name: 'zoomIn',
    unoClass: 'animate__zoomIn',
  },
  {
    name: 'zoomInDown',
    unoClass: 'animate__zoomInDown',
  },
  {
    name: 'zoomInLeft',
    unoClass: 'animate__zoomInLeft',
  },
  {
    name: 'zoomInRight',
    unoClass: 'animate__zoomInRight',
  },
  {
    name: 'zoomInUp',
    unoClass: 'animate__zoomInUp',
  },
  {
    name: 'zoomOut',
    unoClass: 'animate__zoomOut',
  },
  {
    name: 'zoomOutDown',
    unoClass: 'animate__zoomOutDown',
  },
  {
    name: 'zoomOutLeft',
    unoClass: 'animate__zoomOutLeft',
  },
  {
    name: 'zoomOutRight',
    unoClass: 'animate__zoomOutRight',
  },
  {
    name: 'zoomOutUp',
    unoClass: 'animate__zoomOutUp',
  },
  {
    name: 'slideInDown',
    unoClass: 'animate__slideInDown',
  },
  {
    name: 'slideInLeft',
    unoClass: 'animate__slideInLeft',
  },
  {
    name: 'slideInRight',
    unoClass: 'animate__slideInRight',
  },
  {
    name: 'slideInUp',
    unoClass: 'animate__slideInUp',
  },
  {
    name: 'slideOutDown',
    unoClass: 'animate__slideOutDown',
  },
  {
    name: 'slideOutLeft',
    unoClass: 'animate__slideOutLeft',
  },
  {
    name: 'slideOutRight',
    unoClass: 'animate__slideOutRight',
  },
  {
    name: 'slideOutUp',
    unoClass: 'animate__slideOutUp',
  },
];

const classUno = ref('');

function toggleClass(item: any) {
  classUno.value = item.unoClass;
}
</script>

<template>
  <div class="grid grid-cols-[1fr_250px] h-screen gap-4">
    <div
      :class="[classUno]"
      class="callout self-center justify-self-center text-center font-bold"
    >
      Preset Animation
    </div>

    <div class="overflow-auto p-9">
      <div class="flex flex-col gap-2">
        <button
          v-for="item in classLists"
          :key="item.name"
          @click="toggleClass(item)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.callout {
  font-size: min(14vw, 4rem);
}
</style>
