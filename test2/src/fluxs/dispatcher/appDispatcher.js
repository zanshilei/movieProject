import {Dispatcher} from "flux";
import tabBarStore from "../stores/tabBarStore"
let AppDispatcher=new Dispatcher();
//进行判断setItemHandler调用 到store里
AppDispatcher.register(action=>{
//	console.log(action)
	switch(action.actionType){
		case 'SET_ITEM':
			tabBarStore.setItemHandler(action.text)
		break;
		
	}
})
export default AppDispatcher;