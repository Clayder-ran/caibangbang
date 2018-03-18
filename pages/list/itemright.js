import React,{ Component } from "react";
import { StyleSheet, View, Text, } from "react-native";



export class ItemRight extends Component {
    constructor(props){
        super(props);

    }

    render(){
        let tags = this.props.item.tags.split(";");

        tags = tags.map((val,i)=>{
            if(i < 4){
                return (<Text key={i} style={styles.tag}>{val}</Text>)
            }
        });
        return (
            <View style={styles.sideBox}>
                <Text style={styles.title}>{this.props.item.title}</Text>
                <View style={styles.tagBox}><Text style={styles.smallTitle}>标签: </Text>{ tags }</View>
                <View style={styles.ingredients}><Text style={styles.smallTitle}>配料: { this.props.item.ingredients }</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sideBox: {
        // flex: 1,
        padding: 8,
        paddingLeft: 0,
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 14,
        height: 20,
        lineHeight: 20,
        // backgroundColor: 'red',
        // marginBottom: 5,
    },
    tagBox: {
        flexDirection: 'row',
    },
    smallTitle: {
        fontSize: 12,
    },
    tag: {
        fontSize: 11,
        color: 'white',
        backgroundColor: 'gray',
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7,
        marginRight: 5,
        borderRadius: 10,
    },
    ingredients: {

    }
})