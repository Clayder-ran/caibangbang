export function http(params){

    return fetch("http://apis.juhe.cn/cook/query?key=5126ce764903b1ae6a53983fd50e3a13"+joinUrls(params))
    .then((response)=>(response.json()))
    .then((result)=>{
        // 判断是否成功
        if(result.resultcode == '200'){
            return result.result
        }else{
            alert("resultcode: "+ result.resultcode);
        }
    });

    
    
}

// 拼接字符串
function joinUrls(params){
    let keys = Object.keys(params);
    
    let url = "";
    for(let key of keys){
        let a = "&"+key+"="+params[key];
        url = url+a ;
    }

    return url;
}