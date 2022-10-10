import "./Todolist.css";
import React from "react";
import { useState } from "react";
import { Button } from 'antd';
import { Input } from 'antd';

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
          <Input
            id="input"
            value={valueInput}
            onChange={handleInput}
            placeholder="Type something .."
          />

          <Button type="primary" onClick={handleButton}>Add</Button>
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
                  <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
                  <button onClick={() => handleSave(index)}>Save</button>
                </div>
              ) : (
                <div>{item.isDone === true ? <s>{item.name}</s> : item.name}</div>
              )}

              <div>
                <Button type="primary" onClick={() => handleEdit(index, item.name)}>edit</Button>
                <Button type="default"  onClick={() => handleDoneArray(index)}>
                  {item.isDone === true ? "Undone" : "Done"}
                </Button>
                <Button type="primary" danger onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
