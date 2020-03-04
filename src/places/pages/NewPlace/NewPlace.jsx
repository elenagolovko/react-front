import React from "react";

import Input from "../../../shared/components/FormElements/Input/Input";

import "./NewPlace.scss";

const NewPlace = () => (
  <form className="place-form">
    <Input type="text" label="title" element="input" />
  </form>
);

export default NewPlace;
