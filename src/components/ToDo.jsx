import React, { useEffect, useState } from 'react';
import { Card, Divider, Button } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';
import { getTasks, delTask, addTask, closeItem } from './http';

export const ToDo = () => {

 
  const [todos, setTodos] = useState([]);
  const [checkCount, setCheckCount] = useState(0);
  
  useEffect(() => {
    var itemArray = getTasks(); 
    setTodos(itemArray); 
  }, []);

  const onCheck = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      const todo = todos[index];
      if(closeItem(id, todo.checked ? "reopen" : "close") === ""){
        todo.checked = !todo.checked;
        todos.splice(index, 1, todo);
        setTodos([...todos]);
        setCheckCount(todo.checked? checkCount + 1 : checkCount - 1);
      }
    }
  }

  const remChecked = () => {
    console.log("remchecked");
    
    
    for(var i = todos.length - 1; i >= 0; i--){
      
      if(todos[i].checked){
        const index = todos.findIndex(todo => todo.id === todos[i].id);
      if (index !== -1 && delTask(todos[i].id) === 'ok') {

          
        todos.splice(index, 1);
        setTodos([...todos]);
      }
      }
    }
    setCheckCount(0);
  }
  
  const onRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1 && delTask(id) === 'ok') {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
    
  }
  const onSubmit = (values) => {
    console.log(values.description == null);
    if(values.title != null && values.title.length >= 3 &&  (values.description == null || values.description.length >= 3 )){
      console.log("first check pass");
      if(values.title[0] === values.title[0].toUpperCase()){
        
        console.log("check ok");
        const todo = {
          title: values.title,
          id: 0,
          checked: false,
          description: values.description
        };
        var resp = addTask(todo);
        if(resp !== null){
          todo.id = resp.id;
          setTodos([...todos, todo]);
          
        }
      }
      else {
        alert("Title should start of a capital letter");
      }
    }
    else {
      alert("Length of title and description (if there is one) should be no less than 3");
    }
      
  } 

  const renderTodoItems = (todos) => { //прикольно, чтобы добавить description, здесь не пришлось даже ничего редактировать
    return (
       <ul className="todo-list">
        { todos.map(todo => <ToDoItem 
            key={todo.id}
            item={todo}
            onRemove={onRemove} 
            onCheck={onCheck} 
          />) }
      </ul>
    )
  }

  return (
    <Card title={'My todos'} className="todo-card">
      <Button onClick={remChecked} className='rmbutton'>Delete all checked</Button>
      <p id="checkcount">Checked items: {checkCount}</p>
      <ToDoForm onSubmit={onSubmit} />
      <Divider />
      { renderTodoItems(todos) }
    </Card>
  );
}
