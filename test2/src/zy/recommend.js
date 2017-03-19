"use strict";
import React from "react";
import $ from "jquery"
import Carousel from "../component_dev/carousel/src/";
import Scroller from "../component_dev/scroller/src/index";
import List from '../component_dev/List/src/';
import {Link} from "react-router";

class Recommend extends React.Component {
	constructor(props){
		super(props);
		this.state={
			items:[{}]
		}
		
	}
	width(){
		var $carousel=$(".yo-carousel");
		var $li=$(".cont li",$carousel);
		//var liwidth=$carousel.width();
		//console.log(liwidth)
		var width=$li.length*$carousel.width();	
		//console.log($li);
//		$li.each(function(){
//			$(this).css("background","red");
//		});
//			
		
		
		$(".cont",$carousel).css("width",width);
		
	}
	setNodes(url, callback) {
	    fetch(url)
	      .then(response=>response.json())
	      .then(res=>{
	        callback(res)
	      })
	}
    render() {   	  
        return (            
              <div className="recommend">
            	<List
	            	  ref="list"	
			          staticSection={
			            <Carousel>
			                <li className="item"><img className="img" src="./img/1.jpg" /></li>
			                <li className="item"><img className="img" src="./img/2.jpg" /></li>
			                <li className="item"><img className="img" src="./img/7.jpg" /></li>
			            </Carousel>
			          }
			          dataSource={this.state.items}
			          renderItem={
			            (item, index)=>{
			            	
			              if(item.id){			              	
			                return (
			                  <Link to={`/details/${item.id}`}>
			                    <div>
			                      <i><img src={item.img} /></i>
			                      <b>
			                        <span>{item.summary}</span>
			                        <span>{item.onlineTimeByIsOnlineMonthForApp}</span> 
			                      </b>
			                    </div>
			                  </Link>
			                )
			              }
			            }
			          }
					  usePullRefresh={true}
			          onRefresh={()=>{
			          
			            this.setNodes.call(this, './json/comments2.json', (data)=>{
			              this.setState({
			                items: data.concat(this.state.items)
			              })
			              this.refs.list.stopRefreshing(true)
			            })
			          }}
			
			          useLoadMore={true}
			          onLoad={()=>{
			            this.setNodes.call(this, './json/comments2.json', (data)=>{
			              this.setState({
			                items: this.state.items.concat(data)
			              })
			              this.refs.list.stopLoading(true)
			            })
			          }}
            	>
				   	<div className="items">
			            {this.state.items}
			        </div>
				</List>
            </div>
		            
            
        )
    }
   
    componentDidMount() {
//  			 this.width();
				 this.setNodes.call(this, './json/comments2.json', (data)=>{
			            this.setState({
			               items: data
			    		});
						//dom渲染完成；
						console.log("fllf")					
				});
	}
}
export default Recommend;
