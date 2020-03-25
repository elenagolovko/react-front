import React from "react";

import "./PlaceList.scss";
import Card from "../../../shared/components/UIElements/Card/Card";
import PlaceItem from "../PlaceItem/PlaceItem";
import Button from "../../../shared/components/FormElements/Button/Button";

const PlaceList = ({ items, onDeletePlace }) => (
  <>
    {!items.length ? (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    ) : (
      <ul className="place-list">
        {items.map(item => (
          <PlaceItem
            key={item.id}
            creatorId={item.creator}
            coordinates={PlaceItem.location}
            imageUrl={item.image}
            onDelete={onDeletePlace}
            {...item}
          />
        ))}
      </ul>
    )}
  </>
);

export default PlaceList;
