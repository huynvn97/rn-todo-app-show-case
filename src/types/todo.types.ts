export type Todo = {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  status: TodoStatus;
  priority: TodoPriority;
};

export enum TodoStatus {
  CREATED = 'CREATED',
  COMPLETED = 'COMPLETED',
}

export enum TodoPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export type SortPriority = 'increasing' | 'decreasing' | 'default';
