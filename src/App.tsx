import { useState } from 'react'
import { TextInput } from '@mantine/core'
import { Button } from '@mantine/core';

export function App() {

  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };


  return (
    <>
      <TextInput
      label="To-do List"
      description="Entrez le nom de votre tâche"
      placeholder="Ajoutez une tâche"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button 
      onClick={handleAddTodo}>Ajouter
      </Button>
      
    </>
  )
}


