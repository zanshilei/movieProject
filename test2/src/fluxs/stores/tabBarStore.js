import {EventEmitter} from 'events'
//emitter自动触发
//store村item设置读取
export default Object.assign({},EventEmitter.prototype,{
	item:'',
	getItem(){
		return this.item;
	},
	setItemHandler(text){
//		console.log(this.item);
		this.item=text;
//		console.log(this.item);
	}
})