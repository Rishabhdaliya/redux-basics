import { Button } from "@mui/material";
import React, { useEffect } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
export const Lists = ({ text, setText }) => {
  useEffect(() => {
    console.log("I am mounting");
  }, [text]);
  useEffect(() => {
    return console.log("I am unmounting");
  }, []);

  return (
    <>
      {text.map((curElm, index) => (
        <div key={index}>
          <h4>{curElm}</h4>
          <div>
            <Button color="error" variant="contained">
              <DeleteOutlineRoundedIcon
                onClick={() => setText(text.splice(index, 1))}
              />
            </Button>
            <Button color="error" variant="contained">
              <EditRoundedIcon />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
