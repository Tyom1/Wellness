<template>
  <div class="calendar">
    <ul class="calendar__list">
      <li v-for="(month, index) in months" :key="index" class="calendar__item">
        {{ month }}
        <TransitionGroup name="mark" tag="span">
          <div
            v-for="currentMonth in getPlans(month)"
            :key="currentMonth._id"
            class="calendar__mark"
            :class="{
              'calendar__mark--green': currentMonth.status === 'completed',
              'calendar__mark--blue': currentMonth.status === 'booked',
              'calendar__mark--lightBlue': currentMonth.status === 'book Now'
            }"
          />
        </TransitionGroup>
      </li>
    </ul>
  </div>
</template>
<script src="./_calendarMonths.js" lang="js"></script>
<style src="./_calendarMonths.scss" lang="scss"></style>
