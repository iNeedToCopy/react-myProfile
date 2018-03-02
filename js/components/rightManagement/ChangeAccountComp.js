import React, {Component, PropTypes} from 'react'

import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/rightManagement/ChangeAccount.scss'
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
              <a href='#'>账页调整</a>
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
              <p>账页调整</p>
              <p>账页号 : <span>占位</span></p>
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
                <label htmlFor='votes'>已开票件数</label> <input type="text" placeholder='点击搜索' id='votes'/> 
                <label htmlFor='numbers'>已开票数量</label> <input type="text" placeholder='点击搜索' id='numbers'/> 
                <label htmlFor='standard'>已开票非标</label> <input type="text" placeholder='点击搜索' id='standard'/> 
                <label htmlFor='weight'>已开票重量</label> <input type="text" placeholder='点击搜索' id='weight'/> 
                <span>调账方式</span>
                  <input type="radio" name='checkRadio' value='' defaultChecked/><span>调整入账</span>
                  <input type="radio" name='checkRadio' value='' /><span>调整出库</span>
                  <input type="radio" name='checkRadio' value='' /><span>无</span>
              </div>

              <div className='bottom'>
                <label htmlFor='weight-before'>调帐前重量</label> <input type="text" placeholder='点击搜索' id='weight-before'/> 
                <label htmlFor='votes-before'>调帐前件数</label> <input type="text" placeholder='点击搜索' id='votes-before'/> 
                <label htmlFor='numbers-before'>调帐前数量</label> <input type="text" placeholder='点击搜索' id='numbers-before'/> 
                <label htmlFor='standard-before'>调帐前非标</label> <input type="text" placeholder='点击搜索' id='standard-before'/> <br/>
                <label htmlFor='weight-change'>调帐重量</label> <input type="text" placeholder='点击搜索' id='weight-change'/> 
                <label htmlFor='votes-change'>调帐件数</label> <input type="text" placeholder='点击搜索' id='votes-change'/> 
                <label htmlFor='numbers-change'>调帐数量</label> <input type="text" placeholder='点击搜索' id='numbers-change'/> 
                <label htmlFor='standard-change'>调帐非标</label> <input type="text" placeholder='点击搜索' id='standard-change'/> <br/>
                <label htmlFor='weight-after'>调帐后重量</label> <input type="text" placeholder='点击搜索' id='weight-after'/> 
                <label htmlFor='votes-after'>调帐后件数</label> <input type="text" placeholder='点击搜索' id='votes-after'/> 
                <label htmlFor='numbers-after'>调帐后数量</label> <input type="text" placeholder='点击搜索' id='numbers-after'/> 
                <label htmlFor='standard-after'>调帐后非标</label> <input type="text" placeholder='点击搜索' id='standard-after'/> 
              
              </div>

            </div>

            <div className='content-right'>
                <div className='checkBox'>
                  <p>查询</p>
                  <div>
                      <label htmlFor='product2'>客户</label> <input type="text" placeholder='点击搜索' id='product2'/> 
                  </div>
                  <div>
                    <label htmlFor='manufactor2'>账单号</label> <input type="text" placeholder='点击搜索' id='manufactor2'/> 
                  </div>
                  <div className='checkBox-btm'>
                    <div className='btm-title'>
                      <span>账单号</span><span>厂家</span><span>品名</span><span>规格1</span><span>规格2</span><span>规格3</span>
                    </div>
                  </div>
                </div>

            </div>

          </div>
        </div>
    )
  }
}
