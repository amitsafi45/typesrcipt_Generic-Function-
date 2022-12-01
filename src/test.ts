function extractFromObject<T extends object,U extends keyof T>(object:T,key:U){
            
    return object[key]
}
 console.log(extractFromObject({name:"amit",age:20},"age"))