import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/BillOfLadingNotice.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置']
};
const defaultVars = {number:[[500,'和信'],[500,'和信'],[500,'和信'],[500,'和信'],[500,'和信'],[500,'和信'],[500,'和信'],[500,'和信'],
  [500,'和信'],[500,'和信'],[500,'和信'],[500,'和信']]};
export default class BillOfLadingNoticeComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date:new Date().toLocaleString()
    };
  }
  render(){
    return(
      <div className="container-page">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="main-container">
          <div className="mainTitle">
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">提单预告</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="rightC">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                <input type="radio"/><p>提单号</p>
                <input type="radio" className="marginLeft"/><p>车号</p>
              </div>
              <div className="right-bar-two">
                <table className="table">
                  <thead>
                  <tr className="table-h bgC">
                    <td className="tdOne">提货单号</td>
                    <td>客户</td>
                  </tr>
                  </thead>
                  <tbody>
                  {defaultVars.number.map((a,i)=>{
                    return <tr key={i} className="table-h">{a.map((b,index)=>{
                      return <td key={index}>{b}</td>
                    })}</tr>
                  })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="ReleaseCar">
            <h5 className="main-h5">提单预告</h5>
          </div>
          <div className="tiDan">
            <label htmlFor="" ><p className="notice-key">提&nbsp;&nbsp;单&nbsp;&nbsp;号</p><input type="text" placeholder="点击搜索"/></label>
            <label htmlFor=""><p className="notice-key margin-left">货主名称</p><input type="text" placeholder="点击搜索"/></label>
            <label htmlFor=""><p className="notice-key margin-left">车&nbsp;&nbsp;号&nbsp;&nbsp;1</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key">车&nbsp;&nbsp;号&nbsp;&nbsp;2</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key margin-left">车&nbsp;&nbsp;号&nbsp;&nbsp;3</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key margin-left">车&nbsp;&nbsp;号&nbsp;&nbsp;4</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key">车&nbsp;&nbsp;号&nbsp;&nbsp;5</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key margin-left">车&nbsp;&nbsp;号&nbsp;&nbsp;6</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
            <label htmlFor=""><p className="notice-key margin-left">车&nbsp;&nbsp;号&nbsp;&nbsp;7</p><select>
              <option value ="volvo">点击搜索</option>
              <option value ="saab"> </option>
              <option value="opel"> </option>
              <option value="audi"> </option>
            </select></label>
              <p className="time">编辑时间:&nbsp;&nbsp;{this.state.date}</p>
          </div>
        </div>

      </div>
    )
  }
}
