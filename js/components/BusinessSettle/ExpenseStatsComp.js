
import React, {Component, PropTypes} from 'react'

import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/BusinessSettle/ExpenseStats.scss'
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

            <div className='h'>出门证费用统计</div> 
            <div className='content-ll'>
              <label htmlFor='odd'>装车清单</label> <input type="text" placeholder='点击搜索' id='odd'/> 
              <label htmlFor='owner'>收费人</label> <input type="text" placeholder='点击搜索' id='owner'/> 
              <label htmlFor='wagon'>交账人</label> <input type="text" placeholder='点击搜索' id='wagon'/> <br/>
              <label htmlFor='pname'>卡号</label> <input type="text" placeholder='点击搜索' id='pname'/>
              <label htmlFor='fct'>车号</label> <input type="text" placeholder='点击搜索' id='fct'/>
              <label htmlFor='size'>状态</label> <input type="text" placeholder='点击搜索' id='size'/><br/>
              <a href="#">结算</a>
              <a href="#">全部结算</a>
              <a href="#">结算修改</a>
              <a href="#">付款方式修改</a>       
              <a href="#">备注修改</a>
            </div>

            <div className='content-c'>
              <input type="radio" name='timer' defaultChecked /><span>收费时间</span><br/>
              <input type="radio" name='timer'/><span>交账时间</span><br/>
              <input type="radio" name='timer'/><span>财结时间</span><br/>
            </div>

            <div className='content-r'>
              <span>起始时间</span>
              <input type="text" id='date' placeholder='年/月/日' /><span className='glyphicon glyphicon-triangle-bottom gspan' onClick={this._changeGspan.bind(this)} ></span>
              <input type="text" id='hour' placeholder='0:00:00' />
                <span className='glyphicon glyphicon-triangle-top tspan'  ></span> <br/>
                <span className='glyphicon glyphicon-triangle-bottom bspan'  ></span> <br/>
              
              <span>结束时间</span>
              <input type="text" id='date' placeholder='年/月/日' /><span className='glyphicon glyphicon-triangle-bottom ggspan' onClick={this._changeGspan.bind(this)} ></span>
              <input type="text" id='hour' placeholder='0:00:00' />
                <span className='glyphicon glyphicon-triangle-top ttspan'  ></span> <br/>
                <span className='glyphicon glyphicon-triangle-bottom bbspan'  ></span>
            </div>

            <div className='content-bb'>
              <div className='b-ff'>
                  <p>
                    <span>装车清单</span>
                    <span>车牌号</span>
                    <span>状态</span>
                    <span>收费重量</span>
                    <span>费率</span>
                    <span>应收金额</span>
                    <span>实收金额</span>
                    <span>找补金额</span>
                    <span>结算状态</span>
                    <span>交账人</span>
                    <span>交账时间</span>
                    <span>交账状态</span>
                    <span>财结人</span>
                    <span>财结时间</span>
                    <span>财结状态</span>
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
                    <span>12.20</span>
                    <span>李四</span>
                    <span>完成</span>
                    <span>1.11</span>
                  </p>
              </div>

              <div className='b-ff'>
                  <p>
                    <span>收费人</span>
                    <span>收费时间</span>
                    <span>收费方式</span>
                    <span>实发时间</span>
                    <span>等待时间</span>
                    <span>进库时间</span>
                    <span>结费时间</span>
                    <span>作业时间</span>
                    <span>出库时间</span>
                    <span>停留时间</span>
                    <span>发卡人</span>
                    <span>找补金额</span>
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
                    <span>12.20</span>
                  </p>
              </div>

              <div className='b-ff'>
                  <p>
                    <span>实发数量</span>
                    <span>实发非标</span>
                    <span>套账编号</span>
                    <span>开单时间</span>
                    <span>开单人</span>
                    <span>实发时间</span>
                    
                  </p>

                  <p>
                    <span>ha</span>
                    <span>1202</span>
                    <span>1222</span>
                    <span>50kg</span>
                    <span>50kg</span>
                    <span>0.55</span>
                    
                  </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
