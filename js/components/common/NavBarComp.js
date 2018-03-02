/**
 * Created by Aaron on 2017/11/20.
 */
/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/Common/NavBar.scss'


const defaultCons = {
};
let defaultVars = {};
export default class NavBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
  }
  componentWillUpdate() {

  }

  componentDidUpdate() {
  }

  render() {
    const {title,name} = this.props.props.state
    return (
      <div className="navContainer">
        <div className="containTop">
          <div className="floatL topTitle">
            <span className="titleFont">{title}</span>
            <span>/</span>
            <span className="titleFont">{name}</span>
          </div>
        </div>
      </div>
    )
  }
}
