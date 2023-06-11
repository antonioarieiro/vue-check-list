import { defineStore } from "pinia";
import { CheckListStoreState } from "../interfaces/index";


export const checkListStore = defineStore("checkListStore", {
  state: (): CheckListStoreState => ({
    selectedOption: "",
    tasks:[]
  }),
  getters: {
    // Add your store getters here
  },
  actions: {
    setSelectedTab(this: CheckListStoreState, option: string) {
      this.selectedOption = option;
      console.log(this.selectedOption);
    },

    addNewTask(this:CheckListStoreState, title:string, description:string) {
     const existingTask = this.tasks.find((task) => task.title === title);

     if (existingTask) {
       return "error";
     }

  
     this.tasks.push({ title, description });

     return "Nova tarefa criado com sucesso";
    }
  },
});
