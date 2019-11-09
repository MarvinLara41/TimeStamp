/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Button, FormGroup,ControlLabel, FormControl } from "react-bootstrap";
import { Clock } from "../components/Clock/Clock"
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import {
//   dataPie,
//   legendPie,
//   dataSales,
//   optionsSales,
//   responsiveSales,
//   legendSales,
//   dataBar,
//   optionsBar,
//   responsiveBar,
//   legendBar
// } from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md = {6} sm={12}>
              <StatsCard style={{ width: 'center' }}
                bigIcon={<i className="pe-7s-timer text-success" />}
                statsText="Time"
                statsValue= {<Clock></Clock>}
                statsButton={<Button>Clock in</Button>}

              />
            </Col>
          </Row>
          <Row>
          <Col md={6}>
              <Card
                title="Your Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "TimeStamp inc.",
                          disabled: true
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",

                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
           
            <Col md={6}>
              <Card style
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="w-100 p-3">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
