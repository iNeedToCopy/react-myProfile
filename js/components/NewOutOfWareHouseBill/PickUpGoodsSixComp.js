import React, {Component, PropTypes} from 'react'
import '../../../style/Common/css/bootstrap.min.css'
import '../../../style/NewOutOfWareHouseBill/PickUpGoodsSix.scss'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

import {Router, Route, Redirect, IndexRoute, Link, browserHistory} from 'react-router'

const defaultCons = {title:['跟踪号','磅次','合磅重量(吨)','件数','库房','库区','货位','堆位','层序','创建时间','']};
const defaultVars = {contentX:[[50001,1,20.229,3,'A','A1',12,1,15,'2017/11/11 15:25:01','点击数字可修改'],
  [50002,1,20.229,3,'A','A1',12,1,15,'2017/11/11 15:25:01','点击数字可修改'],
  [50003,1,20.229,3,'A','A1',12,1,15,'2017/11/11 15:25:01','点击数字可修改'],
  [50004,2,35.671,6,'A','A1',12,1,15,'2017/11/11 15:28:38','点击数字可修改'],
  [50005,2,35.671,6,'A','A1',12,1,15,'2017/11/11 15:28:38','点击数字可修改'],['当前合计','',55.900,5,'','','','','','','']]};
export default class PickUpGoodsSixComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    $("td:not(:nth-child(10n),:nth-child(11n),:nth-child(11n+1))").click(function(event){
      //td中已经有了input,则不需要响应点击事件
      if($(this).children("input").length > 0)
        return false;
      let tdObj = $(this);
      let preText = tdObj.html();
      //得到当前文本内容
      let inputObj = $("<input type='text' spellcheck='false'/>");
      //创建一个文本框元素
      tdObj.html(""); //清空td中的所有元素
      inputObj
        .width(tdObj.width())
        //设置文本框宽度与td相同
        .height(tdObj.height())
        .val(preText)
        .appendTo(tdObj)
        //把创建的文本框插入到tdObj子节点的最后
        .trigger("focus");
      //用trigger方法触发事件
      //.trigger("select");
      inputObj.keyup(function(event){
        if(13 == event.which)
        //用户按下回车
        {
          var text = $(this).val();
          tdObj.html(text);
        }
        else if(27 == event.which)
        //ESC键
        {
          tdObj.html(preText);
        }
      });
      //已进入编辑状态后，不再处理click事件
      inputObj.click(function(){
        return false;
      });

    });
  }

  render(){
    return(
      <div className="containerPickSix">
        <div className="companyName"><HeaderComp/></div>
        <div className="sideBar"><SideMenuComp/></div>
        <div className="mainPickSix">
          <div className="title">
            <span>快捷办理</span>
            <span>/</span>
            <span>出库单B10000001</span>
          </div>
          <div className="contentSix">
            <div className="contentTitle">
              <div className="wangDan">

              </div>
              <span className="t1">出库单：B10000001</span>
              <span className="t2">打印</span>
            </div>
            <div className="process">
              <div className="numList">
                <div className="bgStep">

                </div>
                <div className="six">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                </div>
              </div>
              <div className="circle">
                <div>
                  <span>客户或票厅</span>
                  <p>出库单生成等待受理</p>
                </div>
                <div>
                  <span>系统</span>
                  <p>出库单已换票等待调度</p>
                </div>
                <div>
                  <span>现场</span>
                  <p>已调度等待物资发放</p>
                </div>
                <div>
                <span>客户或票厅</span>
                <p>物质已发放等待客户缴费</p>
                </div>
                <div>
                <span>系统</span>
                <p>已缴费等待确认放行</p>
                </div>
                <div>
                  <span>系统</span>
                  <p>已确认放行打印出门证出库</p>
                </div>
              </div>
              <div className="date">
                <span>2017/11/11 15:01:23</span>
                <span>2017/11/11 15:01:23</span>
                <span>2017/11/11 15:01:23</span>
                <span>2017/11/11 15:01:23</span>
                <span>2017/11/11 15:01:23</span>
                <span>2017/11/11 15:01:23</span>
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
                <input type="radio"  className="goods" name="pickUp"/>
                <span>提货</span>
                <input type="radio" className="count" name="pickUp"/>
                <span>转户</span>
              </div>
              <span>出库对方</span>
              <input type="text" placeholder="渝A12345、渝B12345"/>
              <span className="change">修改&nbsp;&nbsp;读卡</span>
            </div>
            <div className="remark">
              <span className="sTitle">备&nbsp;&nbsp;&nbsp;&nbsp;注</span>
              <span>备注</span>
              <input type="text" placeholder="客户着急、请尽快发货"/>
            </div>
            <div className="AI">
              <span className="sTitle">AI调度</span>
              <span className="store">仓库</span>
              <input type="text" placeholder="金田中钢库"/>
              <span>库房</span>
              <input type="text" placeholder="A"/>
              <span>库区</span>
              <input type="text" placeholder="A1"/>
              <span>货位</span>
              <input type="text" placeholder="12"/>
              <span>堆位</span>
              <input type="text" placeholder="1"/>
              <span>层序</span>
              <input type="text" placeholder="15"/>
              <span className="person">人工修改</span>
            </div>
             <div className="material">
              <span className="sTitle">物资发放</span>
              <div className="distribution">
                <span>发放重量</span>
                <input type="text" placeholder="55.900 吨"/>
                <span>发放件数</span>
                <input type="text" placeholder="5"/>
              </div>
              <table className="table">
                <thead>
                <tr>
                  {defaultCons.title.map((item,i)=>{
                    return <th key={i}>{item}</th>
                  })}
                </tr>
                </thead>
                <tbody>
                {defaultVars.contentX.map((a,i)=>{
                  return <tr key={i}>{a.map((b,index)=>{
                    return <td key={index}>{b}</td>
                  })}</tr>
                })}
                </tbody>
              </table>
            </div>
            <div className="cost">
              <span className="sTitle">缴费信息</span>
              <span>计价重量</span>
              <input type="text" placeholder="78.882 吨"/>
              <span>计算单价</span>
              <input type="text" placeholder="30.00 元/吨"/>
              <span>缴费方式</span>
              <input type="text" placeholder="现结 "/>
              <span>出库费用</span>
              <input type="text" placeholder="2366.46 元"/>
              <span>其他费用</span>
              <input type="text" placeholder="0.00 元"/>
              <span>应缴合计</span>
              <input type="text" placeholder="2366.46 元"/>

            </div>
            <div className="result">
              <span className="sTitle">出库结果</span>
              <p>本次出库完成，共耗时<span>6小时15分8秒</span>，货主<span>重庆亚欧物资有限公司</span>的货品：
                螺纹钢、HRB400E、12mm、9米、达钢（账页123）库存减少<span>78.293</span>吨。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
