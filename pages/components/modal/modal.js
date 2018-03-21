import React, { Component } from "react";
import { Modal, StyleSheet, View,Text } from "react-native";


export class LoadingModal extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <View>
                <Modal style={modalStyles.box} 
                    animationType='fade'           // 从底部滑入
                    transparent={false}             // 不透明
                    visible={true}    // 根据isModal决定是否显示
                    onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                >
                    <Text style={modalStyles.box}>我是 modal </Text>
                    <Text onPress={this.hideModal}>关闭</Text>
                </Modal>
            </View>
        )
    }

    onRequestClose() {
        this.setState({
            isSHow:false,
        });
    }

    // 隐藏 modal
    hideModal(){
        console.log(this.props.setModalState);
        
        // this.props.setModalState(false);
    }
}


const modalStyles = StyleSheet.create({
    box: {
        flex: 1,
        borderWidth: 2,
        margin: 10,
    }
})