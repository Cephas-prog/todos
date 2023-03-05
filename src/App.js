/** @format */

import { Heading, IconButton, VStack, useColorMode } from '@chakra-ui/react';
import ListOfPriorities from './components/ListOfPriorities';
import { FaSun, FaMoon } from 'react-icons/fa';
import AddPriorities from './components/AddPriorities';
import { useState, useEffect } from 'react';

function App() {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function deleteTodo(id) {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});

		setTodos(newTodos);
	}

	function addTodo(todo) {
		setTodos([...todos, todo]);
	}

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<VStack padding={4}>
			<IconButton icon={colorMode=== "light"? <FaSun /> : <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
			<Heading
				mb='8'
				fontWeight='extrabold'
				size='2xl'
				bgGradient='linear(to right, yellow.500, pink.300, teal.500)'
				bgClip='text'
			>
				Priorities App
			</Heading>
			<ListOfPriorities todos={todos} deleteTodo={deleteTodo} />
			<AddPriorities addTodo={addTodo} />
		</VStack>
	);
}

export default App;
