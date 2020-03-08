import React, { useReducer, useEffect } from "react";
//with useREDucer can manage complex state with ease, interconnected

import { validate } from "../../../util/validators";

import "./Input.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

const Input = ({
  className,
  id,
  label,
  element,
  type,
  placeholder,
  rows,
  errorText,
  validators,
  onInput,
  valid,
  value
}) => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: value || "",
    isTouched: false,
    isValid: valid || false
  });

  const { inputValue, isValid } = inputState;

  useEffect(() => {
    onInput(id, inputValue, isValid);
  }, [id, inputValue, isValid, onInput]);

  const changeHandler = e => {
    inputDispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: validators
    });
  };

  const touchHandler = () => {
    inputDispatch({
      type: "TOUCH"
    });
  };

  const elementToRender =
    element === "input" ? (
      <input
        id={id}
        typ={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${className} ${!inputState.isValid &&
        inputState.isTouched &&
        "form-control--invalid"}`}
    >
      <label htmlFor={id}>{label}</label>
      {elementToRender}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
