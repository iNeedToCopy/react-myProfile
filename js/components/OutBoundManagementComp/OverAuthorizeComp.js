import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/OutBoundManagement/OverAuthorize.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {navigation:['新增','修改','删除','退回','撤销','保存','刷新','生产','打印','导出','设置'],
            tableTitle:['账页号', '套账号','客户名称','品名','重量单位','到达件数','包装单位','交接重量','验收鉴定'],
            };
const defaultVars = {tableContent:[[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','',''],[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','','']
  ,[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','',''],[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','','']
  ,[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','',''],[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','','']
  ,[258,'默认','重庆旭业物资有限公司','螺纹钢','','','','','']],
  customName:[[1,'重庆科通建筑材料有限公司'],[1,'重庆科通建筑材料有限公司'],[1,'重庆科通建筑材料有限公司'],
    [1,'重庆科通建筑材料有限公司'],[1,'重庆科通建筑材料有限公司'],[1,'重庆科通建筑材料有限公司']]};
export default class OverAuthorizeComp extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className="container-page">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="main-container">
          <div className="main-title">
            <p className="title-p">出库管理</p><p  className="title-xie">/</p><p className="title-p">超提授权</p>
            <ul className="list-unstyled title-bar">{
              defaultCons.navigation.map((item,index)=>{
                return <li key={index} className="title-bar-item">{item}</li>
              })
            }
            </ul>
          </div>
          <div className="right-bar">
            <div className="right-bar-one">
              <p className="right-bar-one-title">查询</p>
              <div className="right-bar-one-content">
                <form action="">
                  <label htmlFor="" className="label-item">
                    品名 <input type="text"/>
                  </label>
                  <label htmlFor="" className="label-item">
                    厂家 <input type="text"/>
                  </label>
                  <label htmlFor="" className="label-item">
                    规格 <input type="text"/>
                  </label>
                </form>
              </div>
            </div>
            <div className="right-bar-two">
              <table className="table table-word">
              <thead>
                <tr className="table-head">
                  <th>客户名称</th>
                  <th>9432条记录</th>
                </tr>
              </thead>
                <tbody>
                {defaultVars.customName.map((a,index)=>{
                  return <tr key={index} className="table-item">{a.map((b,i)=>{
                    return <td key={i}>{b}</td>
                  })}</tr>
                })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="owner-name-1">
            <h5 className="main-h5">超提授权</h5>
            <form action="" className="form-main">
              <label className="form-name">货主名称<input type="text" placeholder="点击搜索"/></label>
              <p className="form-number-title">交接单号：</p>
              <p className="form-number">未生成</p>
            </form>
          </div>
          <div className="main-authorize">
            <form action="" className="form-border">
              <label htmlFor="" ><p className="authorize-key">生产厂家</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">品&nbsp;&nbsp;&nbsp;&nbsp;名</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">规&nbsp;&nbsp;&nbsp;&nbsp;格</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor="" ><p className="authorize-key">材&nbsp;&nbsp;&nbsp;&nbsp;质</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key margin-left">验收鉴定</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">管理方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor="" ><p className="authorize-key">计量方式</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">工&nbsp;&nbsp;&nbsp;&nbsp;艺</p><select>
                <option value ="volvo">点击搜索</option>
                <option value ="saab"> </option>
                <option value="opel"> </option>
                <option value="audi"> </option>
              </select></label>
              <label htmlFor=""><p className="authorize-key margin-left">套&nbsp;&nbsp;&nbsp;&nbsp;账</p><input type="text" placeholder="点击搜索"/></label>
              <label htmlFor=""><p className="authorize-key">备&nbsp;&nbsp;&nbsp;&nbsp;注</p><input type="text" className="beiZhu"/></label>
            </form>
          </div>
          <div className="authorize-control">
            <form action="">
              <label htmlFor=""><p>授权量</p><input type="text" className="inputOne"/></label>
              <label htmlFor=""><p className="pJuLi">已授权量</p><input type="text" className="inputTwo"/></label>
            </form>
            <div className="control-single">
              <p className="control-title">授权控制：</p>
              <form action="" className="control-form">
                <label htmlFor="" className="control-radio">
                  <input type="radio" value="单次"/>单次
                </label>
                <label htmlFor=""  className="control-radio">
                  <input type="radio" value="量完"/>量完
                </label>
              </form>
            </div>
          </div>
          <div className="over-list">
            <table className="table table-font">
              <thead>
                <tr className="active table-head">
                  {defaultCons.tableTitle.map((item,index)=>{
                    return <th key={index}>{item}</th>
                  })}
                </tr>
              </thead>
              <tbody>
              {defaultVars.tableContent.map((a,index)=>{
                return <tr key={index} className="table-item">{a.map((b,i)=>{
                  return <td key={i}>{b}</td>
                })}</tr>
                  })}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    )
  }
}
