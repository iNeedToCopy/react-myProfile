/*结存报表*/
import React, {Component, PropTypes} from 'react'
import '../../../style/StaForm/StaForm.scss'
import {Link, browserHistory, History, hashHistory} from 'react-router'
import HeaderComp from '../common/HeaderComp'
import SideMenuComp from '../common/SideMenuComp'

let test_data = [
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
];

let my_data=test_data.map((all,i) => {
  return (<tr key={i}>{all.map((item,index)=>{
    return <td key={index}>{item}</td>
  })}</tr>)
});

export default class BalFromComp extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
    	<div className="sta-container">
  			<HeaderComp></HeaderComp>
        <div style={{float:'left'}}>
          <SideMenuComp/>
        </div>

			{/*正题勿改*/}
			<div className="sta-content">
				<div className="sta-col-1086">
					<ul className="sta-breadcrumb">
					    <li><a href="#">统计报表</a></li>
					    <li><a href="#">结存报表</a></li>
					</ul>
					<ul className="syz-action">
						<li><a href="#">新增</a></li>
						<li><a href="#">修改</a></li>
						<li><a href="#">删除</a></li>
						<li><a href="#">退回</a></li>
						<li><a href="#">撤销</a></li>
						<li><a href="#">保存</a></li>
						<li><a href="#">刷新</a></li>
						<li><a href="#">产生</a></li>
						<li><a href="#">打印</a></li>
						<li><a href="#">导出</a></li>
						<li><a href="#">设置</a></li>
					</ul>
				</div>
				<h5 className="syz-title">结 存 报 表</h5>
				<div className="chukubaobiao">
					<div className="baobiao-left">
						<section className="zyx-input-unit">
							<div className="zyx-input">
								<span>帐页号</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>品名</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>材质</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
						</section>
						<section className="zyx-input-unit">
							<div className="zyx-input">
								<span>套帐编号</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>生产厂家</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input">
								<span>管理方式</span>
								<select></select>
							</div>
						</section>
						<section className="zyx-input-unit">
							<div className="zyx-input">
								<span>货主名称</span>
								<input type="text" placeholder="点击搜索"/>
							</div>
							<div className="zyx-input" style={{width:'233px'}}>
								<span>规格</span>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
								<input type="text" placeholder="点击搜索" style={{width:'50px'}}/>
							</div>
							<div className="zyx-input">

							</div>
						</section>
					</div>

					<div className="baobiao-right">
						<div className="zyx-label">
							<input type="checkbox" id="zyx-label" className="syz_input"/>
							<label for="zyx-label" className="syz_label">结存时间</label>
						</div>
						<div className="zyx-label-start">
							<span>起始时间</span>
							<select></select>
							<select></select>
						</div>
						<div className="zyx-label-end">
							<span>结束时间</span>
							<select></select>
							<select></select>
						</div>
					</div>
				</div>
				<table className="sta-table">
					<thead>
			            <tr className="sta-th">
			              <th>套帐</th>
			              <th>帐页号</th>
			              <th>品名</th>
			              <th>规格1</th>
			              <th>规格2</th>
			              <th>规格3</th>
			              <th>材质</th>
			              <th>厂家</th>
			              <th>初期件数</th>
			              <th>初期重量</th>
			              <th>入库件数</th>
			              <th>入库重量</th>
			              <th>出库件数</th>
			              <th>出库重量</th>
			              <th>期末重量</th>
			            </tr>
		            </thead>
		            <tbody>
			            {my_data}
		            </tbody>
		        </table>
			</div>
		</div>
    )
  }
}
