/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    static navigationsOptions = {
        header: null,
    };

    constructor(props){
        super(props);

        this.state = {
            menu: '',
        }
    }

    render() {
        return (
            <View style={styles.box}>
                {/* 搜索条 */}
                <TextInput style={styles.searchInput} underlineColorAndroid='transparent' placeholder='请输入您要搜索的菜名' value={this.state.menu} onChangeText={(text)=>{
                    this.setState({menu: text})
                }}/>

                {/* 搜索框 */}
                <TouchableNativeFeedback style={styles.searchButton}  onPress={() => {
                    let menu = this.state.menu && this.state.menu.replace(/\s+/g, '');
                    if( menu ){
                        this.props.navigation.navigate("ListPage", {
                            menu: menu,
                            pn: 0,
                            rn: 10,
                        });
                    }else{
                        alert("请填写内容");
                    }
                }}>
                    <Text style={styles.searchButton}>确定</Text>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius: 3,
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
    },
    searchInput: {
        flex: 1,
        paddingLeft: 10,
    },
    searchButton:{
        width: 60,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#4d8ee8',
        color: 'white',
        fontSize: 16,
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
