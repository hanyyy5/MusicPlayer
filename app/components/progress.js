import React from 'react'
import './progress.less'
//console.log(react.version);
let Progress=React.createClass({//输出当前秒数
 //Progress接收外界传入的参数，所以是props类型数据
    getDefaultProps(){
	   return {
		   barColor:"pink"
	   }
	},
    changeProgress(e){
		let progressBar=this.refs.progressBar;
		let progress=(e.clientX-progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
		console.log(progress);
		this.props.onProgressChange && this.props.onProgressChange(progress);
	},
	render(){
		return (
		  <div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
			 <div className="progress" style={{width:`${this.props.progress}%`,background:this.props.barColor}}></div>
		  </div>
		);
	}
});

export default Progress;