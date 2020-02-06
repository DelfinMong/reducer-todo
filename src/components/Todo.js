import React from 'react';

function Todo({todo, dispatch}) {

    const toggleCompleted = (e) => {
        dispatch({
          type: 'TOGGLE_COMPLETED',
          payload: todo.id
        })
      }    

  return (
    <div onClick={toggleCompleted} 
    className={`todo${todo.completed ? " completed" : ""}`}>
       
      <p>{ todo.item }</p>
    </div>
  );
}

export default Todo;






// import React from 'react';

// const Todo = ({item, toggleBolean}) => {
//      return (
//         <div 
//             onClick={ () => toggleBolean(item.id)}
//             className={`item ${item.bolean ? "bolean" : ""}`}
//         >    
//             <p>{item.name}</p>
//        </div>
//      );
//     };
  

// export default Todo