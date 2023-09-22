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
  },
  {
    id: 2,
    title: 'Issue 2',
    description: 'Description for Issue 2',
    priority: 'Medium',
    postedBy: 'User B',
  },
  {
    id: 3,
    title: 'Issue 3',
    description: 'Description for Issue 3',
    priority: 'Low',
    postedBy: 'User C',
  },
];

const todo = [
  {
    id: 4,
    title: 'Task 1',
    description: 'Description for Task 1',
    priority: 'High',
    postedBy: 'User D',
  },
  {
    id: 5,
    title: 'Task 2',
    description: 'Description for Task 2',
    priority: 'Medium',
    postedBy: 'User E',
  },
];

const inProgress = [
  {
    id: 6,
    title: 'Task 3',
    description: 'Description for Task 3',
    priority: 'Low',
    postedBy: 'User F',
  },
];

const done = [
  {
    id: 7,
    title: 'Completed Task 1',
    description: 'Description for Completed Task 1',
    priority: 'High',
    postedBy: 'User G',
  },
];

const backlog = [
  {
    id: 8,
    title: 'Backlog Item 1',
    description: 'Description for Backlog Item 1',
    priority: 'Medium',
    postedBy: 'User H',
  },
];

const cancelled = [
  {
    id: 9,
    title: 'Cancelled Item 1',
    description: 'Description for Cancelled Item 1',
    priority: 'Low',
    postedBy: 'User I',
  },
];

  </script>
  