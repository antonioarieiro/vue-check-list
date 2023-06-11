<script lang="ts">
import { defineComponent } from 'vue';
import { checkListStore } from '../../store/store';

export default defineComponent({
  data() {
    return {
      title: '',
      description: '',
      error: '',
    };
  },
  methods: {
    saveTask() {
      const store = checkListStore();
      const result = store.addNewTask(this.title, this.description);
      if (typeof result === 'string') {
        // Trate o resultado da função addNewTask de acordo com a sua necessidade
        console.log(result);
        if(result === 'error') {
            this.error = 'Já existe uma tarefa com esse titulo'
            return ;
        }else {
            this.error = ''
            this.$emit('save'); // Emitir o evento 'save'
        }
      }
    },
  },
});
</script>



<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-6 min-w-[800px]">
      <div>
        <h2 class="mb-4">Adicionar Tarefa:</h2>
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Título:</label>
          <input id="title" type="text" class="border rounded w-full py-2 px-3" v-model="title" />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700">Descrição:</label>
          <textarea id="description" class="border rounded w-full py-2 px-3" v-model="description"></textarea>
        </div>
        {{ error }}
        <div class="flex justify-end">
          <button type="button" class="mr-2 px-4 py-2 border rounded text-gray-600" @click="$emit('cancel')">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded"  @click="saveTask()">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>
