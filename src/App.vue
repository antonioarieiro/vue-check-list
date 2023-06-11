<script setup lang="ts">
import { ref, watch } from 'vue';
import { checkListStore } from './store/store';
import Header from './components/header/index.vue';
import AddTask from './components/addTask/index.vue';
import ListTasks from './components/list/index.vue';
const store = checkListStore();
const selectedOption = ref(store.selectedOption);
const showSuccessMessage = ref(false);

watch(() => store.selectedOption, (newValue) => {
  selectedOption.value = newValue;
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
    <AddTask v-if="selectedOption === 'criar'" @cancel="store.setSelectedTab('')"  @save="handleSave"/>
    <div class="mt-4 flex w-full items-end justify-end absolute">
      <p v-if="showSuccessMessage" class="text-green-500 font-bold text-end border rounded-lg p-4 mr-10">Tarefa salva com sucesso!</p>
    </div>
    <ListTasks />
  </div>
</template>
