import React, { useState } from 'react';
import { Todo } from '../components/models/Todo';
import TodoItem from '../components/Todo';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  const addTodo = () => {
    if (title.trim()) {
      setTodos([...todos, { id: Date.now(), title, completed: false }]);
      setTitle('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo..."
          className="flex-1 p-2 border rounded-l-lg"
        />
        <button onClick={addTodo} className="p-2 bg-blue-500 text-white rounded-r-lg">
          Add
        </button>
      </div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Home;