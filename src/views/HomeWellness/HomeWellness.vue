<template>
  <div class="home">
    <HeaderWellness />
    <div class="home__container">
      <ContainerHead @showHide="toggleHide" />
      <Transition name="hideWrapper">
        <div class="home__wrapper" v-if="!hideWrapper">
          <CircleChart />
          <div class="home__wrapperTable">
            <CalendarMonths />
            <DataTable />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script lang="js" src="./_homeWellness.js"></script>
<style lang="scss" src="./_homeWellness.scss"></style>
