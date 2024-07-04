<script setup lang="ts">
import { nextTick, ref } from 'vue';

const classLists = [
  'animate-back-in-down',
  'animate-back-in-left',
  'animate-back-in-right',
  'animate-back-in-up',
  'animate-back-out-down',
  'animate-back-out-left',
  'animate-back-out-right',
  'animate-back-out-up',
  'animate-backInDown',
  'animate-backInLeft',
  'animate-backInRight',
  'animate-backInUp',
  'animate-backOutDown',
  'animate-backOutLeft',
  'animate-backOutRight',
  'animate-backOutUp',
  'animate-boingInUp',
  'animate-boingOutDown',
  'animate-bombLeftOut',
  'animate-bombRightOut',
  'animate-bounce',
  'animate-bounce-alt',
  'animate-bounce-in',
  'animate-bounce-in-down',
  'animate-bounce-in-left',
  'animate-bounce-in-right',
  'animate-bounce-in-up',
  'animate-bounce-out',
  'animate-bounce-out-down',
  'animate-bounce-out-left',
  'animate-bounce-out-right',
  'animate-bounce-out-up',
  'animate-bounceIn',
  'animate-bounceInDown',
  'animate-bounceInLeft',
  'animate-bounceInRight',
  'animate-bounceInUp',
  'animate-bounceOut',
  'animate-bounceOutDown',
  'animate-bounceOutLeft',
  'animate-bounceOutRight',
  'animate-bounceOutUp',
  'animate-fade-in',
  'animate-fade-in-bottom-left',
  'animate-fade-in-bottom-right',
  'animate-fade-in-down',
  'animate-fade-in-down-big',
  'animate-fade-in-left',
  'animate-fade-in-left-big',
  'animate-fade-in-right',
  'animate-fade-in-right-big',
  'animate-fade-in-top-left',
  'animate-fade-in-top-right',
  'animate-fade-in-up',
  'animate-fade-in-up-big',
  'animate-fade-out',
  'animate-fade-out-bottom-left',
  'animate-fade-out-bottom-right',
  'animate-fade-out-down',
  'animate-fade-out-down-big',
  'animate-fade-out-left',
  'animate-fade-out-left-big',
  'animate-fade-out-right',
  'animate-fade-out-right-big',
  'animate-fade-out-top-left',
  'animate-fade-out-top-right',
  'animate-fade-out-up',
  'animate-fade-out-up-big',
  'animate-fadeIn',
  'animate-fadeInBottomLeft',
  'animate-fadeInBottomRight',
  'animate-fadeInDown',
  'animate-fadeInDownBig',
  'animate-fadeInLeft',
  'animate-fadeInLeftBig',
  'animate-fadeInRight',
  'animate-fadeInRightBig',
  'animate-fadeInTopLeft',
  'animate-fadeInTopRight',
  'animate-fadeInUp',
  'animate-fadeInUpBig',
  'animate-fadeOut',
  'animate-fadeOutBottomLeft',
  'animate-fadeOutBottomRight',
  'animate-fadeOutDown',
  'animate-fadeOutDownBig',
  'animate-fadeOutLeft',
  'animate-fadeOutLeftBig',
  'animate-fadeOutRight',
  'animate-fadeOutRightBig',
  'animate-fadeOutTopLeft',
  'animate-fadeOutTopRight',
  'animate-fadeOutUp',
  'animate-fadeOutUpBig',
  'animate-flash',
  'animate-flip',
  'animate-flip-in-x',
  'animate-flip-in-y',
  'animate-flip-out-x',
  'animate-flip-out-y',
  'animate-flipInX',
  'animate-flipInY',
  'animate-flipOutX',
  'animate-flipOutY',
  'animate-foolishIn',
  'animate-foolishOut',
  'animate-head-shake',
  'animate-headShake',
  'animate-heart-beat',
  'animate-heartBeat',
  'animate-hinge',
  'animate-holeOut',
  'animate-jack-in-the-box',
  'animate-jackInTheBox',
  'animate-jello',
  'animate-light-speed-in-left',
  'animate-light-speed-in-right',
  'animate-light-speed-out-left',
  'animate-light-speed-out-right',
  'animate-lightSpeedInLeft',
  'animate-lightSpeedInRight',
  'animate-lightSpeedOutLeft',
  'animate-lightSpeedOutRight',
  'animate-magic',
  'animate-openDownLeft',
  'animate-openDownLeftOut',
  'animate-openDownLeftReturn',
  'animate-openDownRight',
  'animate-openDownRightOut',
  'animate-openDownRightReturn',
  'animate-openUpLeft',
  'animate-openUpLeftOut',
  'animate-openUpLeftReturn',
  'animate-openUpRight',
  'animate-openUpRightOut',
  'animate-openUpRightReturn',
  'animate-perspectiveDown',
  'animate-perspectiveDownReturn',
  'animate-perspectiveLeft',
  'animate-perspectiveLeftReturn',
  'animate-perspectiveRight',
  'animate-perspectiveRightReturn',
  'animate-perspectiveUp',
  'animate-perspectiveUpReturn',
  'animate-ping',
  'animate-puffIn',
  'animate-puffOut',
  'animate-pulse',
  'animate-pulse-alt',
  'animate-roll-in',
  'animate-roll-out',
  'animate-rollIn',
  'animate-rollOut',
  'animate-rotate-in',
  'animate-rotate-in-down-left',
  'animate-rotate-in-down-right',
  'animate-rotate-in-up-left',
  'animate-rotate-in-up-right',
  'animate-rotate-out',
  'animate-rotate-out-down-left',
  'animate-rotate-out-down-right',
  'animate-rotate-out-up-left',
  'animate-rotate-out-up-right',
  'animate-rotateDown',
  'animate-rotateIn',
  'animate-rotateInDownLeft',
  'animate-rotateInDownRight',
  'animate-rotateInUpLeft',
  'animate-rotateInUpRight',
  'animate-rotateLeft',
  'animate-rotateOut',
  'animate-rotateOutDownLeft',
  'animate-rotateOutDownRight',
  'animate-rotateOutUpLeft',
  'animate-rotateOutUpRight',
  'animate-rotateRight',
  'animate-rotateUp',
  'animate-rubber-band',
  'animate-rubberBand',
  'animate-shake',
  'animate-shake-x',
  'animate-shake-y',
  'animate-shakeX',
  'animate-shakeY',
  'animate-slide-in-down',
  'animate-slide-in-left',
  'animate-slide-in-right',
  'animate-slide-in-up',
  'animate-slide-out-down',
  'animate-slide-out-left',
  'animate-slide-out-right',
  'animate-slide-out-up',
  'animate-slideDown',
  'animate-slideDownReturn',
  'animate-slideInDown',
  'animate-slideInLeft',
  'animate-slideInRight',
  'animate-slideInUp',
  'animate-slideLeft',
  'animate-slideLeftReturn',
  'animate-slideOutDown',
  'animate-slideOutLeft',
  'animate-slideOutRight',
  'animate-slideOutUp',
  'animate-slideRight',
  'animate-slideRightReturn',
  'animate-slideUp',
  'animate-slideUpReturn',
  'animate-spaceInDown',
  'animate-spaceInLeft',
  'animate-spaceInRight',
  'animate-spaceInUp',
  'animate-spaceOutDown',
  'animate-spaceOutLeft',
  'animate-spaceOutRight',
  'animate-spaceOutUp',
  'animate-spin',
  'animate-swap',
  'animate-swashIn',
  'animate-swashOut',
  'animate-swing',
  'animate-tada',
  'animate-tinDownIn',
  'animate-tinDownOut',
  'animate-tinLeftIn',
  'animate-tinLeftOut',
  'animate-tinRightIn',
  'animate-tinRightOut',
  'animate-tinUpIn',
  'animate-tinUpOut',
  'animate-twisterInDown',
  'animate-twisterInUp',
  'animate-vanishIn',
  'animate-vanishOut',
  'animate-wobble',
  'animate-zoom-in',
  'animate-zoom-in-down',
  'animate-zoom-in-left',
  'animate-zoom-in-right',
  'animate-zoom-in-up',
  'animate-zoom-out',
  'animate-zoom-out-down',
  'animate-zoom-out-left',
  'animate-zoom-out-right',
  'animate-zoom-out-up',
  'animate-zoomIn',
  'animate-zoomInDown',
  'animate-zoomInLeft',
  'animate-zoomInRight',
  'animate-zoomInUp',
  'animate-zoomOut',
  'animate-zoomOutDown',
  'animate-zoomOutLeft',
  'animate-zoomOutRight',
  'animate-zoomOutUp',
];

const isAnimating = ref(false);
const animationName = ref();

async function setAnimated(value: string = animationName.value) {
  if (isAnimating.value) {
    animationName.value = undefined;
    isAnimating.value = false;

    await nextTick();
  }

  animationName.value = value;
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

    <div
      class="size-25 flex animate-count-2 items-center self-center justify-center justify-self-center rounded bg-sky text-center font-bold"
      :class="[
        {
          [animationName]: isAnimating,
        },
      ]"
      @animationend="setAnimatedStop"
    >
      Animated
    </div>

    <div class="overflow-auto p-9">
      <div class="flex flex-col gap-2">
        <button
          v-for="item in classLists"
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
