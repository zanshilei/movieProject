"use strict";
import React from "react"
import ReactDOM from "react-dom";
import {Router,Route,hashHistory,IndexRoute,Redirect} from "react-router";
import Movie from './zy/movie';
import Index from './zy/index';
import Cinema from './zy/cinema';
import Mine from './zy/mine';
import Recommend from './zy/recommend';
import './styles/zy.scss';
import TabBarActions from './fluxs/actions/tabBarActions';
import TabBarStore from './fluxs/stores/tabBarStore'
let onEnterHandler=(type)=>{
	//let x=`abc`;
	//console.log(type)
	TabBarActions.setItem(type);
	//console.log(`${x}`+type)
}
let onLiveHandler=(type)=>{
	let x=`123`;
	
	//console.log(TabBarActions.get)
	//console.log(`${x}`)
}
ReactDOM.render((	
	<Router history={hashHistory}>	          
		<Route path='/' component={Index}>		
			<IndexRoute component={Recommend}></IndexRoute>	
			<Route path='recommend' onLeave={onLiveHandler} onEnter={onEnterHandler.bind(this,'recommend')} component={Recommend}>						    				    
			</Route>
			<Route path='movie' component={Movie} onEnter={onEnterHandler.bind(this,'movie')}>	
			</Route>
			<Route path='mine' component={Mine} onEnter={onEnterHandler.bind(this,'mine')}>
			</Route>
			<Route path='cinema1234' component={Cinema} onEnter={onEnterHandler.bind(this,'cinema')}>
			</Route>	
		</Route>		
	</Router>
	),
	document.getElementById("app")
)

