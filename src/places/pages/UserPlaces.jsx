import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList/PlaceList";

import { DUMMY_PLACES } from "./places.data";

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(e => e.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
