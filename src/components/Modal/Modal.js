import React, { useState } from "react";
import LableInput from "../LableInput";
import "./Modal.css";
import ClearIcon from "@mui/icons-material/Clear";

function Modal({ isOpen, onClose }) {
  const [addForm, setAddForm] = useState({
    percievedAge: "",
    height: "",
    height_comments: "",
    weight: "",
    weight_comments: "",
  });

  const inputConfigs = [
    {
      inputName: "clientActualAge",
      label: "Client's Actual Age",
      placeholder: "5 Months",
      value: addForm?.clientActualAge,
    },
    {
      inputName: "percievedAge",
      label: "Client's Perceived Age of Client",
      placeholder: "Enter Value",
      value: addForm?.percievedAge,
    },
    {
      inputName: "height",
      label: "What is your height",
      placeholder: "178",
      value: addForm?.height,
    },
    {
      inputName: "height_comments",
      label: "Comments",
      placeholder: "Enter comments here",
      value: addForm?.height_comments,
    },
    {
      inputName: "weight",
      label: "What is your weight",
      placeholder: "50",
      value: addForm?.weight,
    },
    {
      inputName: "weight_comments",
      label: "Comments",
      placeholder: "Enter comments here",
      value: addForm?.weight_comments,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={onClose}>
            <ClearIcon />
          </button>
        </div>
        <div className="modal-header">
          <h2 className="modal-heading">Demographic</h2>
        </div>

        {inputConfigs.map((config) => (
          <LableInput
            key={config.inputName}
            inputName={config.inputName}
            label={config.label}
            placeholder={config.placeholder}
            addForm={config.value}
            setAddForm={setAddForm}
          />
        ))}

        <div className="modal-button-container">
          <button onClick={onClose}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
