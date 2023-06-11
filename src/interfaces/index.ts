interface tasks {
    title: string
    description: string
    status: string
}

export interface CheckListStoreState {
  selectedOption: string;
  tasks: Array<tasks>;
}
