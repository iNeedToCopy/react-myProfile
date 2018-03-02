import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {Router, Route, Redirect,IndexRedirect, IndexRoute, Link, browserHistory} from 'react-router'
import App from './containers/App';
import ChangeTicketComp from './components/ChangeTicketComp'
import ChangeTicketContainer from './containers/ChangeTicketContainer'
import AutoPayComp from './components/AutoPayComp'
import AutoPayContainer from './containers/AutoPayContainer'
import QRCodeComp from './components/QRCodeComp'
import QRCodeContainer from './containers/QRCodeContainer'
import MainBriefContainer from './containers/MainBriefContainer'
import MainBriefComp from './components/MainBriefComp'
//登录
import LoginContainer from './containers/Login/LoginContainer'
import LoginComp from './components/Login/LoginComp'
import LoginStoreContainer from './containers/Login/LoginStoreContainer'
import LoginStoreComp from './components/Login/LoginStoreComp'
import LoginBusinessContainer from './containers/Login/LoginBusinessContainer'
import LoginBusinessComp from './components/Login/LoginBusinessComp'
import LoginUserContainer from './containers/Login/LoginUserContainer'
import LoginUserComp from './components/Login/LoginUserComp'
import LoginSystemContainer from './containers/Login/LoginSystemContainer'
import LoginSystemComp from './components/Login/LoginSystemComp'

//入库管理
import DepositManagementComp from './components/StorageManagement/DepositManagementComp'
import DepositManagementContainer from './containers/StorageManagement/DepositManagementContainer'
import DepositAccountComp from './components/StorageManagement/DepositAccountComp'
import DepositAccountContainer from './containers/StorageManagement/DepositAccountContainer'
import CompletedStorageBillComp from './components/StorageManagement/CompletedStorageBillComp'
import CompletedStorageBillContainer from './containers/StorageManagement/CompleteStorageBillContainer'
import ProcessingStorageBillComp from './components/StorageManagement/ProcessingStorageBillComp'
import ProcessingStorageBillContainer from './containers/StorageManagement/ProcessingStorageBillContainer'
//出库信息
import OutPutContainer from './containers/OutPutContainer'
import OutPutComp from './components/OutPutComp'
//出库管理
import OverAuthorizeComp from './components/OutBoundManagementComp/OverAuthorizeComp'
import OverAuthorizeContainer from './containers/OutBoundManagementCntainer/OverAuthorizeContainer'
import OutBoundAcceptanceComp from './components/OutBoundManagementComp/OutBoundAcceptanceComp'
import OutBoundAcceptanceContainer from './containers/OutBoundManagementCntainer/OutBoundAcceptanceContainer'
import ElectronicBillOfLadingComp from './components/OutBoundManagementComp/ElectronicBillOfLadingComp'
import ElectronicBillOfLadingContainer from './containers/OutBoundManagementCntainer/ElectronicBillOfLadingContainer'
import VehicleReleaseComp from './components/OutBoundManagementComp/VehicleReleaseComp'
import VehicleReleaseContainer from './containers/OutBoundManagementCntainer/VehicleReleaseContainer'
import BillOfLadingNoticeComp from './components/OutBoundManagementComp/BillOfLadingNoticeComp'
import BillOfLadingNoticeContainer from './containers/OutBoundManagementCntainer/BillOfLadingNoticeContainer'
import PickUpAndTicketExchangeComp from './components/OutBoundManagementComp/PickUpAndTicketExchangeComp'
import PickUpAndTicketExchangeContainer from './containers/OutBoundManagementCntainer/PickUpAndTicketExchangeContainer'
// import MaterialDistributionComp from './components/OutBoundManagementComp/MaterialDistributionComp'
// import MaterialDistributionContainer from './containers/OutBoundManagementCntainer/MaterialDistributionContainer'
import TransferAccountThreeComp from './components/NewOutOfWareHouseBill/TransferAccountThreeComp'
import TransferAccountThreeContainer from './containers/NewOutOfWareHouseBill/TransferAccountThreeContainer'
import PickUpGoodsComp from './components/NewOutOfWareHouseBill/PickUpGoodsComp'
import PickUpGoodsContainer from './containers/NewOutOfWareHouseBill/PickUpGoodsContainer'
import PickUpGoodsSixComp from './components/NewOutOfWareHouseBill/PickUpGoodsSixComp'
import PickUpGoodsSixContainer from './containers/NewOutOfWareHouseBill/PickUpGoodsSixContainer'

