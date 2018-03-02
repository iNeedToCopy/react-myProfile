
import React, {Component, PropTypes} from 'react'

// import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/BusinessSettle/ChangeMethod.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'
import {Link, browserHistory, History} from 'react-router'

export default class ChangeMethodComp extends Component{
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

            <div className='h'>收费方式修改</div> 
            <div className='content-llll'>
              <p><span>装车清单号</span><input type="text"/></p>
              <p><span>挂账单位</span><input type="text"/></p>
            </div>
            
            
            <div className='lll-box'>
                <span>收费方式</span><br/>
                <input type="radio" name='box' defaultChecked /><span>现结</span> <br/>
                <input type="radio" name='box' /><span>挂账</span>
              </div>

            <div className='content-bbbb'>
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

          </div>
      </div>
    )
  }
}
