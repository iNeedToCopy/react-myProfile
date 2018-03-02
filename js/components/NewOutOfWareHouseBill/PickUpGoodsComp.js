import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/NewOutOfWareHouseBill/PickUpGoods.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = { };
const defaultVars = { };
export default class PickUpGoodsComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newCreat:true,
    };
  }
  transferAccount(){
    this.setState({
      newCreat:false,
    });
  }
  pickUpGoods(){
    this.setState({
      newCreat:true,
    });
  }
  goToSix(){
    if(this.state.newCreat===true){
      browserHistory.push('/PickUpGoodsSix')
    }else {
      browserHistory.push('/TransferAccountThree')
    }

  }
  render(){
    return(
      <div className="containerPick">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="mainPick">
          <div className="title">
            <span>快捷办理</span>
            <span>/</span>
            <span>新建出库单</span>
          </div>
          <div className="mainContent">
            <div  className="newC">
              <span className="newBill">新建出库单</span>
              <span className="daoRu">点击批量导入</span>
            </div>
            <div className="shipper">
              <span className="sTitle">货主信息</span>
              <p className="name">货主</p>
              <input type="text" placeholder="点击搜索"/>
            </div>
            <div className="message">
              <span className="sTitle">货品信息</span>
              <span className="word">厂家</span>
              <input type="text" className="text inputL" placeholder="点击选择"/>
              <span className="word marLeft">品名</span>
              <input type="text" className="text inputL" placeholder="点击选择"/>
              <span className="word marLeft">规格</span>
              <input type="text" className="text inputL" placeholder="点击选择"/>
              <span className="word">材质</span>
              <input type="text" className="text inputL" placeholder="点击选择"/>
              <span className="word marLeft">长度</span>
              <input type="text" className="text inputL" placeholder="点击选择"/>
              <span className="word-green marLeft">点击从账页快捷选择货品</span>
              <span className="word">计量</span>
              <input type="text" className="text inputL" placeholder="检斤"/>
              <span className="word marLeft">重量预计</span>
              <input type="text" className="text smallL" placeholder=""/>
              <span className="word marLeft">预计件数</span>
              <input type="text" className="text smallL" placeholder="计量为检尺时填写 "/>
              <span className="dun cf">吨</span>
              <span className="jian cf">件</span>
            </div>
            <div className="OutMessage">
              <span className="sTitle">出库信息</span>
              <div className="type">
                <form action="">
                  <span>出库类型</span>
                  <input type="radio" name="PickUpGoods" onClick={this.pickUpGoods.bind(this)}/>
                  <span className="marR">提货</span>
                  <input type="radio" name="PickUpGoods" onClick={this.transferAccount.bind(this)}/>
                  <span>转户</span>
                </form>
              </div>
              <div className={this.state.newCreat?"pickUp":"pickUp miss"}>
                <div className="type">
                  <span>出库对方</span>
                  <input type="text" placeholder="提货请读车卡"/>
                  <span className="duKa">读卡</span>
                </div>
                <div className="type">
                  <span>放行确认</span>
                  <input type="radio" name="confirm"/>
                  <span className="marRt">不确认</span>
                  <input type="radio" name="confirm"/>
                  <span>人工确认</span>
                </div>
              </div>
              <div className={this.state.newCreat?"TransferAcc miss":"TransferAcc"}>
                <div className="type">
                  <span>出库对方</span>
                  <input type="text" placeholder="转户请选择已注册账户"/>
                  <span className="duKa">选择</span>
                </div>
              </div>
            </div>

            <div className="remark">
              <span className="sTitle">备&nbsp;&nbsp;&nbsp;&nbsp;注</span>
              <span>备注</span>
              <input type="text" placeholder="选填"/>
            </div>
            <button onClick={this.goToSix.bind(this)}>
              创建出库单
            </button>
          </div>

        </div>
      </div>
    )
  }
}
