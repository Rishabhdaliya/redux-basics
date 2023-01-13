import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Lists } from "./Lists";
import "./Todolist.css";

const data = [{ _id: 1, label: "food" }];

export const Todolist = () => {
  const [value, setValue] = useState();
  const [text, setText] = useState([]);

  const addHandler = () => {
    setText([...text, value]);
  };

  return (
    <div className="todolist">
      <div className="todolist__input">
        <TextField
          onChange={(e) => setValue(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button onClick={addHandler} color="success" variant="contained">
          +
        </Button>
      </div>
      {text.length > 0 ? (
        <div id="lists">
          <Lists text={text} setText={setText} />
        </div>
      ) : (
        <h4>Empty List</h4>
      )}
    </div>
  );
};
