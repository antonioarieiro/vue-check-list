<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { checkListStore } from './store/store';
import Header from './components/header/index.vue';
import AddTask from './components/modalTask/index.vue';
import ListTasks from './components/list/index.vue';
import AlertStatus from './components/alertStatus/index.vue';

const store = checkListStore();
const selectedOption = ref(store.selectedOption);
const currentSelectedOption = ref(store.currentSelectedOption);
const showSuccessMessage = ref(false);

watchEffect(() => {
  selectedOption.value = store.selectedOption;
  currentSelectedOption.value = store.currentSelectedOption;
});

function handleSave() {
  showSuccessMessage.value = true;
  store.setSelectedTab('');
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);
}
</script>

<template>
  <div>
    <Header></Header>
    <AddTask
      :selectedOption="selectedOption"
      :currentSelectedOption="currentSelectedOption"
      v-if="selectedOption === 'create' || selectedOption === 'edit'"
      @cancel="store.setSelectedTab('')"
      @save="handleSave"
    />
    <AlertStatus v-if="showSuccessMessage" />
    <ListTasks :selectedOption="selectedOption" />
  </div>
</template>
