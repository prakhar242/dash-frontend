import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";


class display1 extends Component {
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
              <Header> Total No. of Documents: {count}</Header>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default display1;
