let str:string='dsad'
let num:number=456
let bol:boolean=false
let n:null=null
let unde:undefined=undefined
let strIns:String=new String('465')
let strIns2:String=';999';
// n! as String as Number;
// 字面量类型
<number>unde!;
let numArr:number[]=[1,2,3]
let strArr:Array<number|string>=[1,2,3,'456']

enum STATE{
    'SUCCESS'=200,
    'ERROR'=100,
    'WARNING'=400
}
function fn(v:string|boolean):void{
    return undefined
}
// 无法执行完毕,或者用never检查逻辑漏洞
function ne(aaa:any,bbb:unknown):never{
    throw 123
    while(true){}
}
let obj={name:'3213'}
type keys= keyof objs
type objs=typeof obj
class ls{
    // public
    // static abstract
    // private
    // protected
}