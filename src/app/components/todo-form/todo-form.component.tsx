import React, { useState } from 'react';
import { TodoFormContainer } from './todo-form.styles';
import { useFirestore } from 'reactfire';

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
    const todo = {
      value,
      done: false,
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
      <label htmlFor="value">Add a todo :</label>
      <input type="text" name="value" onChange={handleChange} value={value} />
    </TodoFormContainer>
  );
};

export default TodoForm;
