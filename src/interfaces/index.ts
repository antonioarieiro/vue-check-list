export interface Task {
    title: string
    description: string
    status: string
    id: number
}

export interface CheckListStoreState {
  selectedOption: string;
  id: number
  tasks: Array<Task>;
  currentSelectedOption: Task | null
}
