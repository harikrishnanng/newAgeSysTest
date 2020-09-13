import React, { Component } from "react";
import { StatusBar, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native";
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
} from "native-base";

import { theme } from "../css/theme";
import { common } from "../css/common";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

import { list_data, reset_list_data } from "./Common/action";

class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            search: null,
            data: [],
            type: "postpaid",
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value,
        });
    }

    getData() {
        console.warn("entered", this.state.search);
        if (this.state.search) {
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
            };
            this.props.dispatch(list_data({ data: this.state.search, type: "prepaid" }));
        }
    }

    static getDerivedStateFromProps(props) {
        if (props.data) {
            console.warn("data", props.data);
            return {
                data: props.data,
            };
        }
        return null;
    }

    componentDidMount() {
        this.props.dispatch(reset_list_data());
    }

    getPlan(plan) {
        if (this.state.search) {
            this.props.dispatch(list_data({ data: this.state.search, type: plan }));
        }
        console.warn("clicked", plan);
    }

    render() {
        const renderItem = ({ item }) => (
            <TouchableOpacity first active style={[theme.operator, common.m0]}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                />
            </TouchableOpacity>
        );
        return (
            <Container>
                <StatusBar barStyle="dark-content" />
                <Header
                    androidStatusBarColor="#1E8CFB"
                    iosBarStyle="dark-content"
                    style={[theme.themeheader]}
                >
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
                    colors={["#1E8CFB", "#0FBCDB", "#03E9BF"]}
                    style={{
                        paddingLeft: 15,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <View>
                        <Item style={[common.bgwhite, theme.searchbar]}>
                            <TextInput
                                placeholderTextColor="#938c35"
                                placeholder="Search"
                                onChangeText={(text) => this.setState({ search: text })}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#369",
                                    fontWeight: "bold",
                                    marginRight: 10,
                                }}
                                onPress={() => this.getData()}
                            >
                                Done
                            </Text>
                        </Item>
                    </View>
                    <View style={[common.pt20, { height: 70 }]}>
                        <ScrollView horizontal={true} style={{ height: 150 }}>
                            <View style={[common.p0, common.m0, common.flexstyle, { height: 150 }]}>
                                <Button
                                    onPress={() => this.getPlan("prepaid")}
                                    first
                                    active
                                    style={[theme.prepaid, common.m0]}
                                >
                                    <Text
                                        style={[common.fontmedium, common.font18, common.textlover]}
                                    >
                                        <Image
                                            source={require("../assets/images/prepaid.png")}
                                            style={[common.mr10, common.pr15]}
                                        />
                                        <Text>{"  "}</Text>Pre Paid
                                    </Text>
                                </Button>
                                <Button
                                    onPress={() => this.getPlan("postpaid")}
                                    first
                                    active
                                    style={[theme.postpaid, common.m0]}
                                >
                                    <Text
                                        style={[common.fontmedium, common.font18, common.textlover]}
                                    >
                                        <Image
                                            source={require("../assets/images/prepaid.png")}
                                            style={[common.mr10, common.pr15]}
                                        />
                                        <Text>{"  "}</Text>Post Paid
                                    </Text>
                                </Button>
                                <Button
                                    onPress={() => this.getPlan("broadband")}
                                    first
                                    active
                                    style={[theme.broadband, common.m0]}
                                >
                                    <Text
                                        style={[
                                            common.black,
                                            common.fontmedium,
                                            common.font18,
                                            common.textlover,
                                        ]}
                                    >
                                        <Image
                                            source={require("../assets/images/broadband.png")}
                                            style={[common.mr10, common.pr15]}
                                        />
                                        <Text>{"  "}</Text>Broadband
                                    </Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={[common.pt10, { height: 150, marginBottom: 30 }]}>
                        <Text
                            style={[common.fontsemibold, common.font18, common.white, common.mb10]}
                        >
                            Operators
                        </Text>
                        <View style={[common.p0, common.m0, common.flexstyle]}>
                            <FlatList
                                style={{ width: "100%", marginBottom: 30, marginTop: 20 }}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={this.state.data.operators}
                                renderItem={renderItem}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                    <ScrollView>
                        <List
                            style={[common.pr15]}
                            dataArray={this.state.data.data}
                            renderRow={(item) => (
                                <ListItem thumbnail style={[theme.listcard]}>
                                    <Left style={[common.p5]}>
                                        <Thumbnail
                                            square
                                            source={{ uri: item.image }}
                                            style={{ width: 80, height: 80 }}
                                        />
                                    </Left>
                                    <Body>
                                        <Text style={[common.fontsemibold, common.textlarg]}>
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={[
                                                common.fontmedium,
                                                common.textmedium,
                                                theme.themeblue,
                                            ]}
                                        >
                                            {item.plan_type}
                                        </Text>
                                        <Text style={[common.fontsemibold]}>
                                            Minutes: {item.flexi_minutes}
                                        </Text>
                                        <Text style={[common.fontsemibold]}>{item.data}/Day</Text>
                                    </Body>
                                    <Right>
                                        <Text
                                            style={[
                                                common.fontsemibold,
                                                common.textXlarg,
                                                common.blue,
                                            ]}
                                        >
                                            $ {item.price}
                                        </Text>
                                    </Right>
                                </ListItem>
                            )}
                        ></List>
                    </ScrollView>
                </LinearGradient>
                <Footer>
                    <FooterTab style={[theme.footer]}>
                        <Button vertical active>
                            <Icon active name="search" type="Feather" />
                            <Text>Search</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate("OrderScreen")}
                        >
                            <Icon name="truck" type="FontAwesome5" />
                            <Text>Orders</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate("CartScreen")}
                        >
                            <Icon name="shopping-cart" type="MaterialIcons" />
                            <Text>Cart</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate("ProfileScreen")}
                        >
                            <Icon name="user-alt" type="FontAwesome5" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.list_data.data,
});

export default connect(mapStateToProps)(ListingPage);
