import React, { useState }  from 'react';

function TodoForm({dispatch}) {

    const [ newTodoText, setNewTodoText ] = useState('');

    const handleChanges = (e) => {
      setNewTodoText(e.target.value);
    };
  
    const addTodo = (e) => {
      e.preventDefault();
      setNewTodoText('');
      dispatch(
        { type: "ADD_TODO",
          payload: newTodoText
        }
      );
      setNewTodoText('');
    };

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch(
          {
            type: "CLEAR_COMPLETED"
          }
        );
      }


  return (
    <>
      <form className="todoform">
      <input className="todoform__input"

          type="text" 
          placeholder="New Todo" 
          name="newTodoText"
          value={newTodoText}
          onChange={handleChanges}
        />
        
        <div className="btn-container">
        <button 
            onClick={addTodo}>Add Todo</button>
          <button 
            onClick={clearCompleted}>Clear Completed</button>
        </div>
        
      </form>
    </>
  )
}

export default TodoForm;




// import React, { useState} from 'react';

// function TodoForm (props) {
      
//   const [newCar, setNewcar] =  useState('')
 
  

//   const handleChange = e => {
//     setNewcar({newCar: e.target.value })
//   };

//   const handleSubmit = e => {
//       e.preventDefault();
//       props.addnewCar(newCar);
      
//   };

 
//    return (
//      <form onSubmit={handleSubmit}>
//          <input
//            onChange={handleChange}
//            type="text"
//            name="cars"
//            value={newCar}
//          /> <br/>
//          <button> Add Cars </button>
//      </form>    
//    );
 
// }

// export default TodoForm