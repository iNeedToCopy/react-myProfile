/**
 * Created by lgm on 2017/11/29.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/Common/Input.scss'

const test = ''
export default class InputComp extends Component{
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
    const { key,label,labelStyle,selectStyle,options } = this.props.props;
    // console.log(options)
    return(
      <div style={{display:'inline-block'}}>
        <label htmlFor={key} style={labelStyle} className='defaultLabel'>{label||test}</label>
        <select defaultValue='0' id={key} style={selectStyle} className='defaultSelect'>
          {options.map((item,i)=>{
            return <option key={i} value={i}>{item}</option>         
          })}
        </select>
      </div>                                             
    )
  }
}

