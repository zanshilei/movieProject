import AppDispatcher from "../dispatcher/appDispatcher";
//找分发器,调用AppDispatcher
export default {
	setItem(text){
		console.log(text)
		AppDispatcher.dispatch({
			actionType:'SET_ITEM',
			text:text
		})
	}
}
