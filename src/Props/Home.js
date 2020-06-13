import React, {Component}  from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
const GridWrapper = styled.div`
  .jumbo {
    background:url(https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);    
    background-size: cover;
    color: #efefef;
    height: 420px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export default class tenant extends Component {
  render() {
    return (
  <GridWrapper>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>This Dashboard will fetch data from the Paxata Database</h1>
        <p>Select an option from the Sidebar to Start!</p>
      </Container>
    </Jumbo>
  </GridWrapper>
);
    }
  }