/**
 * Created by 张宇浩 on 2017/11/13.
 */
//待处理任务
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as UserAction from '../../actions/UserAction'

class WaitingTaskContainer extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    const {paramsBasket, actions, dispatch} = this.props
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
          actions,
          dispatch
        })
    })

    return (
      <div>
        {childrenWrapper}
      </div>
    )
  }
}

WaitingTaskContainer.PropTypes = {}

function mapStateToProps(state) {
  return {
    paramsBasket: {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...UserAction}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingTaskContainer)
