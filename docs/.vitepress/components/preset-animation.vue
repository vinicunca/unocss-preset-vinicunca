<script lang="ts" setup>
import { CheckboxIndicator, CheckboxRoot, RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'radix-vue';
import { codeToHtml } from 'shiki';
import { computed, nextTick, onMounted, ref, watch } from 'vue';

import { animationNames } from '../unocss-preset/animate';

const timeUnitOptions = [
  { label: 'Second', value: 's' },
  { label: 'Millisecond', value: 'ms' },
];

const animationName = ref('');
const isAnimating = ref(false);
const repeat = ref(1);
const repeatInfinite = ref(false);
const duration = ref(1);
const durationUnit = ref(timeUnitOptions[0].value);

async function setAnimated(value: string = animationName.value) {
  if (isAnimating.value) {
    animationName.value = '';
    isAnimating.value = false;

    await nextTick();
  }

  animationName.value = value;
  isAnimating.value = true;
}

function setAnimatedStop() {
  isAnimating.value = false;
}

const headerClasses = 'px-3 h-8 flex items-center border-b border-$vp-c-border';

watch(
  [repeat, repeatInfinite, duration, durationUnit],
  () => {
    setAnimated();
  },
);

const codeStr = computed(() => {
  const animateStr = [animationName.value];

  if (repeatInfinite.value) {
    animateStr.push('animate-count-infinite');
  } else if (repeat.value && repeat.value !== 1) {
    animateStr.push(`animated-count-${repeat.value}`);
  }

  if (duration.value && duration.value !== 0 && duration.value !== 1) {
    animateStr.push(`animate-duration-${duration.value}${durationUnit.value}`);
  }

  return `<div class="${animateStr.join(' ')}" />`;
});

onMounted(() => {
  setAnimated(animationNames[0]);
});

watch(
  codeStr,
  () => {
    renderCodeStr();
  },
);

const renderedCode = ref('');

async function renderCodeStr() {
  const html = await codeToHtml(codeStr.value, {
    lang: 'html',
    theme: 'one-dark-pro',
  });

  renderedCode.value = html;
}

const styleAnimation = computed(() => {
  if (isAnimating.value) {
    return {
      animationDuration: `${duration.value}${durationUnit.value}`,
      animationIterationCount: repeatInfinite.value ? 'infinite' : repeat.value,
    };
  }

  return {};
});
</script>

<template>
  <div class="overflow-hidden grid grid-cols-2 lg:flex border border-$vp-c-border rounded">
    <iframe
      src="https://unocss.dev/play/?html=DwEwlgbgBAxgNgQwM5ILwCIAWBaJMBOApoQHZQDm%2BYIUADojIdmAC6EC2S2jJb%2B6APgBQUKKEixEKDAhJh2CNszJI41JmBLYW2AGYBXOHCi6EIDVoAMUWfMVMQ%2B-IrAB7LQEZL3m3IVLzRABPbABWHzYADx0ADki4QRFRKAAZV1cAaxsWKHZCJOAAenAIYSKS4SA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUlCRYiOaOa5QAQ17S4GrTv2GIxugFoRCr4O9iBOwNJmSEgYAB6W8JhYDlwANgnYeITEZAAUyMLyjHQAXHAA2lQFtsoQOQCUslUKTCFh0nmawCkpALIQmKV6HBAwABZ6rg1UALrqdUhAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA"
      frameborder="0"
    />
    <div class="col-span-2 md:col-span-1 lg:flex-1 flex flex-col">
      <div
        :class="headerClasses"
        class="justify-between"
      >
        <button
          class="bg-$vp-c-brand-1 px-6px h-22px rounded inline-flex items-center"
          @click="isAnimating ? setAnimatedStop() : setAnimated()"
        >
          <i
            class="text-14px"
            :class="[
              isAnimating
                ? 'i-material-symbols:stop'
                : 'i-material-symbols:play-arrow',
            ]"
          />
        </button>
      </div>

      <div class="flex-1 py-8 md:py-36 flex items-center justify-center">
        <div
          class="flex items-center size-100px bg-#FC2983 justify-center rounded-2 animated-box"
          :class="{
            // [animationName]: isAnimating,
            'animate-in fade-in-50 zoom-in-80 slide-in-from-top-50': isAnimating,
          }"
          :style="styleAnimation"
          @animationend="setAnimatedStop"
        >
          <i class="i-ion:rocket color-white" />
        </div>
      </div>

      <div class="language-html m-0! rounded-none!">
        <div v-html="renderedCode" />
      </div>
    </div>

    <div class="col-span-2 md:(col-span-1 border-t-0) border-t border-$vp-c-border grid grid-cols-2">
      <div class="flex flex-col md:border-l border-$vp-c-border">
        <div
          :class="headerClasses"
          class="justify-center font-bold"
        >
          Animation
        </div>

        <div class="relative flex-1">
          <div class="absolute inset-0 overflow-auto">
            <button
              v-for="animName in animationNames"
              :key="animName"
              class="text-13px color-$vp-c-text-1 inline-flex items-center justify-center w-full h-34px px-4 transition-colors-280 hover:bg-white/12"
              :class="{
                'active-button': animName === animationName,
              }"
              @click="setAnimated(animName)"
            >
              {{ animName.replace('animate-', '') }}
            </button>
          </div>
        </div>
      </div>

      <div class="border-l border-$vp-c-border flex flex-col">
        <div
          :class="headerClasses"
          class="justify-center font-bold"
        >
          Options
        </div>

        <div class="p-4 flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <CoreInputNumber
              v-model="repeat"
              label="Iteration count"
              :disabled="repeatInfinite"
            />

            <label class="flex gap-4 items-center">
              <CheckboxRoot
                v-model:checked="repeatInfinite"
                class="flex size-25px appearance-none items-center justify-center rounded border border-solid border-base"
              >
                <CheckboxIndicator
                  class="size-full rounded flex items-center justify-center"
                >
                  <i
                    class="i-radix-icons:check size-6"
                  />
                </CheckboxIndicator>
              </CheckboxRoot>

              <span class="select-none">
                Infinite
              </span>
            </label>
          </div>

          <div class="flex flex-col gap-2">
            <CoreInputNumber
              v-model="duration"
              label="Speed"
            />

            <RadioGroupRoot
              v-model="durationUnit"
              class="flex flex-col gap-2.5"
            >
              <div
                v-for="unit in timeUnitOptions"
                :key="unit.value"
                class="flex items-center"
              >
                <RadioGroupItem
                  :id="unit.value"
                  class="border border-solid border-base size-[25px] rounded-full cursor-default"
                  :value="unit.value"
                >
                  <RadioGroupIndicator
                    class="flex items-center justify-center size-full relative after:content-[''] after:block after:size-[11px] after:rounded-[50%] after:bg-$vp-c-brand-1"
                  />
                </RadioGroupItem>

                <label
                  class="text-white text-[15px] leading-none pl-[15px]"
                  :for="unit.value"
                >
                  {{ unit.label }}
                </label>
              </div>
            </RadioGroupRoot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.animated-box {
  box-shadow: 0 0 20px -6px #fc297f;
}

.active-button {
  background-color: rgba(68, 189, 135, 0.50);
}
</style>
