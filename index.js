import React, { Component } from "react";
import { AppRegistry, StyleSheet ,Text } from 'react-native';
import App from './App';
import { StackNavigator, NavigationActions } from "react-navigation";


// 页面
import { ListPage } from "./pages/list/listpage";
import { DetailPage } from "./pages/detail/detail";

let styles = StyleSheet.create({
    css: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: 'red',
    }
})

let pages = StackNavigator({
    MainPage: {
        screen: App,
        navigationOptions: {
            header: null,
        }
    },
    ListPage: {
        screen: ListPage,
        // navigationOptions: ({navigation})=>({
        //     title: '首页',
        //     headerTitleStyle: styles.css,
        //     headerLeft: (<Text>左侧</Text>),
        //     headerRight: (<Text>右侧</Text>),
        //     headerTintColor: 'black',
        // })
        navigationOptions: {
            header: null,
            title: "列表"
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null,
        }
    }

}, {
    initialRouteName: "MainPage"
});



AppRegistry.registerComponent('cooking', () => pages);
