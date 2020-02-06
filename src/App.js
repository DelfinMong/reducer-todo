import React from 'react';


// Components
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      
      <Header />
      <TodoList />
    </div>
  );
}

export default App;




// import React, { useState } from 'react';
// import TodoList from "./components/TodoList"
// import TodoForm from "./components/TodoForm"


// function App () {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
  
//    const [lists, setLists] = useState([list]) 
//    const addnewCar = newCarName => {
      
//    setLists( [...lists,
//     {
//            name: newCarName,
//            id: Date.now(),
//            bolean: false
//       }
//      ])
//     };
   
  

//   const toggleBolean = id => {
//     //^^===this.toggle.Purchased
//     console.log("index.js: App: togglePurchased: id:", id);
//     //shows that toggle happens^^
//     //we need new state for functions
    
//       setLists( lists.map(item => {
//         if (item.id === id) {
//           return {
//             ...item,
//             bolean: !item.bolean
//           };
//         }
//         return item;
//       }))
//   };

//   const clearCars = () => {
//       setLists(lists.filter(item => {
//         return !item.bolean;
//         //^^=== if (item.bolean === false) return true
//       }))
//   };
  

//     return (    
//       <div>
//         <div>
//           <h2>This is Delfin's Todo's App</h2>
//           <h1>Car List</h1>
//           <TodoForm  addnewCar={addnewCar}/>
//         </div>
//           <TodoList 
//             list={lists}
//             toggleBolean={toggleBolean}
//             clearCars={clearCars}
//             />
//       </div>
//     );
// }

// export default App;