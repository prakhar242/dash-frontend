import React, {Component}  from 'react';
import { Container, Grid, Header, List, GridRow, Segment,Button } from "semantic-ui-react";
import axios from 'axios';
import  Display  from './display';
import Display1 from './display1'
const Loading = require('react-loading-animation');

export default class tenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:"",
            details: "",
            value:"",
            value1:"",
            value2:"",
            details1:"",
            searchDone: false,
            searchDone1: false,
            searchId:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit1 = this.handleSubmit1.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this);
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
    handleSubmit(event) {
      this.setState({searchDone:true})
        axios
        .post(`https://scb-dash.herokuapp.com/characters/test`, {"name":this.state.value})
        .then(res => {
            const data = res.data
            this.setState({
              details1:data.details,
              searchId:this.state.value
            })
            if (this.state.details1.length === 0) this.setState({searchDone1:true})
             
        })
        .catch((error) => {
            console.log(error)
        })
event.preventDefault();
    }
    handleSubmit1(event) {
      this.setState({searchDone:true})
      axios
      .post(`https://scb-dash.herokuapp.com/characters/test`, {"name":this.state.value1})
      .then(res => {
          const data = res.data
          this.setState({
            details1:data.details,
            searchId:this.state.value1
          })
          if (this.state.details1.length === 0) this.setState({searchDone1:true})
           
      })
      .catch((error) => {
          console.log(error)
      })

    event.preventDefault();
  }
  handleSubmit2(event) {
    this.setState({searchDone:true})
    axios
    .post(`https://scb-dash.herokuapp.com/characters/test`, {"name":this.state.value2})
    .then(res => {
        const data = res.data
        this.setState({
          details1:data.details,
          searchId:this.state.value2
        })
        if (this.state.details1.length === 0) this.setState({searchDone1:true})
         
    })
    .catch((error) => {
        console.log(error)
    })

  event.preventDefault();
}
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChange1(event) {
        this.setState({value1: event.target.value});
      }
      handleChange2(event) {
        this.setState({value2: event.target.value});
      }
      changeSearchState = () =>{
        this.setState({searchDone:false,details1:""})
      } 
    render()  {
        const {count,details} = this.state;
        return(
            <div>
            {
            this.state.details.length === 0 ?
        <Loading/>
        : 
        <div>
        { this.state.searchDone === false ?
            <Container>
              <Grid relaxed columns={5}>
    <Grid.Row>
      <Grid.Column>
       <Display count={count} details={details}/> &nbsp; &nbsp;
      </Grid.Column>
      <Grid.Column> 
          <Segment>
           <p>&nbsp; &nbsp;Search Users by Tenant ID&nbsp; &nbsp;</p>
      </Segment>
      <Segment>
       <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder = "Enter Tenant Id" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      </Segment>
      </Grid.Column>
      <Grid.Column>
          <Segment>
          <p>&nbsp; &nbsp;Search Projects by Tenant ID&nbsp; &nbsp;</p>
      </Segment>
      <Segment>
       <form onSubmit={this.handleSubmit1}>
            <input type="text" placeholder = "Enter Tenant Id" value={this.state.value1} onChange={this.handleChange1} />
          <input type="submit" value="Search" />
        </form>
      </Segment>
      </Grid.Column>
      <Grid.Column>
          <Segment>
     <p>&nbsp; &nbsp;Search Connectors by Tenant ID&nbsp; &nbsp;</p>
      </Segment>
      <Segment>
       <form onSubmit={this.handleSubmit2}>
            <input type="text" placeholder = "Enter Tenant Id" value={this.state.value2} onChange={this.handleChange2} />
          <input type="submit" value="Search" />
        </form>
      </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Container>
:
<div>
{ this.state.details1.length === 0 && this.state.searchDone1===false ? 
<Loading/>
:
<Container>
  <Grid relaxed columns={3}>
<Grid.Row>
<Grid.Column>
<Display count={count} details={details}/> 
</Grid.Column>
<Grid.Column> 
<Display1  searchId={this.state.searchId} details={this.state.details1}/>
</Grid.Column>
<Grid.Column> 
<input type="submit" value="Clear" onClick={this.changeSearchState}/>
</Grid.Column>
</Grid.Row>
</Grid>
</Container>
}
</div>
    }
</div>
    }
    </div>
      );
    }
}