/**
 * Created by Aaron on 2017/11/13.
 */
import React, {Component} from 'react'
import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'
import '../../../style/Common/SideMenu.scss'


const defaultCons = {
  SideMenuName: [['我的待办', '待办入库单', '待办出库单'], ['快捷办理', '新建入库单', '进行中入库单', '已完成入库单','新建出库单','进行中出库单','已完成出库单'],
    ['票厅专区', '新建货主', '货主列表', '账页查询', '新建账页', '账页调整', '入库报表', '出库报表','结存报表','调账报表','车辆统计','质保书管理'],
    ['现场专区', '实物稽核', '码位调整','实物移库','实物冻结','批量修改','作业组','作业量','验收单查询','发货单查询','实物查询','打磅查询','物资分布图','实物磅秤查询','电子秤记录','实物换发报表','实物入库报表','实物出库报表','实物结存报表','消化量统计','条码管理','作业点设计'],
    ['加工专区', '自备货查询', '新建加工单', '进行中加工单', '已完成加工单'],
    ['财务专区', '出库费结算', '出门证费用统计','出门费统计','加工费统计','量差统计','信用等级统计','业务增长率统计','风险系数统计','交接班统计']]
};
let defaultVars = {};
window.SideIndex = [false,false,false,false,false,false,false,false,false]
export default class SideMenuComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SideIndex:[]
    };
  }
  componentWillMount(){
    this.setState({
      SideIndex:SideIndex
    })
  }
  componentWillUpdate() {

  }

  componentDidUpdate() {
  }

  hiddenMenu(e, index) {
    SideIndex[index] = !SideIndex[index]
    $(e.target).parent().nextAll().fadeToggle(200)
  }

  pageGo(title,str) {
    switch (str) {
      case '新建出库单':
        browserHistory.push('/PickUpGoods');
        break;
      case '新建入库单':
        browserHistory.push({pathname:'/bill',state:{title:title,name:str}});
        break;
      case '进行中入库单':
        browserHistory.push({pathname:'/processingStorage',state:{title:title,name:str}});
        break;
      case '已完成入库单':
        browserHistory.push({pathname:'/doneStorageBill',state:{title:title,name:str}});
        break;
      case '到货预告':
        browserHistory.push('/ArrNotice');
        break;
      case '编辑交接单':
        browserHistory.push('/EditList');
        break;
      case '发货单查询':
        browserHistory.push({pathname:'/queryDeliver', state:{name: '发货单查询'}});
        break;
      case '验收单查询':
        browserHistory.push({pathname:'/queryReceipt', state:{name: '验收单查询'}});
        break;
      case '账页查询':
        browserHistory.push({pathname:'/queryAccount', state:{name: '账页查询'}})
        break;
      case '待处理任务':
        browserHistory.push({pathname:'/waitingTask', state:{name:'待处理任务'}});
        break;
      case '电子提单查询':
        browserHistory.push({pathname:'/queryList', state:{name:'电子提单查询'}});
        break;
      case '物资验收':
        browserHistory.push('/goods');
        break;
      case '存单管理':
        browserHistory.push('/depositManage');
        break;
      case '电子提单':
        browserHistory.push('/ElectronicBillOfLading');
        break;
      case '提单预告':
        browserHistory.push('/BillOfLadingNotice');
        break;
      case '出库受理':
        browserHistory.push('/OutBoundAcceptance');
        break;
      case '放行车辆':
        browserHistory.push('/VehicleRelease');
        break;
      case '超提授权':
        browserHistory.push('/OverAuthorize');
        break;
      case '续提换票':
        browserHistory.push('/PickUpAndTicketExchange');
      case '入库上账':
        browserHistory.push('/depositAccount');
        break;
      case '出库费结算':
      browserHistory.push({pathname:'/outSettleInfo', state:{name:'出库费结算'}});
      break;
      case '出门费用统计':
      browserHistory.push({pathname:'/ExpenseStatsInfo', state:{name:'出门证费用统计'}});
      break;
      case '出门证管理':
      browserHistory.push({pathname:'/CardManagerInfo', state:{name:'出门证管理'}});
      break;
      case '收费方式修改':
      browserHistory.push({pathname:'/ChangeMethodInfo', state:{name:'收费方式修改'}});
      break;
      case '新建账页':
      browserHistory.push({pathname:'/NewAccountInfo', state:{name:'新建账页'}});
      break;
      case '账页调整':
      browserHistory.push({pathname:'/ChangeAccountInfo', state:{name:'账页调整'}});
      break;
      case '物资发放':
        browserHistory.push('/MaterialDistribution');
        break;
      case '车号修改':
        browserHistory.push({pathname:'/modNum', state:{name:'车号修改'}});
        break;
      case '车辆登记放行':
        browserHistory.push({pathname:'/vehReg', state:{name:'车辆登记放行'}});
        break;
      case '入库报表':
        browserHistory.push({pathname:'/storForm', state:{name:'入库报表'}});
        break;
      case '出库报表':
        browserHistory.push({pathname:'/wareForm', state:{name:'出库报表'}});
        break;
      case '结存报表':
        browserHistory.push({pathname:'/balForm', state:{name:'结存报表'}});
        break;
      case '调账报表':
        browserHistory.push({pathname:'/accForm', state:{name:'调账报表'}});
        break;
    }
  }

  render() {
    return (
      <div className="menuContainer">
        {defaultCons.SideMenuName.map((a, index) => {
          return (
            <div key={index} className="menuContent">
              {a.map((b, indexs) => {
                if (indexs == 0) {
                  return (
                    <div key={indexs} className="menuDiv_1"><span className="menuFont_1" id={"test" + index}
                                                                  onClick={(e) => this.hiddenMenu(e, index)}>{b}</span>
                    </div>
                  )
                } else {
                  return (
                    <div key={indexs} className={this.state.SideIndex[index]? "_menuDiv_2" : "menuDiv_2 "}>
                      <span className="menuFont_2" onClick={() => this.pageGo(a[0],b)}>{b}</span>
                    </div>
                  )
                }
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
