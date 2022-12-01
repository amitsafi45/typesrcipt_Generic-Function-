interface lengthy{
    length:number
}

function getCountAndDescribe<T extends lengthy>(element:T){
    let text='NO Element'

    if(element.length===1){
        text="got 1 element"

    }
    if(element.length>1){
        text="got"+element.length+"element"

    }
 return [element,text]   
}

const data=getCountAndDescribe([1,2,3,4])
console.log(data);
const data2=getCountAndDescribe(["amit","safi"])
console.log(data2);
