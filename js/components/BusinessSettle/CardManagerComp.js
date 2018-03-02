
import React, {Component, PropTypes} from 'react'

// import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/BusinessSettle/CardManager.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Link, browserHistory, History} from 'react-router'

export default class NewAccountComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  _changeGspan(e){
    // e.target.className = 
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
              <a href='#'>业务结算</a>
              <p>/</p>
              <a href='#'>出库费计算</a>
              <input type="radio" name='over' defaultChecked/><span>分零</span>
              <input type="radio" name='over'/><span>未完结</span>
              <ul>
                <li><a href='#'>实物查询</a></li>
                <li><a href='#'>换发实物</a></li>
                <li><a href='#'>打开电子秤</a></li>
                <li><a href='#'>退回</a></li>
                <li><a href='#'>提交</a></li>
                <li><a href='#'>删除</a></li>
                <li><a href='#'>刷新</a></li>
              </ul>
            </div>

            <div className='h'>出门证管理</div> 
            <div className='content-lll'>
              <label htmlFor='odd'></label> <input type="text" placeholder='点击搜索' id='odd'/> 
              <label htmlFor='owner'>打印份数</label> <input type="text" placeholder='点击搜索' id='owner'/> 
              <label htmlFor='wagon'>车号</label> <input type="text" placeholder='点击搜索' id='wagon'/> <br/>
              <label htmlFor='pname'>吊装时间</label> <input type="text" placeholder='点击搜索' id='pname'/>
              <label htmlFor='fct'>出门证号</label> <input type="text" placeholder='点击搜索' id='fct'/> <br/>
              
            </div>

            <div className='content-rr'>
              <p>车号</p>
              <p></p>
              <p>
                <span>车卡号</span>
                <span>单据号</span>
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>

            <div className='content-bbb'>
              <div className='b-ff'>
                  <p>
                    <span>发货单号</span>
                    <span>跟踪号</span>
                    <span>实发重量</span>
                    <span>含磅重量</span>
                    <span>厂家</span>
                    <span>品名</span>
                    <span>规格1</span>
                    <span>规格2</span>
                    <span>规格3</span>
                    <span>捆包号</span>
                    <span>磅次号</span>
                  </p>

                  <p>
                    <span>ha</span>
                    <span>1202</span>
                    <span>1222</span>
                    <span>50kg</span>
                    <span>50kg</span>
                    <span>0.55</span>
                    <span>1000￥</span>
                    <span>1000￥</span>
                    <span>1000￥</span>
                    <span>完结</span>
                    <span>张三</span>
                  </p>
              </div>

            </div>

            <div className='bbb'>
              <div className='bbb-box'>
                <span>收费方式</span><br/>
                <input type="radio" name='box' defaultChecked /><span>现结</span> <br/>
                <input type="radio" name='box' /><span>挂账</span>
              </div>
              <p><span>发货总量</span><input type="text"/></p>
              <p><span>其他费用</span><input type="text"/></p> <br/>
              <p><span>应收金额</span><input type="text"/></p>
              <p><span>找补金额</span><input type="text"/></p><br/>
              <p><span>实收金额</span><input type="text"/></p>
              <p><span>挂账单位</span><input className='inputLast' type="text"/></p>
            </div>
          </div>
        </div>
    )
  }
}
