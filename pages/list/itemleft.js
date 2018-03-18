import React,{ Component } from "react";
import { StyleSheet, View, Image} from "react-native";

export class ItemLeft extends Component {
    constructor(props){
        super(props);

        
    }

    render(){
        return (
            <View style={styles.sideBox}>
                <Image style={styles.img} source={{uri: this.props.item.albums['0'] }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sideBox: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    img: {
        aspectRatio: 1,
        height: 75,
        borderRadius: 3,
    }
})