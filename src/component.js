import React, { Component } from 'react'
import PropTypes from 'prop-types'

const zinnion = (ComponentToWrap) => {
  return class extends Component {
    static contextTypes = {
      zinnion: PropTypes.object.isRequired
    }

    render = () => <ComponentToWrap {...this.props} zinnion={this.context.zinnion} />
  }
}

export default zinnion
