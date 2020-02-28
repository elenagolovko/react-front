import React from "react";

import "./PlaceList.scss";
import Card from "../../../shared/components/UIElements/Card/Card";
import PlaceItem from "../PlaceItem/PlaceItem";

const PlaceList = ({ items }) => (
  <>
    {!items.length ? (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    ) : (
      <ul className="place-list">
        {items.map(item => (
          <PlaceItem
            key={item.id}
            creatorId={item.creator}
            coordinates={PlaceItem.location}
            {...item}
          />
        ))}
      </ul>
    )}
  </>
);

export default PlaceList;
