import React from 'react';
import todosData from './toDosData';
import ToDoItem from './toDoItems';
import './App.css';

class App extends React.Component {
        constructor() {
            super();
            /*  this.state = {
                      count: 0
                  }
                  //Binding method to class
              this.handleClick = this.handleClick.bind(this)
            */
            this.state = {
                todos: todosData
            }
            this.handlerChange = this.handlerChange.bind(this)
        }

        /*   handleClick() {
               this.setState((prevState) => {
                   return { count: prevState.count + 1 }
               });
               
           }
          */
        handlerChange(id) {
            console.log("Changed check-box", id)
            this.setState(prevState => {
                const updatedToDos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                        console.log(todo.completed)
                        console.log(todo.id)
                    }

                    return todo
                        //console.log(updatedToDos);
                })
                return {
                    todos: updatedToDos
                }
            })

        }

        render() {
            const toDoItems = this.state.todos.map(item => < ToDoItem key = { `${item.id}_${item.completed}` }
                item = { item }
                handlerChange = { this.handlerChange }
                /> )
                // console.log("In render"); console.log(toDoItems);
                return ( <
                    div > { toDoItems } <
                    /div>
                )
            }
        }

        export default App;

        /*        
                  <div >
                          <
                          h1 > { this.state.count } < /h1>   <
                          button onClick = { this.handleClick } > Change! < /button> 
                          </div >
        */