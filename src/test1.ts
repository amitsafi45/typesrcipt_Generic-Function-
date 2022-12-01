// class DataStorage{
//     public data:string[]=[];
    
//     addItem(item:string){
//         this.data.push(item)
//     }
//     removeItem(item:string){
//         this.data.splice(this.data.indexOf(item),1)
//     }
//     getItem(){
//         return[...this.data]
//     }
// }

class DataStorage<T extends string |number|boolean>{
    public data:T[]=[];
    
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }
    getItem(){
        return[...this.data]
    }
}
const stringStorage=new DataStorage<string>()
stringStorage.addItem("shoe");
stringStorage.addItem('paint')
stringStorage.removeItem('shoe')
console.log(stringStorage.getItem());


const numberStorage=new DataStorage<number>()
numberStorage.addItem(1);
numberStorage.addItem(2)
numberStorage.removeItem(1)
console.log(numberStorage.getItem());

// const objectStorage=new DataStorage<object>()
// objectStorage.addItem({name:"amit"});
// objectStorage.addItem({age:20})
// objectStorage.removeItem({name:"amit"})
// console.log(objectStorage.getItem());
