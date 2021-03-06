import React, { useState } from 'react';
import { useFirestore } from 'reactfire';

import { TodoFormContainer, TodoFormButton, TodoFormInput } from './todo-form.styles';
import { Todo } from '../todo';

const TodoForm: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const firestore = useFirestore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!value.length) return;

    const todosRef = firestore.collection('todos');
    const todo: Todo = {
      value,
      done: false,
      createdAt: Date.now(),
    };

    try {
      await todosRef.add(todo);
      setValue('');
    } catch (err) {
      console.error(`Cannot add this todo: ${err.message || err.toString()}`);
    }
  };

  return (
    <TodoFormContainer onSubmit={handleSubmit}>
      <TodoFormInput
        autoComplete="off"
        placeholder="Add a todo"
        type="text"
        name="value"
        onChange={handleChange}
        value={value}
      />
      <TodoFormButton type="submit">Add todo</TodoFormButton>
    </TodoFormContainer>
  );
};

export default TodoForm;
