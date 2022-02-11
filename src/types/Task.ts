export interface Tasks {
  waitings: Task[];
  workings: Task[];
  completes: Task[];
}

export interface Task {
  title: string;
}