//货权管理-->新建账页
import NewAccountContainer from './containers/rightManagement/NewAccountContainer'
import NewAccountComp from './components/rightManagement/NewAccountComp'

//货权管理-->账页调整
import ChangeAccountContainer from './containers/rightManagement/ChangeAccountContainer'
import ChangeAccountComp from './components/rightManagement/ChangeAccountComp'

//业务结算-->出库费结算
import OutSettleContainer from './containers/BusinessSettle/OutSettleContainer'
import OutSettleComp from './components/BusinessSettle/OutSettleComp'

//业务结算-->出门证费用统计
import ExpenseStatsContainer from './containers/BusinessSettle/ExpenseStatsContainer'
import ExpenseStatsComp from './components/BusinessSettle/ExpenseStatsComp'

//业务结算-->出门证管理
import CardManagerContainer from './containers/BusinessSettle/CardManagerContainer'
import CardManagerComp from './components/BusinessSettle/CardManagerComp'

//业务结算-->收费方式修改
import ChangeMethodContainer from './containers/BusinessSettle/ChangeMethodContainer'
import ChangeMethodComp from './components/BusinessSettle/ChangeMethodComp'


//业务查询
import WaitingTaskContainer from './containers/BusinesQuery/WaitingTaskContainer'
import WaitingTaskComp from './components/BusinesQuery/WaitingTaskComp'


//发货单查询
import QueryDeliverContainer from './containers/BusinesQuery/QueryDeliverContainer'
import QueryDeliverComp from './components/BusinesQuery/QueryDeliverComp'

//验收单查询
import QueryReceiptContainer from './containers/BusinesQuery/QueryReceiptContainer'
import QueryReceiptComp from './components/BusinesQuery/QueryReceiptComp'

//验收单查询
import QueryAccContainer from './containers/BusinesQuery/QueryAccContainer'
import QueryAccComp from './components/BusinesQuery/QueryAccComp'

//电子提单查询
import QueryListContainer from './containers/BusinesQuery/QueryListContainer'
import QueryListComp from './components/BusinesQuery/QueryListComp'

//接运管理
import ArrivalNoticeContainer from './containers/FeederManagement/ArrivalNoticeContainer'
import ArrivalNoticeComp from './components/FeederManagement/ArrivalNoticeComp'
import EditListContainer from './containers/FeederManagement/EditListContainer'
import EditListComp from './components/FeederManagement/EditListComp'
import GoodsAcceptComp from './components/StorageManagement/GoodsAcceptComp'
import GoodsAcceptContainer from './containers/StorageManagement/GoodsAcceptContainer'



//统计报表
import WareFormContainer from './containers/StaForm/WareFormContainer'
import WareFormComp from './components/StaForm/WareFormComp'
import AccFormContainer from './containers/StaForm/AccFormContainer'
import AccFormComp from './components/StaForm/AccFormComp'
import BalFormContainer from './containers/StaForm/BalFormContainer'
import BalFormComp from './components/StaForm/BalFormComp'
import StorFormContainer from './containers/StaForm/StorFormContainer'
import StorFormComp from './components/StaForm/StorFormComp'
//车辆管理
import ModNumContainer from './containers/VehManage/ModNumContainer'
import ModNumComp from './components/VehManage/ModNumComp'
import VehRegContainer from './containers/VehManage/VehRegContainer'
import VehRegComp from './components/VehManage/VehRegComp'

