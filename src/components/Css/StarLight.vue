<template>
  <!-- 原文链接：https://code.juejin.cn/pen/7152793099083710496 -->
  <div class="item-box" style="padding: 120px">
    <div class="loader">
      <span v-for="i in 10" :style="`--i: ${i};`"></span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$color-primary: #00efff;
.loader {
  position: relative;
  width: 300px;
  height: 300px;
  &:hover {
    span {
      &:before {
        box-shadow: 0 0 20px $color-primary,
                  -200px -200px 0 $color-primary,
                  -200px -200px 20px $color-primary,
                  200px 200px 0 $color-primary,
                  200px 200px 20px $color-primary,
                  200px -200px 0 $color-primary,
                  200px -200px 20px $color-primary,
                  -200px 200px 0 $color-primary,
                  -200px 200px 20px $color-primary;
        transform-origin: 200px;
      }
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(36deg * var(--i)));
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: transparent;
      border: 4px solid $color-primary;
      box-sizing: border-box;
      box-shadow: 0 0 20px $color-primary,
                  -30px -30px 0 $color-primary,
                  -30px -30px 20px $color-primary,
                  30px 30px 0 $color-primary,
                  30px 30px 20px $color-primary,
                  30px -30px 0 $color-primary,
                  30px -30px 20px $color-primary,
                  -30px 30px 0 $color-primary,
                  -30px 30px 20px $color-primary;
      animation: animate 5s linear infinite;
      animation-delay: calc(-0.25s * var(--i));
      transform-origin: 20px;
    }
  }
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0eeg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>