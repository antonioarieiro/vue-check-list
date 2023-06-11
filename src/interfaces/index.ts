interface tasks {
    title: string
    description: string
}

export interface CheckListStoreState {
  selectedOption: string;
  tasks: Array<tasks>;
}
