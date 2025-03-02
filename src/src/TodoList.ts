import { TodoItem } from "./TodoItem";

export class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = { id: this.nextId++, task, completed: false, dueDate };
        this.todos.push(newTodo);
        console.log(`Added: ${task}`);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: ${todo.task}`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id);
        console.log(`Removed todo with ID ${id}`);
    }

    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.task = newTask;
            console.log(`Updated: ${newTask}`);
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log("Cleared completed todos.");
    }
}
