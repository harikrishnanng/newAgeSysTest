/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  View,
  Header,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Body,
  Title,
  Left,
  Icon,
  Right,
  List,
  ListItem,
  Thumbnail,
  Footer,
  FooterTab,
} from 'native-base';

import {theme} from '../css/theme';
import {common} from '../css/common';
import LinearGradient from 'react-native-linear-gradient';

export default class ListingPostpaid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header
          androidStatusBarColor="#1E8CFB"
          iosBarStyle="dark-content"
          style={[theme.themeheader]}>
          <Body style={[common.pl20]}>
            <Title>Search Result</Title>
          </Body>
          <Right>
            <Icon
              name="options-vertical"
              type="SimpleLineIcons"
              style={[common.white]}
            />
          </Right>
        </Header>
        <LinearGradient
          colors={['#1E8CFB', '#0FBCDB', '#03E9BF']}
          style={{
            paddingLeft: 15,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View>
            <Item style={[common.bgwhite, theme.searchbar]}>
              <Input placeholder="Search" />
            </Item>
          </View>
          <View style={[common.pt20, {height: 70}]}>
            <ScrollView horizontal={true} style={{height: 150}}>
              <View
                style={[common.p0, common.m0, common.flexstyle, {height: 150}]}>
                <Button first active style={[theme.prepaid, common.m0]}>
                  <Text
                    style={[
                      common.fontmedium,
                      common.font18,
                      common.textlover,
                    ]}>
                    <Image
                      source={require('../assets/images/prepaid.png')}
                      style={[common.mr10, common.pr15]}
                    />
                    <Text>{'  '}</Text>Pre Paid
                  </Text>
                </Button>
                <Button first active style={[theme.postpaid, common.m0]}>
                  <Text
                    style={[
                      common.fontmedium,
                      common.font18,
                      common.textlover,
                    ]}>
                    <Image
                      source={require('../assets/images/prepaid.png')}
                      style={[common.mr10, common.pr15]}
                    />
                    <Text>{'  '}</Text>Post Paid
                  </Text>
                </Button>
                <Button first active style={[theme.broadband, common.m0]}>
                  <Text
                    style={[
                      common.black,
                      common.fontmedium,
                      common.font18,
                      common.textlover,
                    ]}>
                    <Image
                      source={require('../assets/images/broadband.png')}
                      style={[common.mr10, common.pr15]}
                    />
                    <Text>{'  '}</Text>Broadband
                  </Text>
                </Button>
              </View>
            </ScrollView>
          </View>
          <View style={[common.pt10, {height: 150}]}>
            <Text
              style={[
                common.fontsemibold,
                common.font18,
                common.white,
                common.mb10,
              ]}>
              Operators
            </Text>
            <ScrollView horizontal={true} style={{height: 130}}>
              <View style={[common.p0, common.m0, common.flexstyle]}>
                <TouchableOpacity
                  first
                  active
                  style={[theme.operator, common.m0]}>
                  <Image source={require('../assets/images/operator.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  first
                  active
                  style={[theme.operator, common.m0]}>
                  <Image source={require('../assets/images/operator2.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  first
                  active
                  style={[theme.operator, common.m0]}>
                  <Image source={require('../assets/images/operator.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  first
                  active
                  style={[theme.operator, common.m0]}>
                  <Image source={require('../assets/images/operator2.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  first
                  active
                  style={[theme.operator, common.m0]}>
                  <Image source={require('../assets/images/operator.png')} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <ScrollView>
            <List style={[common.pr15]}>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      theme.orange,
                      common.font18,
                    ]}>
                    Post Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>30 GB/Month</Text>
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250/{'\n'}{' '}
                    <Text
                      style={[
                        common.textmedium,
                        common.blue,
                        common.fontsemibold,
                      ]}>
                      Month
                    </Text>
                  </Text>
                </Right>
              </ListItem>
            </List>
          </ScrollView>
        </LinearGradient>
        <Footer>
          <FooterTab style={[theme.footer]}>
            <Button vertical active>
              <Icon active name="search" type="Feather" />
              <Text>Search</Text>
            </Button>
            <Button vertical>
              <Icon name="truck" type="FontAwesome5" />
              <Text>Orders</Text>
            </Button>
            <Button vertical>
              <Icon name="shopping-cart" type="MaterialIcons"/>
              <Text>Cart</Text>
            </Button>
            <Button vertical>
              <Icon name="user-alt" type="FontAwesome5" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
