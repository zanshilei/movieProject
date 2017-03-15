"use strict";
import React, { Component } from 'react';
import {Link} from "react-router";
import TabBarStore from '../fluxs/stores/tabBarStore'
import TabBarActions from '../fluxs/actions/tabBarActions';
//<span>{val.type==TabBarStore.getItem()?val.icon:val.iconLight}</span>
class Index extends React.Component {
	constructor(props){
		super(props);
		this.state={
			currentTab:"recommend"
		};
		this.tabar=[{
			title:"推荐",
			icon:"&#xe67a;",
			type:"recommend",
			iconLight:4
		},
		{
			title:"影片",
			icon:"&#xe621",
			type:"movie",
			iconLight:3
		},
		{
			title:"影院",
			icon:"&#xe67f;",
			type:"cinema",
			iconLight:2
		},
		{
			title:"我的",
			icon:"&#xe618;",
			type:"mine",
			iconLight:1
		}
		];

}
		setfooter(data){			
			var footerBar=data.map((val,index)=>{								
				return(
					<Link to={val.type}>
						<li className={val.type==TabBarStore.getItem()?"active":''}
						 onClick={TabBarActions.setItem.bind(this,val.type)}>
<i ></i>						
						  <span className="yo-ico" dangerouslySetInnerHTML={{__html: val.icon}} ></span>
						  <span >{val.title}</span>
						</li>
					</Link>
				);
			});
			return footerBar;
		}
		
  render() {
  	return(
  		<div className="m-index"> 		  
  		    <section>
  		  	   {this.props.children}
  		    </section>
  			<nav>
  				<ul>
             		{this.setfooter(this.tabar)}
  				</ul>
  			</nav>
  		</div>
  	)
  }
}
export default Index;
