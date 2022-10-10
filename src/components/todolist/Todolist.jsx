import "./Todolist.css";
import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [valueInput, setValueInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };
  const handleButton = () => {
    const newList = [...todolist, { name: valueInput, isDone: false }];
    setTodolist(newList);
    setValueInput("");
  };

  const handleDoneArray = (index) => {
    const array = todolist.map((item, i) => ({
      name: item.name,
      isDone: index === i ? !item.isDone : item.isDone,
    }));
    setTodolist(array);
  };

  const handleDelete = (i) => {
    const array = [...todolist];
    array.splice(i, 1);
    setTodolist(array);
  };

  const handleEdit = (index) => {
    const array = todolist.map((item, i) => (
      <div>
        <input></input>
      </div>
    ));
    setTodolist(array);
  };

  console.log(todolist);

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
          <button onClick={handleButton}>+</button>
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
              <div>{item.isDone === true ? <s>{item.name}</s> : item.name}</div>
              <div>
                <button onClick={() => handleEdit(index)}>edit</button>
                <button className="red" onClick={() => handleDoneArray(index)}>
                  {item.isDone === true ? "Undone" : "Done"}
                </button>
                <button className="blue" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
