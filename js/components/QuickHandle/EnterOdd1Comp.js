import React, {Component, PropTypes} from 'react'

import '../../../style/Common/css/bootstrap.min.css'

import '../../../style/QuickHandle/EnterOdd1.scss'

import '../../images/QuickHandle/number.png'
import '../../images/QuickHandle/step.png'

import {Link, browserHistory, History} from 'react-router'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'
import InputComp from '../common/InputComp'
import { setInterval } from 'core-js/library/web/timers';


export default class EnterOdd1Comp extends Component{
  constructor(props){
    super(props);
    this.state = {
      clock:new Date()
    }
  }

  _changeGspan(e){
    // e.target.className =
  }

  componentWillMount(){
    this.timer = setInterval(() => {
      this.setState({
        clock:new Date()
      })
    }, 1000);
    
  }
  //开始调度验收
  goDispatch () {

    if (true) {
      //隐藏开始调度按钮
      $('.start-lgm')[0].className = 'hide'
      //显示第3步
      $('.second')[0].className = 'second'
      $('.numberLgm .p')[1].className = $('.numberLgm .p')[2].className = 'p'
      $('.progressBox .otherP')[0].className = $('.progressBox .otherP')[1].className = 'currentP'
      $('.progressBox .btmTime')[1].className = $('.progressBox .btmTime')[2].className = 'btmTime'
    } else {
      return false
    }
  }

