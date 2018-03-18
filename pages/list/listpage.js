import React ,{ Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image ,FlatList, TouchableWithoutFeedback , AsyncStorage} from "react-native";

// 组件
import { Header } from "../components/header/header";
import { ItemLeft } from "./itemleft";
import { ItemRight } from "./itemright";

// 服务
import { http } from "../../service/http";

export class ListPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
        }
        
        this.loadList( this.props.navigation.state.params );
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Header centerText={'菜单列表'} navigation={this.props.navigation} />
                {/* 列表 */}
                <FlatList 
                    data={this.state.list} 
                    renderItem={this.itemHTML} 
                    keyExtractor={(item, index)=> String(index)} 
                    ItemSeparatorComponent={()=>(<View style={{height:10,backgroundColor:'white'}}></View>)} 
                    ListHeaderComponent={()=>(<View style={{height: 10, backgroundColor: 'white'}}></View>)} 
                    ListFooterComponent={()=>(<View style={{height: 10, backgroundColor: 'white'}}></View>)} 
                    ListEmptyComponent={()=>(<Text style={{fontSize: 16}}> Sorry, 没有内容! </Text>)} 
                    onEndReachedThreshold={0.4} /**距离多远的时候再次加载 */
                />
            </View>
        )
    }

    itemHTML = ({item, index})=>{
        const {navigate} = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={()=>{ navigate('DetailPage', this.state.list[index]) }}>
                <View style={styles.itemBox}>
                    <ItemLeft style={styles.itemLeft} item={item}/>
                    <ItemRight style={styles.itemRight} item={item}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    loadList(params){

        // AsyncStorage.getItem("list", (err, data)=>{
        //     if(err){
        //         console.log("无内容, 开始 ajax");
                
                true && http(params).then((result) => {
                    // 得到数据并赋值
                    this.setState({
                        list: result.data
                    });

                    AsyncStorage.setItem("list", JSON.stringify(result.data))
                })

            // }else{

            //     // 得到数据并赋值
            //     this.setState({
            //         list: JSON.parse(data)
            //     });

            //     console.log(JSON.parse(data));
            // }
            
        // })

        
    }

}


const styles = StyleSheet.create({
    itemBox: {
        flexDirection: 'row',
    },
    itemLeft: {
        flex: 1,
    },
    itemRight: {
        flex: 1,
    }
});

