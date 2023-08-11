function myFilter(arr,callback){
    let res = [];
    for(let i = 0;i<arr.length;i++){
        if(callback(arr[i], i , arr)){
            res.push(arr[i])
        }
    }
    return res
}
//--------------------------------------------------------------------------------------------------------------------

function myFind(arr,callback){
    for(let i = 0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            return arr[i]
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------

function myMap(arr,callback){
    let res = [];
    for(let i = 0;i<arr.length;i++){
        res.push(callback(arr[i],i,arr))
    }
    return res
}

//--------------------------------------------------------------------------------------------------------------------


function myFIndIndex(arr,callback){
    for(let i = 0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            return i
        }
    }
    return -1
}
