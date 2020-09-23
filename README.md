# react-context-stateful

A simple wrapper that makes it easy to create simple, stateful contexts.

## Install

```sh
# Using NPM
npm install react-context-stateful

# Using Yarn
yarn add react-context-stateful
```

## Usage

To create a stateful context, pass `createStatefulContext()` a functional
component and export its results: 

```js
// TodoContext.jsx

import createStatefulContext from 'react-context-stateful'

export [
	useTodo,
	TodoProvider
] = createStatefulContext(Provider => ({ children }) =>
{
	const [todoList, setTodoList] = useState([])

	const addTodoItem = item =>
	{
		// ...
	}

	const popTodoItem = () =>
	{
		// ...
	}

	return (
		<Provider value={ {
			addTodoItem,
			popTodoItem
		} }>
			{ children }
		</Provider>
	)
})
```

The `Provider` component can then be used at the project root:

```js
// index.js

import { TodoProvider } from './TodoContext'

ReactDOM.render(
	<TodoProvider>
		<App />
	</TodoProvider>,
	document.getElementById('root')
)
```

The `Context` object is then available to use in hooks:

```js
// TodoAdder.jsx

const TodoAdder = () =>
{
	const { addTodoItem } = useTodo()

	// ...
}

export default TodoAdder
```

This package also includes support for defining your contexts with TypeScript:

```ts
import createStatefulContext from 'react-context-stateful'

type TodoState = {
	popTodoItem: () => string
	addTodoItem: (item: string) => void
}

export [
	useTodo,
	TodoProvider
] = createStatefulContext<TodoState>(Provider => ({ children }) =>
{
	const [todoList, setTodoList] = useState<string[]>([])

	const addTodoItem = (item: string) =>
	{
		// ...
	}

	const popTodoItem = (): string =>
	{
		// ...
	}

	return (
		<Provider value={ {
			addTodoItem,
			popTodoItem
		} }>
			{ children }
		</Provider>
	)
})
```
