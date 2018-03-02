import React, {Component, PropTypes} from 'react'

import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/rightManagement/NewAccount.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Link, browserHistory, History} from 'react-router'


export default class NewAccountComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className='container-all'>
        <HeaderComp/>
        <div style={{float:'left'}}>
          <SideMenuComp/>
        </div>
          <div className='content'>

            <div className='content-title'>
              <a href='#'>货权管理</a>
              <p>/</p>
              <a href='#'>新建账页</a>
              <ul>
                <li><a href='#'>新增</a></li>
                <li><a href='#'>修改</a></li>
                <li><a href='#'>删除</a></li>
                <li><a href='#'>退回</a></li>
                <li><a href='#'>撤销</a></li>
                <li><a href='#'>保存</a></li>
                <li><a href='#'>刷新</a></li>
                <li><a href='#'>查询</a></li>
                <li><a href='#'>打印</a></li>
                <li><a href='#'>导出</a></li>
                <li><a href='#'>设置 </a></li>
              </ul>
            </div>

            <div className='content-left'>
              <p>新建账页</p>
              <label htmlFor='shipper'>货主名称</label> <input type="text" placeholder='点击搜索' id='shipper'/>
              
              <div className='input-box'>
                <label htmlFor='factor'>生产厂家</label> <input type="text" placeholder='点击搜索' id='factor'/>
                <label htmlFor='product'>品名</label> <input type="text" placeholder='点击搜索' id='product'/>
                <label htmlFor='specifications'>规格</label> <input type="text" placeholder='点击搜索' id='specifications'/> <input type="text" id='spe1' placeholder='点击搜索'/><input type="text" id='spe2' placeholder='点击搜索'/>
                <label htmlFor='material'>材质</label> <input type="text" placeholder='点击搜索' id='material'/> 
                <label htmlFor='acceptance'>验收鉴定</label> <input type="text" placeholder='点击搜索' id='acceptance'/> 
                <label htmlFor='management'>管理方式</label> <input type="text" placeholder='点击搜索' id='management'/> 
                <label htmlFor='metering'>计量方式</label> <input type="text" placeholder='点击搜索' id='metering'/> 
                <label htmlFor='technology'>工艺</label> <input type="text" placeholder='点击搜索' id='technology'/> 
                <label htmlFor='account'>套账</label> <input type="text" placeholder='点击搜索' id='account'/> 
                <label htmlFor='controlID'>控制ID</label> <input type="text" placeholder='点击搜索' id='controlID'/> 
                <label htmlFor='remark'>备注</label> <input type="text" placeholder='点击搜索' id='remark'/> 
              </div>

              <div className='bottom'>
                  <div className='bottom-title'><span>账单号</span><span>套账号</span><span>客户名称</span></div>
                  <div className='bottom-content'>
                    <span>236</span>
                    <span>默认</span>
                    <span>重庆科通简直材料有限公司</span>
                    <span>无</span>
                  </div>
              </div>

            </div>

            <div className='content-right'>
                <div className='checkBox'>
                  <p>查询</p>
                  <div>
                      <label htmlFor='product3'>品名</label> <input type="text" placeholder='点击搜索' id='product3'/> 
                  </div>
                  <div>
                    <label htmlFor='manufactor'>生产厂家</label> <input type="text" placeholder='点击搜索' id='manufactor'/> 
                  </div>
                  <div>
                  <label htmlFor='specifications2'>规格</label> <input type="text" placeholder='点击搜索' id='specifications2'/> <input type="text" id='spe1' placeholder='点击搜索'/><input type="text" id='spe2' placeholder='点击搜索'/>
                  </div>
                  <div className='checkBox-btm'>
                    <div className='btm-title'><span>账单号</span><span>套账号</span><span>客户名称</span></div>
                    <div className='btm-content'>
                      <span>236</span>
                      <span>默认</span>
                      <span>重庆科通简直材料有限公司</span>
                      <span>无</span>
                  </div>
                  </div>
                </div>

            </div>

          </div>
        </div>
    )
  }
}
