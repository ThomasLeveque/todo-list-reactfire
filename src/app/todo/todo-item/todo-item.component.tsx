import React, { useState, useRef, useEffect } from 'react';
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import { useFirestore } from 'reactfire';

import { TodoItemContainer, TodoItemIcons } from './todo-item.styles';
import { Todo } from '../todo';

interface IProps {
  todo: Todo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const { id, value, done } = todo;
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const firestore = useFirestore();
  const todoRef: firebase.firestore.DocumentReference = firestore.doc(`todos/${id}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewValue(event.target.value);
  };

  const handleUpdateNewValue = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter' && newValue.length) {
      try {
        await todoRef.update('value', newValue);
        handleIsUpdatingChange();
      } catch (err) {
        console.error(`Cannot update this todo: ${err.message || err.toString()}`);
      }
    }
  };

  const updateTodoDone = (): void => {
    todoRef.update('done', !done);
  };

  const deleteTodo = (): void => {
    todoRef.delete();
  };

  const handleIsUpdatingChange = (): void => {
    setIsUpdating((prevIsUpdating: boolean) => !prevIsUpdating);
  };

  useEffect(() => {
    if (isUpdating) {
      inputRef.current?.focus();
    } else {
      setNewValue(value);
    }
  }, [isUpdating, value]);

  return (
    <TodoItemContainer done={done} key={todo.value}>
      {isUpdating ? (
        <input
          onKeyPress={handleUpdateNewValue}
          ref={inputRef}
          type="text"
          name="newValue"
          onBlur={handleIsUpdatingChange}
          onChange={handleChange}
          value={newValue}
        />
      ) : (
        <h3>{value}</h3>
      )}
      <TodoItemIcons>
        {done ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" onClick={updateTodoDone} />
        ) : (
          <CheckCircleOutlined onClick={updateTodoDone} />
        )}
        {isUpdating ? (
          <CloseCircleTwoTone onClick={handleIsUpdatingChange} />
        ) : (
          <EditTwoTone onClick={handleIsUpdatingChange} />
        )}
        <DeleteTwoTone twoToneColor="#eb2f96" onClick={deleteTodo} />
      </TodoItemIcons>
    </TodoItemContainer>
  );
};

export default TodoItem;
