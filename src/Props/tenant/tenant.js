import React, {Component}  from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import  Display  from './display';
const Loading = require('react-loading-animation');
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
    constructor(props) {
        super(props);
        this.state = {
            count:"",
            details: ""
        };
    }
    getUsersData() {
        axios
            .get(`https://scb-dash.herokuapp.com/characters`, {})
            .then(res => {
                const data = res.data
                this.setState({
                  count: data.count,
                  details : data.details
                })
                console.log(this.state.details)
                 
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData();
    }
    render()  {
        const {count,details} = this.state;
        return(
        <GridWrapper>
          <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            <div className='white f3'>
          <React.Fragment> 
            {
            this.state.details.length === 0 ?
            <Loading/>
            :
            <Display details = {details} count={count} />
    }
          </React.Fragment>
      </div>
            </Container>
          </Jumbo>
        </GridWrapper>
      );
    }
}