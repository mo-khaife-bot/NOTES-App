import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
        value={inputText}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button onClick={saveHandler} className="note__save">
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
