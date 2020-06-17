import React, { Component } from "react";
import axios from 'axios';
import { Container, Grid, Header, List, ListItem, ListContent } from "semantic-ui-react";
import Display  from './display1'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',results:[],searchDone:false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value,searchDone:false});
    }
  
    handleSubmit(event) {
        axios
        .post(`https://scb-dash.herokuapp.com/characters/test`, {"name":this.state.value})
        .then(res => {
            const data = res.data
            this.setState({
              results:data,
              searchDone:true
            })
            console.log(this.state.results)
             
        })
        .catch((error) => {
            console.log(error)
        })

      event.preventDefault();
    }
  
    render() {
      const {details} =this.state.results
      return (
        <div>
          { this.state.searchDone===false ?
          <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <List>
                            
                <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder = "Search by Name" value={this.state.value} onChange={this.handleChange} />
          </label> &nbsp; &nbsp;
          <input type="submit" value="Search" />
        </form>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        :
        <div>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <ListItem>
                    <ListContent>
                            
                    <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder = "Search by Name" value={this.state.value} onChange={this.handleChange} />
          </label> &nbsp; &nbsp;
          <input type="submit" value="Search" />
        </form>
        </ListContent>
        </ListItem>
        <ListItem>
        <Display count={details.length} details={details}/>
        </ListItem>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
       
      </div>
    }
        </div>
      );
    }
  }
  export default Search