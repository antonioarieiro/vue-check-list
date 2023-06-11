<script lang="ts">
import { defineComponent } from 'vue';

import { checkListStore } from '../../store/store';

export default defineComponent({
    

  methods: {
    changeTabSelected(option: string) {
      const checkListState = checkListStore();
      checkListState.setSelectedTab(option);
    },
  },
});
</script>

<template>
  <header class="bg-gray-800 py-4 px-8 flex items-center">
    <h1 class="text-2xl font-bold text-white">Todo</h1>
    <nav class="space-x-4">
      <button
        class="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 ml-4"
        @click="changeTabSelected('create')"
      >
        Criar Tarefa
      </button>
      <button
        class="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        @click="changeTabSelected('concluidas')"
      >
        Tarefas Concluídas
      </button>
      <button
        class="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        @click="changeTabSelected('a-concluir')"
      >
        Tarefas a Concluir
      </button>
    </nav>
  </header>
</template>

<style scoped>

</style>
