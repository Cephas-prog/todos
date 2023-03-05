/** @format */

import React from 'react';
import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function ListOfPriorities({todos, deleteTodo}) {

	if (!todos.length){
		return(
			<Badge colorScheme="green" p="4" m="4" borderRadius="lg">
			 Bingoo No Tasks!!
			</Badge>
		)
	}
	

	return (
		<VStack
			divider={<StackDivider />}
			borderColor='teal.200'
			borderWidth='1.5px'
			padding='6'
			borderRadius='lg'
			w='100%'
			maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            align="stretch"
		>
			{todos.map((todo) => (
				<HStack key={todo.id}>
					<Text>{todo.body}</Text>
                    <Spacer/>
					<IconButton icon={<FaTrash />} isRound='true' onClick={()=>deleteTodo(todo.id)} />
				</HStack>
			))}
		</VStack>
	);
}

export default ListOfPriorities;
