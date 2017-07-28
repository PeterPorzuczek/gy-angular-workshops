export interface Note {
    title: string;
    content: string;
    createdOn: Date;
    dueDate: Date;
    dueDateFormatted: string;
    priority: NotePriority;
}

const NotePriority = {
  Do: 'Do',
  Decide: 'Decide',
  Delegate: 'Delegate',
  Delete: 'Delete'
}
type NotePriority = (typeof NotePriority)[keyof typeof NotePriority];
export { NotePriority };