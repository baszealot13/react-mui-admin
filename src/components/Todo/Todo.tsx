import React from 'react'

interface IProp {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  }
}

const Todo: React.FC<IProp> = ({ todo }) => {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <u>{h1}</u> : h1;
  return (
    <div data-testid={`todo-${id}`}>
      {text}
    </div>
  )
}

export default Todo;
