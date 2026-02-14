// import "./App.css";0

// function App() {
//   function btnClick() {
//     console.log("button clicked Console");
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-semibold">Hello, Shahin!</h1>
//       <button
//         onClick={btnClick()}
//         className="bg-gray-600 rounded-[5px] px-2 py-0.5 hover:bg-gray-400 trangition-colors duration-300 mt-5"
//       >
//         change user
//       </button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const App = () => {
//   function inputChanging(elem) {
//     console.log(elem);
//   }

// return (
// <div>
//   <h1 className="text-3xl font-semibold">Hello, Shahin!</h1>
//   <button
//     onClick={() => {
//       console.log("button clicked Console");
//     }}
//     className="bg-gray-600 rounded-[5px] px-2 py-0.5 hover:bg-gray-400 trangition-colors duration-300 mt-5"
//   >
//     change user
//   </button>
// </div>

//     <div>
//       <input
//         onChange={function (elem) {
//           inputChanging(elem.target.value);
//         }}
//         type="text"
//         placeholder="Enter Name Here"
//         className=" border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   function inputChanging(value) {
//     console.log(value);
//   }

//   return (
//     <div>
//       <input
//         onChange={function (elem) {
//           inputChanging(elem.target.value);
//         }}
//         type="text"
//         placeholder="Enter Name"
//       />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   let a = 20;

//   function changeA() {
//     console.log(a);
//     a = 30;
//     console.log(a);
//   }

//   return (
//     <div>
//       <h1>{a}</h1>
//       <button onClick={changeA}>click</button>
//     </div>
//   );
// };

// export default App;

import React, { use, useState } from "react";

const App = () => {
  const [a, setA] = useState(20);

  const [username, setUsername] = useState("Shahin");

  // function changeA() {
  //   setA(30);
  //   console.log(a);
  // }

  function changeA() {
    setA((prev) => prev + 1);
    setUsername("Rovin");
  }

  return (
    <div>
      <div className="m-auto max-w-7xl text-center mt-10">
        <h1>
          Value of a is {a} <br /> {username}
        </h1>

        <button
          className="bg-gray-600 text-white px-4 py-1 rounded-md mt-4"
          onClick={changeA}
        >
          click
        </button>
      </div>
    </div>
  );
};

export default App;
