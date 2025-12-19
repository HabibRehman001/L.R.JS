import React, { useState } from "react";
export default function Textman() {
  const [oldText, newText] = useState("");
  const chnge = (e) => {
    newText(e.target.value);
  };
  const clear = () => {
    let empty = "";
    newText(empty);
  };
  const upper = () => {
    let upperTrans = oldText.toUpperCase();
    newText(upperTrans);
  };
  const lower = () => {
    let upperTrans = oldText.toLowerCase();
    newText(upperTrans);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={oldText}
            onChange={chnge}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn btn-primary mx-5 my-4" onClick={clear}>
            Clear Text Area
          </button>
          <button className="btn btn-primary mx-5 my-4" onClick={upper}>
            Upper Case
          </button>
          <button className="btn btn-primary mx-5 my-4" onClick={lower}>
            Lower Case
          </button>
        </div>
        <p> {oldText.length} characters </p>
        <p> {(oldText.split(" ").length)-1 } words </p>
        <h2>Preview</h2>
        <p className="prev_para">
          {oldText}
        </p>
      </div>
    </>
  );
}
