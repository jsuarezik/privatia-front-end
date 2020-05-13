import React, { Fragment } from "react";
import { Header, Footer } from "./components/layouts";
import EnterpriseList from "./components/Enterprises/EnterpriseList";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <EnterpriseList />
        <Footer />
      </Fragment>
    );
  }
}
