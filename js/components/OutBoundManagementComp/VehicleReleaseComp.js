import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/VehicleRelease.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置'],
  titleA:['车号','时间']
};
const defaultVars = {contentA:[['晋AYH98','2013/11/23      9:24:16'],['晋AYH98','2013/11/23      9:24:16'],
  ['晋AYH98','2013/11/23      9:24:16'],['晋AYH98','2013/11/23      9:24:16'],
  ['晋AYH98','2013/11/23      9:24:16'],['晋AYH98','2013/11/23      9:24:16'],
  ['晋AYH98','2013/11/23      9:24:16'],['晋AYH98','2013/11/23      9:24:16'],
  ['晋AYH98','2013/11/23      9:24:16'],['晋AYH98','2013/11/23      9:24:16'],
  ['晋AYH98','2013/11/23      9:24:16']]};
export default class VehicleReleaseComp extends Component{
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
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">放行车辆</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="rightB">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                <input type="text" placeholder="点击搜索"/>
              </div>
              <div className="right-bar-two">
                <table className="table">
                  <thead>
                  <tr className="table-h bgC">
                    {defaultCons.titleA.map((item,i)=>{
                      return <th key={i}>{item}</th>
                    })}
                  </tr>
                  </thead>
                  <tbody>
                  {defaultVars.contentA.map((a,i)=>{
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
            <h5 className="main-h5">放行车辆</h5>
          </div>
          <div className="searchCar">
            <div className="carOne">
              <p>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</p>
              <input type="text" placeholder="点击搜索"/>
            </div>
            <div className="carTwo">
              <p className="p1">编辑时间:</p>
              <p>2013/11/12      16:15:56</p>
            </div>

          </div>
        </div>

      </div>
    )
  }
}
