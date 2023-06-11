<script setup lang="ts">
import { computed } from 'vue';
import { checkListStore } from '../../store/store';

const store = checkListStore();
const tasks = computed(() => {
  if (store.selectedOption === 'concluido') {
    return store.tasks.filter(task => task.status === 'Concluido');
  } else {
    return store.tasks;
  }
});
</script>

<template>
  <div class="flex flex-col ml-10 mt-10" v-if="tasks && tasks.length > 0">
    <h2 class="text-xl font-bold mb-4">Lista de Tarefas:</h2>
    <ul class="  mr-10 rounded-sm flex justify-between flex-col gap-10" >
      <div class="flex justify-between w-full border p-2" v-for="task in tasks" :key="task.title">
        <li  class="mb-2 flex flex-col justify-between">
        <h3 class="text-sm truncate">Tarefa: <b>{{ task.title }}</b></h3>
        <p class="text-sm truncate">Resumo: {{ task.description }}</p>
        <p class="text-sm truncate" :class="{ 'text-green-500 font-bold': task.status === 'Concluido' }">Status: {{ task.status }}</p>

      </li>
      <div class="flex flex-col">
        <button  :class="{ 'bg-gray-300 text-gray-100 pointer-events-none': task.status === 'Concluido' }" class="border p-2 font-bold hover:bg-blue-300" @click="store.updateTaskState(task, 1)">
        Concluir
      </button>
      <button class="border p-2 font-bold mt-2 hover:bg-red-300" @click="store.updateTaskState(task, 2)">
        Editar
      </button>
      </div>
      </div>
    </ul>
  </div>
   <div class="flex flex-col ml-10 mt-10" v-else-if="tasks && !tasks.length">
    <h2 class="text-xl font-bold mb-4">Sem Tarefas para listagem no momento</h2>
   
  </div>
</template>

