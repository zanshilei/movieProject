"use strict";
import React from "react";
import Carousel from "../component_dev/carousel/src/index";
import Scroller from "../component_dev/scroller/src/index";
class Recommend extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				recommendData: []
			}
		}
	//renderd后的周期函数；
	componentDidMount() {				
				this.setCarousel();
				console.log("fllf")		
			}
	setCarousel(){
			
			
	}
  render() {
  	return(  
  		<div className="recommend">
  		<Scroller >
						<Carousel>
						    
		  			   <li>1</li>
		  			   <li>2</li>
		  			   <li>3</li>
		  			</Carousel>	
			</Scroller>
  			
  		</div>
  	)
  }
}
export default Recommend;
