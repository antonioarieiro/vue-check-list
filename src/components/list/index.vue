<script setup lang="ts">
import { computed } from 'vue';
import { checkListStore } from '../../store/store';

const store = checkListStore();
const tasks = computed(() => store.tasks);
</script>

<template>
  <div class="flex flex-col ml-10 mt-10" v-if="tasks && tasks.length > 0">
    <h2 class="text-xl font-bold mb-4">Lista de Tarefas:</h2>
    <ul class="border p-4 mr-10 rounded-sm flex justify-between" >
      <li v-for="task in tasks" :key="task.title" class="mb-2 flex flex-col justify-between">
        <h3 class="text-sm truncate">Tarefa: <b>{{ task.title }}</b></h3>
        <p class="text-sm truncate">Resumo: {{ task.description }}</p>
         <p class="text-sm truncate">Status: {{ task.status }}</p>
      </li>
      <div class="flex flex-col">
        <button class="border p-2 font-bold hover:bg-blue-300">
        Concluir
      </button>
      <button class="border p-2 font-bold mt-2 hover:bg-red-300">
        Editar
      </button>
      </div>
    </ul>
  </div>
   <div class="flex flex-col ml-10 mt-10" v-else-if="tasks && !tasks.length">
    <h2 class="text-xl font-bold mb-4">Sem Tarefas para listagem no momento</h2>
   
  </div>
</template>

