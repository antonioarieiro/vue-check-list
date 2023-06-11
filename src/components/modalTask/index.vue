<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { checkListStore } from '../../store/store';
import { Task } from '../../interfaces';

export default defineComponent({
   props: {
    selectedOption: {
      type: String as PropType<'create' | 'edit'>,
      required: true,
    },
    currentSelectedOption: {
      type: Object as PropType< Task | null>,
      required: false
    }
  },
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
        if(result === 'error') {
            this.error = 'Já existe uma tarefa com esse titulo'
            return ;
        }else {
            this.error = ''
            this.$emit('save'); // Emitir o evento 'save'
        }
      }
    },

     editTask() {
      const store = checkListStore();
       if (this.currentSelectedOption) {
   const result = store.editTask(this.currentSelectedOption);
       if (typeof result === 'string') {
        // Trate o resultado da função addNewTask de acordo com a sua necessidade
        if(result === 'error') {
            this.error = 'Já existe uma tarefa com esse titulo'
            return ;
        }else {
            this.error = ''
            this.$emit('save'); // Emitir o evento 'save'
        }
      }
       }
   
    },
  },
});
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-6 min-w-[800px]" v-if="!currentSelectedOption && selectedOption === 'create'">
      <div>
       <h2 class="mb-4" v-if="selectedOption === 'create'">Adicionar Tarefa:</h2>
       
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Título:</label>
          <input id="title" type="text" class="border rounded w-full py-2 px-3" v-model="title" />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700">Descrição:</label>
          <textarea id="description" class="border rounded w-full py-2 px-3" v-model="description"></textarea>
        </div>
        <p class="font-bold text-lg text-red-600 text-center">
          {{ error }}
      </p>
        <div class="flex justify-end">
          <button type="button" class="mr-2 px-4 py-2 border rounded text-gray-600" @click="$emit('cancel')">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded"  @click="saveTask()">Salvar</button>
        </div>
      </div>
    </div>

     <div class="bg-white rounded-lg p-6 min-w-[800px]" v-if="currentSelectedOption && selectedOption === 'edit'">
      <div>
        <h2 class="mb-4" v-if="selectedOption === 'edit' && currentSelectedOption">Editar Tarefa: <b>{{ currentSelectedOption.title }}</b></h2>
        <div class="mb-4">
          <label for="title" class="block text-gray-700">Título:</label>
          <input id="title" type="text" class="border rounded w-full py-2 px-3" v-model="currentSelectedOption.title" />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700">Descrição:</label>
          <textarea id="description" class="border rounded w-full py-2 px-3" v-model="currentSelectedOption.description"></textarea>
        </div>
         <div class="mb-4">
          <label for="description" class="block text-gray-700">Status:</label>
         <select id="status" class="border p-2" v-model="currentSelectedOption.status">
            <option value="Planejamento">Planejamento</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluido">Concluído</option>
          </select>
        </div>
      <p class="font-bold text-lg text-red-600 text-center">
          {{ error }}
      </p>
        <div class="flex justify-end">
          <button type="button" class="mr-2 px-4 py-2 border rounded text-gray-600" @click="$emit('cancel')">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded"  @click="editTask()">Salvar Edição</button>
        </div>
      </div>
    </div>
  </div>
</template>
