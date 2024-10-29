<template>
  <FluidContainer
    v-slot="{ elValue }"
    style-property="width"
    content-class="fluid-w-100-200 fluid-h-100-200"
  >
    <div class="flex h-full items-center justify-center">
      {{ elValue }}
    </div>
  </FluidContainer>
</template>
