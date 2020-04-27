import React, { useState, useRef, useEffect } from 'react';
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  CloseCircleTwoTone,
  LoadingOutlined,
} from '@ant-design/icons';
import { useFirestore } from 'reactfire';

import { Todo } from '../todo';
import colors from '../../app.colors';
import { TodoItemContainer, TodoItemIcons } from './todo-item.styles';

interface IProps {
  todo: Todo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  const { id, value, done } = todo;
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
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
        setUpdateLoading(true);
        await todoRef.update('value', newValue);
        setUpdateLoading(false);
        handleIsUpdatingChange();
      } catch (err) {
        setUpdateLoading(false);
        console.error(`Cannot update this todo: ${err.message || err.toString()}`);
      }
    }
  };

  const updateTodoDone = (): void => {
    todoRef.update('done', !done);
  };

  const deleteTodo = async (): Promise<void> => {
    setDeleteLoading(true);
    await todoRef.delete();
    setDeleteLoading(false);
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
          <CheckCircleTwoTone twoToneColor={colors.isDone} onClick={updateTodoDone} />
        ) : (
          <CheckCircleOutlined onClick={updateTodoDone} />
        )}
        {updateLoading ? (
          <LoadingOutlined style={{ color: colors.primary }} />
        ) : isUpdating ? (
          <CloseCircleTwoTone twoToneColor={colors.primary} onClick={handleIsUpdatingChange} />
        ) : (
          <EditTwoTone twoToneColor={colors.primary} onClick={handleIsUpdatingChange} />
        )}
        {deleteLoading ? (
          <LoadingOutlined style={{ color: colors.secondary }} />
        ) : (
          <DeleteTwoTone twoToneColor={colors.secondary} onClick={deleteTodo} />
        )}
      </TodoItemIcons>
    </TodoItemContainer>
  );
};

export default TodoItem;