  //完成物资验收
  goAccept() {
    if (true) {
      //隐藏按钮
      $('.syz_button')[0].className = 'hide'
      //显示第5步
      $('.numberLgm .p')[3].className = $('.numberLgm .p')[4].className = 'p'
      $('.progressBox .otherP')[0].className = $('.progressBox .otherP')[1].className = 'currentP'
      $('.progressBox .btmTime')[3].className = $('.progressBox .btmTime')[4].className = 'btmTime'
      $('.instore-result')[0].className = 'instore-result'
    }
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
            <a href='#'>快捷办理</a>
            <p>/</p>
            <a href='#'>入库单A121651</a>
          </div>

          <div className='h h-lgm'>{this.state.clock.toLocaleTimeString()}<a href="#" style={{maigin:0,padding:0,fontWeight:'normal',fontSize:14,color:'#1C7CD5',float:'right'}} >打印</a> </div>

          <div className='progress-Lgm'>
            <div className='numberLgm'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <div className='p'></div>
              <div className='hide p'></div>
              <div className='hide p'></div>
              <div className='hide p'></div>
              <div className='hide p'></div>
            </div>
            <div className='progressBox'>

              <div className='currentP'>
                <span className='spanTitle'>票厅</span>
                <span className='spanContent'>入库单生成</span>
                <span className='spanContent'>等待货物到达</span>
                <div className='btmTime'><span>2017/11/11 15:01:23</span></div>
              </div>
              <div className='otherP'>
                <span className='spanTitle'>系统</span>
                <span className='spanContent'>货物到达</span>
                <span className='spanContent'>等待现场调度</span>
                <div className='btmTime hide'><span>2017/11/11 15:01:23</span></div>
              </div>
              <div className='otherP'>
                <span className='spanTitle'>现场</span>
                <span className='spanContent'>已调度</span>
                <span className='spanContent'>等待物资验收</span>
                <div className='btmTime hide'><span>2017/11/11 15:01:23</span></div>
              </div>
              <div className='otherP'>
                <span className='spanTitle'>系统</span>
                <span className='spanContent'>物资验收完成</span>
                <span className='spanContent'>等待系统上帐</span>
                <div className='btmTime hide'><span>2017/11/11 15:01:23</span></div>
              </div>
              <div className='otherP'>
                <span className='spanTitle'>系统</span>
                <span className='spanContent'>上账成功</span>
                <span className='spanContent'>上账完成</span>
                <div className='btmTime hide'><span>2017/11/11 15:01:23</span></div>
              </div>
            </div>
          </div>

          <div className='shipper-information'>
            <span className='fixSpan-lgm'>货主信息</span>
            <p><span>货主</span><span>重庆亚欧物资有限公司</span></p>
          </div>

          <div className='goods-information'>
            <span className='fixSpan-lgm'>货品信息</span>
            <div className='goods-lgm'>
            <InputComp props={{key:'pro-lgm',label:'厂家',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'name-lgm',label:'品名',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'material-lgm',label:'材质',labelStyle:{},selectStyle:{width:'149.5px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

            <InputComp props={{key:'specifications-lgm',label:'规格',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'length-lgm',label:'长度',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'',label:'',labelStyle:{},selectStyle:{width:'149.5px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

            <InputComp props={{key:'technology-lgm',label:'工艺',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'metering-lgm',label:'计量',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'',label:'',labelStyle:{},selectStyle:{width:'149.5px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

            <InputComp props={{key:'weight-lgm',label:'重量',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'number-lgm',label:'件数',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'',label:'',labelStyle:{},selectStyle:{width:'149.5px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

            <InputComp props={{key:'warranty-lgm',label:'质保书',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'',label:'',labelStyle:{},selectStyle:{width:'280px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'',label:'',labelStyle:{},selectStyle:{width:'149.5px'},options:['嘻嘻嘻','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

              </div>
          </div>

          <div className='transportation-information'>
            <span className='fixSpan-lgm'>运输情况</span>
            <div className='goods-lgm'>
            <InputComp props={{key:'arrival-lgm',label:'到货日期',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'unload-lgm',label:'卸车日期',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'lfactory-lgm',label:'出厂日期',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />

            <InputComp props={{key:'transport-lgm',label:'主运方式',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'wagonNumber-lgm',label:'到库车号',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            <InputComp props={{key:'recipient-lgm',label:'接收人',labelStyle:{},selectStyle:{width:'250px'},options:['2017/11/29','嘻嘻嘻','嘻嘻嘻','嘻嘻嘻']}} />
            </div>
          </div>
          <div className='start-lgm'>
              <span onClick={this.goDispatch}>货物已到，开始调度验收</span>
          </div>

          <div className="second hide">
            <div className="syz_box_ai">
              <div className="syz_title_ai">
                <span>AI调度</span>
              </div>
              <div className="syz_content_ai">
                <span>仓库</span><input type="text" defaultValue="金田中钢库"/>
                <span>库房</span><input type="text" defaultValue="A"/>
                <span>库区</span><input type="text" defaultValue="A1"/>
                <span>货位</span><input type="text" defaultValue="12"/>
                <span>堆位</span><input type="text" defaultValue="1"/>
                <span>层序</span><input type="text" defaultValue="15"/>
                <button>人工修改</button>
              </div>
            </div>
            <div className="syz_box_wz">
              <div className="syz_title_wz">
                <span>物资验收</span>
              </div>
              <div className="syz_content_wz">
                <span>验收重量</span><input type="text" defaultValue="55.900吨"/>
                <span>验收件数</span><input type="text" defaultValue="5"/>
                <span>堆放方式</span><input type="text" defaultValue="统一堆放"/>
              </div>
              <table className="syz_table_wz">
                <thead>
                <tr>
                  <th>跟踪号</th>
                  <th>磅次</th>
                  <th>合磅重量（吨）</th>
                  <th>件数</th>
                  <th>库房</th>
                  <th>库区</th>
                  <th>货位</th>
                  <th>堆位</th>
                  <th>层次</th>
                  <th>创建时间</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>50001</td>
                  <td>1</td>
                  <td>20.559</td>
                  <td>3</td>
                  <td>A</td>
                  <td>A1</td>
                  <td>12</td>
                  <td>1</td>
                  <td>15</td>
                  <td>2017/11/11 15:23:11</td>
                </tr>
                </tbody>
              </table>
              <div className="syz_last_tr">
                <span>当前合计</span>
                <span>55.900</span>
                <span>5</span>
              </div>
              <div className="syz_button">
                <button>打开磅秤F3</button>
                <button onClick={this.goAccept} style={{float:'right'}}>完成物资验收</button>
              </div>
            </div>
          </div>
          <div className="instore-result hide">
            <div className="result-title">入库结果</div>
            <div className="result-cont">
              <span>本次入库完成，共耗时<span className="im-info">6小时15分8秒</span>，货主重庆亚欧物资有限公司的货品：<span>螺纹钢、HRB400E、12mm、9m、达钢（账页123）</span>增加重量<span className="im-info">78.293</span>吨</span>
            </div>
          </div>
        </div>

      </div>


    )
  }
}
