/**
 * Created by Aaron on 2017/11/20.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/StorageManagement/WarehouseBill.scss'
import SideMenu from '../../components/common/SideMenuComp'
import Header from '../../components/common/HeaderComp'
import NavBar from '../../components/common/NavBarComp'

const defaultCons = {
};
let defaultVars = {};

export default class WarehouseBillComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="MainContainer">
        <Header/>
        <div className="floatL">
          <SideMenu/>
        </div>
        <div className="mainBill floatL">
          <NavBar props={this.props.location}/>
          <div className="mainBillContent">
            <div className="billTitle">新建入库单</div>
            <div className="billContent">
              <div className="Owner-box" style={{height:'80px'}}>
                 <span className="owner-title">货主信息</span>
                 <div className="owner-input" style={{left:'8px',
                   top:'32px',width:'500px'}}>
                  <span className="ownerName">货主</span>
                  <input type="text" placeholder="点击搜索" className="ownerInput" style={{width:'433px'}}/>
                </div>
              </div>
              <div className="Owner-box" style={{height:'251px',marginTop:'40px',display:'inline-block'}}>
                <span className="owner-title">货品信息</span>
                <div className="owner-input" style={{left:'8px',
                  top:'32px',width:'370px'}}>
                  <span className="ownerName">厂家</span>
                  <input type="text" placeholder="点击选择" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'32px'}}>
                  <span className="ownerName">品名</span>
                  <input type="text" placeholder="点击选择" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'738px',
                  top:'32px'}}>
                  <span className="ownerName">材质</span>
                  <input type="text" placeholder="点击选择" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'8px',
                  top:'73px'}}>
                  <span className="ownerName">规格</span>
                  <input type="text" placeholder="点击选择" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'73px',width:'600px'}}>
                  <span className="ownerName">长度</span>
                  <input type="text" placeholder="选择" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'8px',
                  top:'114px'}}>
                  <span className="ownerName">工艺</span>
                  <input type="text" placeholder="热轧" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'114px',width:'600px'}}>
                  <span className="ownerName">计量</span>
                  <input type="text" placeholder="检斤" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'8px',
                  top:'155px'}}>
                  <span className="ownerName">到达重量</span>
                  <input type="text" placeholder="" className="ownerInput" style={{width:'280px'}}/>
                  <span className="unit">吨</span>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'155px',width:'600px'}}>
                  <span className="ownerName">到达件数</span>
                  <input type="text" placeholder="" className="ownerInput" style={{width:'280px'}}/>
                  <span className="unit" style={{right:'260px'}}>件</span>
                </div>
                <div className="owner-input" style={{left:'8px',
                  top:'196px'}}>
                  <span className="ownerName">质保书</span>
                  <input type="text" placeholder="请把质保书放在扫描仪上，点击扫描" className="ownerInput" style={{width:'280px'}}/>
                  <span className="unit" style={{color:'#1C7CD5'}}>扫描</span>
                </div>
              </div>
              <div className="Owner-box" style={{height:'132px',marginTop:'40px',display:'inline-block'}}>
                <span className="owner-title">运输情况</span>
                <div className="owner-input" style={{left:'8px',
                  top:'32px',width:'370px'}}>
                  <span className="ownerName">到货日期</span>
                  <input type="text" placeholder="2017/11/11" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'32px'}}>
                  <span className="ownerName">卸车日期</span>
                  <input type="text" placeholder="2017/11/11" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'738px',
                  top:'32px'}}>
                  <span className="ownerName">出厂日期</span>
                  <input type="text" placeholder="2017/11/11" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'8px',
                  top:'73px'}}>
                  <span className="ownerName">主运方式</span>
                  <input type="text" placeholder="公路" className="ownerInput" style={{width:'280px'}}/>
                </div>
                <div className="owner-input" style={{left:'378px',
                  top:'73px'}}>
                  <span className="ownerName">到库车号</span>
                  <input type="text" placeholder="" className="ownerInput" style={{width:'280px'}}/>
                  <span className="unit">读卡</span>
                </div>
                <div className="owner-input" style={{left:'738px',
                  top:'73px'}}>
                  <span className="ownerName">接车人</span>
                  <input type="text" placeholder="点击选填" className="ownerInput" style={{width:'280px'}}/>
                </div>
              </div>
              <div className="Owner-box" style={{height:'80px',marginTop:'40px'}}>
                <span className="owner-title">备注</span>
                <div className="owner-input" style={{left:'8px',
                  top:'32px',width:'500px'}}>
                  <span className="ownerName">备注</span>
                  <input type="text" placeholder="选填" className="ownerInput" style={{width:'433px'}}/>
                </div>
              </div>
              <div className="button-box">
                <button className="button-font">创建入库单</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
