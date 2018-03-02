
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
// import * as UserAction from '../actions/UserAction'


class NewAccountContainer extends Component {
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
    //   actions,
    const {paramsBasket, dispatch} = this.props
    var childrenWrapper = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        child,
        {
          paramsBasket,
        //   actions,
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

NewAccountContainer.propTypes = {
}

function mapStateToProps(state) {
  return {
    paramsBasket: {
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // ...UserAction
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAccountContainer)

