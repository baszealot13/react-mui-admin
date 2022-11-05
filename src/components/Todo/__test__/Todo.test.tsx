
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';

afterEach(() => {
  cleanup();
})
test('should render todo component', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  render(<Todo todo={todo}/>);
  const todoElm = screen.getByTestId('todo-1');
  expect(todoElm).toBeInTheDocument();
  expect(todoElm).toHaveTextContent('wash dishes');
});

test('should render todo component', () => {
  const todo = { id: 2, title: 'make dinner', completed: true };
  render(<Todo todo={todo}/>);
  const todoElm = screen.getByTestId('todo-2');
  expect(todoElm).toBeInTheDocument();
  expect(todoElm).toHaveTextContent('make dinner');
});

test('matches snapshot', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  const tree = renderer.create(<Todo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot();
});