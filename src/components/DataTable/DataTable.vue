<template>
  <div class="dataTable">
    <TransitionGroup name="list" tag="div">
      <div v-for="plan in plans" :key="plan._id" class="dataTable__item">
        <p class="dataTable__itemTitle">
          {{ plan.title }}
        </p>
        <div class="dataTable__status">
          <p
            class="dataTable__statusText"
            :class="{
              'dataTable__statusText--green': plan.status === 'completed',
              'dataTable__statusText--blue': plan.status === 'booked',
              'dataTable__statusText--lightBlue': plan.status === 'book Now'
            }"
          >
            {{ plan.status }}
          </p>
          <div class="dataTable__edit">
            <button class="dataTable__editBtn" @click="openTools(plan._id)" />
            <Transition name="menu">
              <div v-if="plan._id == activeBtnId" class="dataTable__menu">
                <button
                  class="dataTable__menuBtn"
                  @click="deletePlan(plan._id)"
                >
                  Delete
                </button>
                <button
                  class="dataTable__menuBtn dataTable__menuBtn--rename"
                  @click="editRename(plan._id, plan.title)"
                >
                  Rename
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal" class="modal" @click.self="showModal = false">
        <div class="modal__container">
          <input
            type="text"
            v-model="nameValue"
            class="modal__name"
            name="text"
          />
          <button class="modal__btn" @click="saveName()">Save</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script src="./_dataTable.js" lang="js"></script>
<style src="./_dataTable.scss" lang="scss"></style>
