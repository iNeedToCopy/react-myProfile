/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/Common/Header.scss'


const defaultCons = {
};
let defaultVars = {
};

export default class HeaderComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){
  }

  render(){
    return(
      <div className="headerContainer">
        <div className="headerFontDiv">
          <span className="headerSpan">工作台-金田储运有限公司</span>
        </div>
        <div className="headerLogin">
          <span className="headerSpan headerMargin">顾延枚</span>
          <span className="headerSpan headerMargin">个人中心</span>
          <span className="headerSpan">退出</span>
        </div>
      </div>
    )
  }
}

