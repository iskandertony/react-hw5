import "./Todolist.css";
import { useState } from "react";

const Todolist = () => {
  const [valueInput, setValueInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [done, setDone] = useState(null);
  const [doneArray, setDoneArray] = useState([]);

  let asd = "";

  const handleInput = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };
  const handleButon = () => {
    const newList = [...todolist, valueInput];
    setTodolist(newList);
    setValueInput("");
    console.log(newList);
  };

  const handleDoneArray = (index) => {
    setDone(index);
    const newList = [...doneArray, todolist];
    asd = newList;
    setDoneArray(newList);
    console.log(newList);
    // console.log("asd:", asd);
    const empty = [];
    setTodolist(empty);
  };

  // const handleFinish = () => {
  //   const result = asd;
  //   setDoneArray(asd);
  //   console.log("result:", result);
  // };

  if (done) {
    return (
      <div className="title">
        <div className="title-sub">
          <div>{done}</div>
        </div>
      </div>
    );
  }

  // if (select === "Finish") {
  //   console.log("iska");
  //   // return (
  //   //   <div>
  //   //     {doneArray.map((item, i) => (
  //   //       <div key={i} className="title">
  //   //         <div className="title-sub">
  //   //           <div>{item}</div>
  //   //         </div>
  //   //       </div>
  //   //     ))}
  //   //   </div>
  //   // );
  // }

  return (
    <div className="todolist">
      <div className="main">
        <div className="main-sub">
          <input
            id="input"
            value={valueInput}
            onChange={handleInput}
            placeholder="Type something .."
          />
          <button onClick={handleButon}>+</button>
          <select id="select">
            <option>...</option>
            <option value={"Finish"}>Finish</option>
            <option>Delete</option>
          </select>
        </div>
      </div>

      <div id="box">
        {todolist.map((item, index) => (
          <div key={index} className="title">
            <div className="title-sub">
              <div>{item}</div>
              <div>
                <button className="red" onClick={() => handleDoneArray(index)}>
                  Done
                </button>
                <button className="blue">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const select = () => {
//   let select = document.getElementById("select").value;
// }

export default Todolist;
