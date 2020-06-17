import React, {Component}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import  Display  from './display';
import Search from './search';
const Loading = require('react-loading-animation');

export default class tenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:"",
            details: "",
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
            <div>
            {
            this.state.details.length === 0 ?
            <Loading/>
            :
            <React.Fragment>
              <Display  details = {details} count={count} />
              <Search/>
              </React.Fragment>
            
    }
      </div>
      );
    }
}