import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
import './display.css'


class display extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { count , details } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
            <div class="cont">
              <Header> Total No. of Tenants: {count}</Header>
              <List>
                {details.map(el => {
                  return (
                    <List.Item  key={el._id}>
                      <List.Content>
                         ID : {el._id} &nbsp; &nbsp;
                        Name : {el.name} &nbsp; &nbsp;
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Container>
    );
  }
}

export default display;
