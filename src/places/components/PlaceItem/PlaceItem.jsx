import React, { useState, useContext } from "react";
import Button from "../../../shared/components/FormElements/Button/Button";

import Card from "../../../shared/components/UIElements/Card/Card";
import Modal from "../../../shared/components/UIElements/Modal/Modal";
import Map from "../../../shared/components/UIElements/Map/Map";

import { AuthContext } from "../../../shared/context/auth-context";

import "./PlaceItem.scss";

const PlaceItem = ({
  imageUrl,
  title,
  address,
  description,
  id,
  coordinates
}) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmModalHandler = () => setShowConfirmModal(true);

  const closeConfirmModalHandler = () => setShowConfirmModal(false);

  const confirmDeletingHandler = () => {
    console.log("DELETING");
    closeConfirmModalHandler();
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClas="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h1>THE MAP</h1>
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={closeConfirmModalHandler}
        header={"Are you sure?"}
        footerClas="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeConfirmModalHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeletingHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && <Button to={`/places/${id}`}>EDIT</Button>}
            {auth.isLoggedIn && (
              <Button danger onClick={openConfirmModalHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
