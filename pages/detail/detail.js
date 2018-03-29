import React, { Component } from "react";
import { StyleSheet, ScrollView, View, TextInput, Text, Image , SectionList, FlatList } from "react-native";

// 组件
import { MyHeader } from "./myheader";

export class DetailPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: this.props.navigation.state.params
        }
    }

    render(){
        return (
            <View>
                <MyHeader navigation={this.props.navigation} style={{backgroundColor: 'rgba(255,255,255,0.1)',opacity: 0}}/>
                <ScrollView style={{zIndex: 0}}>

                    {/* 第一部分 */}
                    <Image style={styles.imgs} source={{uri: this.state.data.albums['0']}}/>
                    <Title name={this.state.data.title} intro={this.state.data.imtro} />

                    {/* 第二部分 */}
                    <Burden data={this.state.data.burden}/>

                    {/* 第三部分 */}
                    <FlatList
                        data={this.state.data.steps} 
                        renderItem={this._item} 
                        keyExtractor={(item, index)=> String(index) } 
                        ItemSeparatorComponent={this._separator} 
                        ListHeaderComponent={this._header} 
                        ListFooterComponent={this._separator} 
                        getItemLayout={(data,index)=>({length:20,offset:100*index,index})} 
                    />
                </ScrollView>
            </View>
        );
    }
    // 列表单项内容
    _item = ({item, index})=>{
        let step = item.step;
        step = step.split('.');
        step.shift();
        step = step.join('');

        return (
            <View style={styles.stepBox}>
                <Text style={styles.stepTitle}>步骤{index+1}</Text>
                <Image style={styles.stepImg} source={{uri: item.img}}/>
                <Text style={styles.stepText}> {step} </Text>
            </View>
        )
    }
    // 分割线
    _separator = (item,index)=>{
        return (<View style={{height: 2, backgroundColor: 'lightgray', }}></View>)
    }
    // 头部标题
    _header = ({item, index})=>{
        return (
            <View style={styles.stepHeader}>
                <Text style={styles.stepHeaderText}>详细步骤( 共{this.state.data.steps.length}步 )</Text>
            </View>
        );
    }
}
// 大图+ 第三部分: 样式
const styles = StyleSheet.create({
    imgs: {
        width: 360,
        aspectRatio: 1,
    },
    stepHeader: {
        height: 40, 
        backgroundColor: 'lightgray',
    },
    stepHeaderText: {
        flex: 1,
        paddingLeft: 10,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },
    stepBox: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    stepTitle: {
        
        fontSize: 14,
        color: 'black',
        paddingBottom: 5,
        paddingTop: 5,
    },
    stepImg: {
        width: 200,
        height: 160,
        display: 'flex',
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    stepText: {
        padding: 10,
        paddingTop: 2,
        textAlign: 'center'
    }
})

// 第一部分: 名字+介绍
class Title extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={titleStyles.box}>
                <Text style={titleStyles.name}>{ this.props.name }</Text>
                <Text style={titleStyles.intro} multiline={true} numberOfLines={3}>背景:  { this.props.intro }</Text>
            </View>
        );
    }
}
// 第一部分: 名字+介绍:样式
const titleStyles = StyleSheet.create({
    box: {
        // height: 80,
        // borderWidth: 1,
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 80,
        lineHeight: 80,
    },
    intro: {
        color: 'gray',
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'left',
    }
});

// 第二部分: 配料表
class Burden extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let burdenArr = this.props.data.split(";");
        
        return (
            <View>
                <FlatList 
                    data={ burdenArr } 
                    renderItem={this._item} 
                    // 配料表标题
                    ListHeaderComponent={({item,index})=>{
                        return (
                            <View style={styles.stepHeader}>
                                <Text style={styles.stepHeaderText}>配料表</Text>
                            </View>
                        )
                    }} 
                    keyExtractor={({item, index})=> String(index)}
                />
            </View>
        );
    }

    _item = ({item, index})=>{
        let itemArr = item.split(",");

        return (
            <View style={burdenStyles.burdenBox}>
                <Text style={burdenStyles.burdenLeft}>{itemArr[0]}</Text>
                <Text style={burdenStyles.burdenRight}>{itemArr[1]}</Text>
            </View>
        );
    }
}
// 第二部分: 配料表:样式
const burdenStyles = StyleSheet.create({
    burdenBox: {
        flexDirection: 'row',
        height: 30,
    },
    burdenLeft: {
        flex: 1,
        textAlignVertical: 'center',
        color: 'black',
        paddingLeft: 15,
    },
    burdenRight: {
        flex: 1,
        textAlignVertical: 'center',
        color: 'black',
    }
})


const newData="这是新数据";