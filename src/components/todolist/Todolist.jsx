import "./Todolist.css";
import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [valueInput, setValueInput] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [edit, setEdit] = useState(null);
  const [input, setInput] = useState("")

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

  const handleEdit = (index, value) => {
    setInput(value)
    setEdit(index)
  };

  const handleSave = (index) => {
    const array = todolist.map((item, i) => {
      if (index === i) {
        const newItem = { ...item }
        newItem.name = input
        return newItem
      } else {
        return item
      }
    })
    setTodolist(array)
    setEdit(false)
    setInput("")
  }

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

              {edit === index ? (
                <div>
                  <input value={input} onChange={(e) => setInput(e.target.value)}></input>
                  <button onClick={() => handleSave(index)}>Save</button>
                </div>
              ) : (
                <div>{item.isDone === true ? <s>{item.name}</s> : item.name}</div>
              )}

              <div>
                <button onClick={() => handleEdit(index, item.name)}>edit</button>
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
