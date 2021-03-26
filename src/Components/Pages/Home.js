import React, { Fragment } from "react";
import Search from "../user/Search";
import Users from "../user/Users";
export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
