import React ,{ Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image ,FlatList, TouchableWithoutFeedback , AsyncStorage, Modal} from "react-native";

// 组件
import { Header } from "../components/header/header";
import { ItemLeft } from "./itemleft";
import { ItemRight } from "./itemright";
import { LoadingModal } from "../components/modal/modal";

// 服务
import { http } from "../../service/http";

export class ListPage extends Component {
    constructor(props){
        super(props);

        let paramIn = this.props.navigation.state.params

        this.state = {
            list: [],  //数据
            menu: paramIn.menu,  // 菜名
            pn: paramIn.pn,  // 起始下标
            rn: 8,  // 每次条数
        }
        
        // this.loadList( this.props.navigation.state.params );
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
                    onEndReachedThreshold={0.1} /**距离多远的时候再次加载 */
                    onEndReached={this.getMoreItem} 
                    refreshing={false}  
                    onRefresh={()=>{
                        console.log("loadMore");
                        
                    }}
                />

                <LoadingModal isShow />
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

    getMoreItem = (e)=>{
        this.setState((prev, e)=> ({pn: prev.pn+8}));

        this.loadList({
            pn: this.state.pn,
            rn: this.state.rn,
            menu: this.state.menu,
        });
    }

    loadList(params){
        

        // AsyncStorage.getItem("list", (err, data)=>{
        //     if(err){
        //         console.log("无内容, 开始 ajax");
                
                http(params).then((result) => {

                    this.setState((prev)=>({
                        list: prev.list.concat(result.data)
                    }))
                    console.log(result);
                    

                    // console.log(this.state.list);
                    

                    // AsyncStorage.setItem("list", JSON.stringify(result.data))
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

