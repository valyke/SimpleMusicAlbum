import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body Thumbnail, Text, Button, Icon } from 'native-base';
​
class Test extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={logo} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image/>
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem style={{ justifyContent: 'space-around' }}>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}

export default Test;