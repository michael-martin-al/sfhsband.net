import * as React from "react";

import Layout from "../../components/Layout";
import EventRoll from "../../components/EventRoll";
import Container from "@mui/material/Container";

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container component="section">
          <div className="container">
            <div className="content">
              <EventRoll />
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