//快捷办理
import EnterOdd1Container from './containers/QuickHandle/EnterOdd1Container'
import EnterOdd1Comp from './components/QuickHandle/EnterOdd1Comp'

import WarehouseBillContainer from './containers/StorageManagement/WarehouseBillContainer'
import WarehouseBillComp from './components/StorageManagement/WarehouseBillComp'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
window.newSize = (($(window).width())/1280).toFixed(2)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {/*<Redirect from="/" to="login"/>*/}
      <Route path="/" component={App}>
        <IndexRedirect to="login"/>

        <Route path="login" component={LoginContainer}>
          <IndexRoute component={LoginComp}/>
        </Route>

        <Route path="loginStore" component={LoginStoreContainer}>
          <IndexRoute component={LoginStoreComp}/>
        </Route>

        <Route path="loginBusiness" component={LoginBusinessContainer}>
          <IndexRoute component={LoginBusinessComp}/>
        </Route>

        <Route path="loginUser" component={LoginUserContainer}>
          <IndexRoute component={LoginUserComp}/>
        </Route>

        <Route path="loginSystem" component={LoginSystemContainer}>
          <IndexRoute component={LoginSystemComp}/>
        </Route>

        <Route path="changeTicket" component={ChangeTicketContainer}>
          <IndexRoute component={ChangeTicketComp}/>
        </Route>
        <Route path="AutoPay" component={AutoPayContainer}>
          <IndexRoute component={AutoPayComp}/>
        </Route>
        <Route path="QRCode" component={QRCodeContainer}>
          <IndexRoute component={QRCodeComp}/>
        </Route>

        <Route path="main" components={MainBriefContainer}>
          <IndexRoute components={MainBriefComp}/>
        </Route>
        {/*入库管理路由*/}
        <Route path="depositManage" components={DepositManagementContainer}>
          <IndexRoute components={DepositManagementComp}/>
        </Route>
        <Route path="depositAccount" components={DepositAccountContainer}>
          <IndexRoute components={DepositAccountComp}/>
        </Route>
        <Route path="doneStorageBill" components={CompletedStorageBillContainer}>
          <IndexRoute components={CompletedStorageBillComp}/>
        </Route>
        <Route path="processingStorage" components={ProcessingStorageBillContainer}>
          <IndexRoute components={ProcessingStorageBillComp}/>
        </Route>
        {/*出库信息路由*/}
        <Route path="outPutInfo" components={OutPutContainer}>
          <IndexRoute components={OutPutComp}/>
        </Route>
        {/*出库管理 */}
        <Route path="OverAuthorize" components={OverAuthorizeContainer}>
          <IndexRoute components={OverAuthorizeComp}/>
        </Route>
        <Route path="OutBoundAcceptance" components={OutBoundAcceptanceContainer}>
          <IndexRoute components={OutBoundAcceptanceComp}/>
        </Route>
        <Route path="ElectronicBillOfLading" components={ElectronicBillOfLadingContainer}>
          <IndexRoute components={ElectronicBillOfLadingComp}/>
        </Route>
        <Route path="VehicleRelease" components={VehicleReleaseContainer}>
          <IndexRoute components={VehicleReleaseComp}/>
        </Route>
        <Route path="BillOfLadingNotice" components={BillOfLadingNoticeContainer}>
          <IndexRoute components={BillOfLadingNoticeComp}/>
        </Route>
        <Route path="PickUpAndTicketExchange" components={PickUpAndTicketExchangeContainer}>
          <IndexRoute components={PickUpAndTicketExchangeComp}/>
        </Route>
        {/*<Route path="MaterialDistribution" components={MaterialDistributionContainer}>*/}
          {/*<IndexRoute components={MaterialDistributionComp}/>*/}
        {/*</Route>*/}
        {/*                  出库管理 new             */}
        <Route path="TransferAccountThree" components={TransferAccountThreeContainer}>
          <IndexRoute components={TransferAccountThreeComp}/>
        </Route>
        <Route path="PickUpGoods" components={PickUpGoodsContainer}>
          <IndexRoute components={PickUpGoodsComp}/>
        </Route>
        <Route path="PickUpGoodsSix" components={PickUpGoodsSixContainer}>
          <IndexRoute components={PickUpGoodsSixComp}/>
        </Route>

        {/*货权管理-->账页调整*/}
        <Route path="newAccountInfo" components={NewAccountContainer}>
          <IndexRoute components={NewAccountComp}/>
        </Route>

        {/*货权管理-->新建账页*/}
        <Route path="changeAccountInfo" components={ChangeAccountContainer}>
          <IndexRoute components={ChangeAccountComp}/>
        </Route>

        {/*业务结算-->出库费结算*/}
        <Route path="outSettleInfo" components={OutSettleContainer}>
          <IndexRoute components={OutSettleComp}/>
        </Route>

        {/*业务结算-->出门证统计*/}
        <Route path="ExpenseStatsInfo" components={ExpenseStatsContainer}>
          <IndexRoute components={ExpenseStatsComp}/>
        </Route>

        {/*业务结算-->出门证管理*/}
        <Route path="CardManagerInfo" components={CardManagerContainer}>
          <IndexRoute components={CardManagerComp}/>
        </Route>

        {/*业务结算-->收费方式修改*/}
        <Route path="ChangeMethodInfo" components={ChangeMethodContainer}>
          <IndexRoute components={ChangeMethodComp}/>
        </Route>


        {/*待处理任务路由*/}
        <Route path="waitingTask" components={WaitingTaskContainer}>
          <IndexRoute components={WaitingTaskComp}/>
        </Route>

        {/*发货单查询路由*/}
        <Route path="queryDeliver" components={QueryDeliverContainer}>
          <IndexRoute components={QueryDeliverComp}/>
        </Route>

        {/*验收单查询路由*/}
        <Route path="queryReceipt" components={QueryReceiptContainer}>
          <IndexRoute components={QueryReceiptComp}/>
        </Route>

        {/*账页查询路由*/}
        <Route path="queryAccount" components={QueryAccContainer}>
          <IndexRoute components={QueryAccComp}/>
        </Route>

        {/*电子提单查询路由*/}
        <Route path="queryList" components={QueryListContainer}>
          <IndexRoute components={QueryListComp}/>
        </Route>

        {/*接运管理*/}
        <Route path="ArrNotice" components={ArrivalNoticeContainer}>
          <IndexRoute components={ArrivalNoticeComp}/>
        </Route>
        <Route path="EditList" components={EditListContainer}>
          <IndexRoute components={EditListComp}/>
        </Route>
        <Route path="goods" components={GoodsAcceptContainer}>
          <IndexRoute components={GoodsAcceptComp}/>
        </Route>

        {/*统计报表*/}
        <Route path="wareForm" components={WareFormContainer}>
          <IndexRoute components={WareFormComp}/>
        </Route>
        <Route path="accForm" components={AccFormContainer}>
          <IndexRoute components={AccFormComp}/>
        </Route>
        <Route path="balForm" components={BalFormContainer}>
          <IndexRoute components={BalFormComp}/>
        </Route>
        <Route path="storForm" components={StorFormContainer}>
          <IndexRoute components={StorFormComp}/>
        </Route>
        {/*车辆管理*/}
         <Route path="modNum" components={ModNumContainer}>
          <IndexRoute components={ModNumComp}/>
         </Route>
         <Route path="vehReg" components={VehRegContainer}>
           <IndexRoute components={VehRegComp}/>
         </Route>

          {/*快捷办理专区*/}
         <Route path="bill" components={WarehouseBillContainer}>
           <IndexRoute components={WarehouseBillComp}/>
         </Route>

          <Route path="enterOdd1" components={EnterOdd1Container}>
           <IndexRoute components={EnterOdd1Comp}/>
          </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
