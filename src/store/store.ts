import { defineStore } from "pinia";

interface CheckListStoreState {
  selectedOption: string;
}

export const checkListStore = defineStore("checkListStore", {
  state: (): CheckListStoreState => ({
    selectedOption: "",
  }),
  getters: {
    // Add your store getters here
  },
  actions: {
    setSelectedTab(this: CheckListStoreState, option: string) {
      this.selectedOption = option;
      console.log(this.selectedOption);
    },
  },
});
