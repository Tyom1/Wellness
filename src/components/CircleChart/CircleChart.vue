<template>
  <div class="circle">
    <canvas ref="circleCanvas" height="0" />
    <Doughnut :options="circleOptions" :data="circleData" :plugins="plugins" />
    <p class="circle__text">Completed appointments</p>
  </div>
</template>

<script lang="js" src="./_circleChart.js"></script>
<style lang="scss">
.circle {
  width: 100%;
  max-width: 300px;

  &__text {
    margin: 15px auto;
    width: 100%;
    max-width: 130px;
    text-align: center;
  }
}
</style>
