import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";

class display extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const {details,count}=this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header> Total No. of Documents: {count}</Header>
              <List>
                {details.map(el => {
                  return (
                    <List.Item  key={el._id}>
                      <List.Content>
                         ID : {el._id} &nbsp; &nbsp;
                        Name : {el.name} 
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default display;
