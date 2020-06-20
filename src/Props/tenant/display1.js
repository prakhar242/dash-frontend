import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
import './display.css'


class display1 extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const {searchId, details } = this.props;
    console.log(searchId);
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
    <Header> Total No. of Users for tenant Id {searchId} is: {details.length}</Header>
              <div class="cont">
              <List bulleted>
                {details.map(el => {
                  return (
                    <List.Item  key={el._id}>
                      <List.Content>
                         ID : {el._id} &nbsp; &nbsp;
                        Name : {el.name} &nbsp; &nbsp;
                        Data : {el.data}
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

export default display1;
