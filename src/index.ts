import { TodoList } from "./TodoList";

const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodos.addTodo("Build a project", new Date("2025-03-15"));

console.log("All Todos:", myTodos.listTodos());

myTodos.completeTodo(1);
console.log("Completed Todos:", myTodos.filterTodos(true));

myTodos.updateTodo(2, "Build an advanced project");
console.log("Updated Todos:", myTodos.listTodos());

myTodos.clearCompleted();
console.log("Remaining Todos:", myTodos.listTodos());
