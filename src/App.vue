<script setup lang="ts">
import { ref, watch } from 'vue';
import { checkListStore } from './store/store';
import Header from './components/header/index.vue';

const store = checkListStore();
const selectedOption = ref(store.selectedOption);

// Assista a alterações em store.selectedOption
watch(() => store.selectedOption, (newValue) => {
  selectedOption.value = newValue;
});

</script>

<template>
  <div>
    <Header></Header>
    <p>{{ selectedOption }}</p>
  </div>
</template>

<style scoped>
</style>
