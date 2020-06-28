import React from 'react';
import '../App.css';

import Form from './Form.jsx';
import Todo from './Todo.jsx';
import List from './List.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [], 
      lists: [],
      item: '',
      edititem: '',
      hasGottenItem: false,
      isShowed: false
    };
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.addEditTodo = this.addEditTodo.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  

  // Form
  updateItem(e) {
    this.setState({item: e.target.value});
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return alert('やることを入力してください');
    }
    
    const todos = this.state.todos.slice();
    const item = {title: this.state.item};

    if (todos.some(t => t.title === item.title)) {
      return alert('同名の項目が存在します');
    } 

    todos.push(item);
    this.setState({
      todos: todos,
      item: ''
    });

    document.getElementById("title").value = '';
  }



  // Todo
  deleteTodo(todo) {
    const todos = this.state.todos.slice();
    const pos = todos.indexOf(todo);
    
    todos.splice(pos, 1);
    this.setState({todos: todos});
  }
  
  checkTodo(todo) {
    const todos = this.state.todos.slice();
    const pos = todos.indexOf(todo);

    const lists = this.state.lists.slice();
    lists.push(todos[pos]);
    
    todos.splice(pos, 1);
    this.setState({
      todos: todos,
      lists: lists,
      isShowed: true
    })
  }
  
  editTodo(todo) {
    document.getElementById("title").value = `${todo.title}`;
    this.setState({
      edititem: todo,
      hasGottenItem: true
    });
  }
  
  addEditTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return alert('やることを入力してください');
    }
    
    const todos = this.state.todos.slice();
    const item = {title: this.state.item};
    
    if (item.title === this.state.edititem.title) {
      return alert('編集項目が変更されていません');
    } 
    
    if (todos.some(t => t.title === item.title)) {
      return alert('同名の項目が存在します');
    } 
    
    const pos = todos.indexOf(this.state.edititem);

    todos.splice(pos, 1, item);
    this.setState({
      todos: todos,
      item: '',
      edititem: '',
      hasGottenItem: false
    });

    document.getElementById("title").value = '';
  }



  // List
  handleList() {
    if (this.state.lists.length > 0) {
      this.setState({isShowed: !this.state.isShowed});
    }
  }



  render() {
    let displayPage;
    if (this.state.lists.length >= 5) {

      displayPage = (
        <h1 style={{textAlign: "center", fontSize: 150}}>Bootcamp突破おめでとう!!</h1>
      );
      
    } else {

      displayPage = (
        <div className="App">
          <p>Todoリスト作成</p>
          <Form 
            item={this.state.item}
            updateItem={this.updateItem}
            addTodo={this.addTodo}
            addEditTodo={this.addEditTodo}
            hasGottenItem={this.state.hasGottenItem} 
          />
          <p>Todoリスト</p>
          <Todo
            todos={this.state.todos}
            editTodo={this.editTodo}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
          <List
            lists={this.state.lists}
            isShowed={this.state.isShowed}
            handleList={this.handleList}
          />
        </div>

      );
    }

    return (
      <div>
        {displayPage}
      </div>
    );
  }
} 

export default App;
