import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import { todoReducer, initialTodosState } from "../reducers/reducersTodo";

function TodoList() {
    const [ state, dispatch ] = useReducer(todoReducer, initialTodosState);


  return (
    <div className="todolist">
             {
        state.map( (todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch}  />
        })
      }
        <TodoForm dispatch= {dispatch} />
    </div>
  );
}

export default TodoList;







// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// import React from 'react';
// import Todo from './Todo';

// const TodoList = ({list, toggleBolean, clearCars}) => {
 
//      return (
//        <div>
//            {list.map(item => (
//             <Todo
//               key={item.id}
//               item={item}
//               toggleBolean={toggleBolean}
//             />
//            ))}
//           <button onClick={clearCars}> 
//               Clear Cars 
//           </button>
//        </div>
//      );
//     }


// export default TodoList