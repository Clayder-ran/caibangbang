import React, { Component } from "react";
import { Modal, StyleSheet, View,Text } from "react-native";


export class LoadingModal extends Component {
    constructor(props){
        super(props);


        this.state = {
            isSHow: false,
        }
    }

    render(){
        return (
            <View>
                <Modal 
                    animationType='fade'           // 从底部滑入
                    transparent={true}             // 不透明
                    visible={this.state.isSHow}    // 根据isModal决定是否显示
                    onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                >
                    <Text>我是 modal </Text>

                </Modal>
            </View>
        )
    }

    onRequestClose() {
        this.setState({
            isSHow:false,
        });
    }
}