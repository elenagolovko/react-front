import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./MainNavigation.scss";
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UIElements/Backdrop/Backdrop";

const MainNavigation = () => {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setDrawerIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/">
          <h1 className="main-navigation__title">Your Places</h1>
        </Link>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
