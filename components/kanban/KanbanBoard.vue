<template>
    <div class="flex flex-row space-x-4 overflow-x-auto">
      <KanbanColumn title="Issues" :items="issues" />
      <KanbanColumn title="Todo" :items="todo" />
      <KanbanColumn title="In-progress" :items="inProgress" />
      <KanbanColumn title="Done" :items="done" />
      <KanbanColumn title="Backlog" :items="backlog" />
      <KanbanColumn title="Cancelled" :items="cancelled" />
    </div>
  </template>
  
  <script setup>
  import KanbanColumn from './KanbanColumn.vue';
  const issues = [
  {
    id: 1,
    title: 'Issue 1',
    description: 'Description for Issue 1',
    priority: 'High',
    postedBy: 'User A',
    createdDate: '2023-01-15',
    dueDate: '2023-02-28',
    assignedTo: 'User X',
    tags: ['Bug', 'Critical'],
    status: 'Issue',
  },
  {
    id: 11,
    title: 'Issue 2',
    description: 'Description for Issue 2',
    priority: 'Medium',
    postedBy: 'User AB',
    createdDate: '2023-01-15',
    dueDate: '2023-02-28',
    assignedTo: 'User X',
    tags: ['Bug', 'Critical'],
    status: 'Issue',
  },
];

const todo = [
  {
    id: 4,
    title: 'Task 1',
    description: 'Description for Task 1',
    priority: 'High',
    postedBy: 'User D',
    createdDate: '2023-03-10',
    dueDate: '2023-03-25',
    assignedTo: 'User E',
    tags: ['Feature', 'Urgent'],
    status: 'Todo',
  },
];

const inProgress = [
  {
    id: 6,
    title: 'Task 3',
    description: 'Description for Task 3',
    priority: 'Low',
    postedBy: 'User F',
    createdDate: '2023-04-05',
    dueDate: '2023-04-20',
    assignedTo: 'User G',
    tags: ['Task', 'In Progress'],
    status: 'In-progress',
  },
];

const done = [
  {
    id: 7,
    title: 'Task 1',
    description: 'Description for Completed Task 1',
    priority: 'High',
    postedBy: 'User G',
    createdDate: '2023-02-20',
    dueDate: '2023-03-05',
    assignedTo: 'User H',
    tags: ['Completed', 'Feature'],
    status: 'Done',
  },
];

const backlog = [
  {
    id: 8,
    title: 'Item 1',
    description: 'Description for Backlog Item 1',
    priority: 'Medium',
    postedBy: 'User H',
    createdDate: '2023-05-01',
    dueDate: '2023-06-15',
    assignedTo: 'Unassigned',
    tags: ['Backlog', 'Enhancement'],
    status: 'Backlog',
  },
];

const cancelled = [
  {
    id: 9,
    title: 'Item 1',
    description: 'Description for Cancelled Item 1',
    priority: 'Low',
    postedBy: 'User I',
    createdDate: '2023-03-15',
    dueDate: null,
    assignedTo: 'User J',
    tags: ['Cancelled'],
    status: 'Cancelled',
  }
];

  </script>
  