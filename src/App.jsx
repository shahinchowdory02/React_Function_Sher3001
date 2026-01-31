import "./App.css";

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

import React from "react";

const App = () => {
  function inputChanging(elem) {
    console.log(elem);
  }

  return (
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

    <div>
      <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name Here"
        className=" border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default App;
