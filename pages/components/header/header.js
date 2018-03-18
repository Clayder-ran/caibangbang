import React, { Component } from "react";
import { StyleSheet, View, Text, Button ,TouchableNativeFeedback, } from "react-native";
import { NavigationActions } from "react-navigation";


export class Header extends Component {
    constructor(
        props
    ){
        super(props);

    }

    render(){
        // 读取返回函数; 返回上一页:goBack( 本页的key );
        const { goBack , state } = this.props.navigation;

        return (
            <View style={[styles.headerBox, {backgroundColor: this.props.backgroundColor || '#4d8ee8'}]}>
                {/* 左按钮 */}
                <Text onPress={()=>{ goBack(state.key)}} style={[styles.headLeft, styles.headerBothSide, {color: this.props.color||'white'}]}>
                    {this.props.leftText || '返回'}
                </Text>
                
                {/* 中标题 */}
                <Text style={[styles.headCenter, {color: this.props.color||'white'}]}> {this.props.centerText || ''} </Text>
                
                {/* 右按钮 */}
                <TouchableNativeFeedback>
                    <Text style={[styles.headRight, styles.headerBothSide, {color: this.props.color||'white'}]}> {this.props.rightText || ''} </Text>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        elevation: 4,
        borderWidth: 0,
    },
    headerBothSide: {
        height: 56,
        minWidth: 60,
        lineHeight: 56,
        position: 'absolute',
    },
    headLeft: {
        left: 0,
        paddingLeft: 10,
    },
    headCenter: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'normal',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    headRight: {
        right: 0,
        paddingRight: 10,
    }
})