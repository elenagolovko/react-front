import React, { useCallback, useReducer } from "react";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../../shared/util/validators";

import Input from "../../../shared/components/FormElements/Input/Input";
import Button from "../../../shared/components/FormElements/Button/Button";

import "./NewPlace.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    isValid: false
  });
  //whenever is rerendered the function is created anew, thats why we use useCallback
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter the valid title"
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="Please enter the valid description (at least 5 characters) "
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
