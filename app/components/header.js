import React from 'react'
import './header.less'
//console.log(react.version);
let Header=React.createClass({
	render(){
		return (
		  <div className="components-header row">
		     <img src="/static/images/logo.png" width="40" alt="" className="-col-auto"/>
			 <h1 className="caption">React music player</h1>
		  </div>
		);
	}
});

export default Header;