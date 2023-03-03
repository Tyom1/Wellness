<template>
  <div class="containerHead">
    <p class="containerHead__info">
      Your Progress
      <span class="containerHead__info containerHead__info--steps" v-if="getSteps !== 0">{{ getSteps }} steps to complete</span>
    </p>
    <button class="containerHead__hideBtn" @click="hideShow">hide</button>
  </div>
</template>
<script lang="js" src="./_containerHead.js"></script>
<style lang="scss" src="./_containerHead.scss"></style>
