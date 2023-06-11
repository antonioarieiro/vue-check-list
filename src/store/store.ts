import { defineStore } from "pinia";
import { CheckListStoreState, Task } from "../interfaces/index";

export const checkListStore = defineStore("checkListStore", {
  state: (): CheckListStoreState => ({
    selectedOption: "",
    id: 0,
    tasks: [],
    currentSelectedOption: null,
  }),
  getters: {
    // Add your store getters here
  },
  actions: {
    setSelectedTab(this: CheckListStoreState, option: string) {
      this.selectedOption = option;
    },

    addNewTask(this: CheckListStoreState, title: string, description: string) {
      const existingTask = this.tasks.find((task) => task.title === title);
      if (existingTask) {
        return "error";
      }
      this.id += 1;
      this.tasks.push({ title, description, status: "Pendente", id: this.id });
      return "Nova tarefa criado com sucesso";
    },

    updateTaskState(task: Task, action: number) {
      if (action === 1) {
        this.tasks.map((value) => {
          if (value === task) {
            task.status = "Concluido";
            return;
          }
        });
      }

      if (action === 2) {
        this.setSelectedTab("edit");
        this.currentSelectedOption = task;
      }
    },
    editTask(task: Task) {
      let status = "";
      if (task) {
        this.tasks.map((value) => {
          if (value.id === task.id) {
            value.title = task.title;
            value.description = task.description;
            value.status === task.status;
          }
        });
      }
      return status;
    },
  },
});
