import React, { Component } from 'react';
import ReactTable from 'react-table'
import Doughnut from './components/Doughnut'
import Gauge from './components/Gauge'
import Line from './components/Line'
import './App.css';
class Expenses extends Component {
  render() {
    return (

      <div id="colorlib-page">
      <div className="sidenav">
        <h5> $PiggyBank$ </h5>
        <a href="#clients">About</a>
        <a href="Expenses.js">Expenses</a>
        <a href="App.js">Dashboard</a>
        <a href="contacts">Contact</a>
      </div>
        <div id="container-wrap">
        <h1 id = "App-title"> PiggyBank Expenses</h1>

        <MDBContainer  className="mb-4">
            <MDBCard>
              <MDBCardBody>
                 <div className = "dashboard"><Line></Line></div>
              </MDBCardBody>
            </MDBCard>
        </MDBContainer>

        <MDBContainer>
        <MDBRow className="mb-4">
          <MDBCol sm="6">
            <MDBCard>
              <MDBCardBody>
                <h5> Total Amount Spent:</h5>
                <h1 id = "red"> $100k</h1>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="6">
            <MDBCard>
              <MDBCardBody>
                <h5> Budget:</h5>
                <h1 id = "green"> $300k</h1>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

       <MDBContainer>
        <MDBRow className="mb-4">
          <MDBCol sm="6">
            <MDBCard>
              <MDBCardBody>
                <div className = "dashboard"><Doughnut></Doughnut></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="6">
            <MDBCard>
              <MDBCardBody>
                <div className = "dashboard"><Gauge></Gauge></div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      </div>


    );
  }
}

export default Expenses;