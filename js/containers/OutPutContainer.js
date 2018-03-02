import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as UserAction from '../actions/UserAction'

class OutPutContainer extends Component {
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

OutPutContainer.propTypes = {
}

//接受state作为参数,返回一个对象，建立一个从（外部的）state对象到（UI组件）props对象印射关系
function mapStateToProps(state) {
  return {
    paramsBasket: {
    }
  }
}

//用于建立UI组件的参数到store.dispatch方法的印射。（定义了哪些用户操作应该当作action，传给store）
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...UserAction}, dispatch)
  }
}

//用于从UI组件生成容器组件，将UI组件（MainBriefContainer）和逻辑组件连起来，生成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutPutContainer)

