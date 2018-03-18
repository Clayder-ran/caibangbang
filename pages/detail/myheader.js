import React, { Component } from "react";
import { StyleSheet, View, Text,   } from "react-native";


export class MyHeader extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const { goBack, state} = this.props.navigation;

        return (
            <View style={[styles.box, {position: 'absolute',top: 0,zIndex: 1}]} >
                <Text style={styles.text} onPress={()=>{
                    goBack(state.key);
                }}>返回</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 360,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    text: {
        width: 60,
        height: 50,
        textAlignVertical: 'center',
        textAlign: 'center',
        // borderWidth: 1,
    }
})