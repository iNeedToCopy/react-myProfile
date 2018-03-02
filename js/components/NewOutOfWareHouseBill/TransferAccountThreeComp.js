import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/NewOutOfWareHouseBill/TransferAccountThree.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = { };
const defaultVars = { };
export default class TransferAccountThreeComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }
  render(){
    return(
      <div className="containerAccountThree">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="mainAccountThree">
          <div className="title">
            <span>快捷办理</span>
            <span>/</span>
            <span>出库单C10000001</span>
          </div>
          <div className="contentThree">
            <div className="contentTitle">
              <div className="wangDan">

              </div>
              <span className="t1">出库单：C10000001</span>
              <span className="t2">打印</span>
            </div>
            <div className="process">
              <div className="smallF">
                <div className="numList">
                  <div className="bgStep">

                  </div>
                  <div className="six">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                </div>
                <div className="circle">
                  <div>
                    <span>客户或票厅</span>
                    <p>出库单生成等待受理</p>
                  </div>
                  <div>
                    <span>系统</span>
                    <p>如需缴费等待客户缴费</p>
                  </div>
                  <div>
                    <span>系统</span>
                    <p>账页更新<br/>转户完成</p>
                  </div>
                </div>
                <div className="date">
                  <span>2017/11/11 15:01:23</span>
                  <span>2017/11/11 15:01:23</span>
                  <span>2017/11/11 15:01:23</span>
                </div>
              </div>

            </div>
            <div className="host">
              <span className="sTitle">货主信息</span>
              <span>货主</span>
              <input type="text" placeholder="重庆亚欧物资有限公司"/>
            </div>
            <div className="messageGoods">
              <span className="sTitle">货品信息</span>
              <div className="caiZhi">
                <span>材质</span>
                <input type="text" placeholder="HRB400E"/>
              </div>
              <div className="conTent">
                <span className="">厂家</span>
                <input type="text" className="" placeholder="达钢"/>
                <span className="marL">品名</span>
                <input type="text" className="" placeholder="螺纹钢"/>
                <span className="">规格</span>
                <input type="text" className="" placeholder="20mm"/>
                <span className="marL">长度</span>
                <input type="text" className="" placeholder="9米"/>
                <span className="">工艺</span>
                <input type="text" className="" placeholder="热轧"/>
                <span className="marL">计量</span>
                <input type="text" className="" placeholder="检斤"/>
                <span className="">预计重量</span>
                <input type="text" className="" placeholder="1001.560 吨"/>
                <span className="marL">预计件数</span>
                <input type="text" className="" placeholder="20件"/>
                <span className="">质保书</span>
                <input type="text" className="" placeholder="修改&nbsp;&nbsp;&nbsp;&nbsp;查看"/>
              </div>
            </div>
            <div className="outDoor">
              <span className="sTitle">出库信息</span>
              <div className="rad">
                <span>出库类型</span>
                <input type="radio"  className="goods" name="transferAC"/>
                <span>提货</span>
                <input type="radio" className="count"  name="transferAC"/>
                <span>转户</span>
              </div>
              <span>出库对方</span>
              <input type="text" placeholder="重庆科通建筑材料有限责任公司"/>
              <span className="change">修改</span>
            </div>
            <div className="remark">
              <span className="sTitle">备&nbsp;&nbsp;&nbsp;&nbsp;注</span>
              <span>备注</span>
              <input type="text" placeholder="客户着急、请尽快转账"/>
            </div>
            <div className="cost">
              <span className="sTitle">缴费信息</span>
              <span>计价重量</span>
              <input type="text" placeholder="1000.000 吨"/>
              <span>计算单价</span>
              <input type="text" placeholder="0.00 元/吨"/>
              <span>缴费方式</span>
              <input type="text" placeholder="现结 "/>
              <span>出库费用</span>
              <input type="text" placeholder="0.00 元"/>
              <span>其他费用</span>
              <input type="text" placeholder="0.00 元"/>
              <span>应缴合计</span>
              <input type="text" placeholder="0.00 元"/>

            </div>
            <div className="result">
              <span className="sTitle">出库结果</span>
              <p>本次出库完成，共耗时<span>5.1秒</span>，账页更新如下：1.<span>重庆亚欧物资有限公司</span>的货品：
                螺纹钢、HRB400E、12mm、9米、达钢（账页123）重量减少<span>1000.000</span>吨；1.重庆科通建筑材料有限公司的货品：
                螺纹钢、HRB400E、12mm、9米、达钢（账页2987）重量增加1000.000吨。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
