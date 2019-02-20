import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Centrifuge from "zinnionrifuge";

class Manager extends Centrifuge {
  constructor(...args) {
    super(...args);
    this.subscriptions = {};
  }

  subscribe(channel, events) {
    this.subscriptions[channel] = super.subscribe(channel, events);

    return this.subscriptions[channel];
  }

  getSubscription(channel) {
    const sub = this.subscriptions[channel];
    if (!sub) {
      return null;
    }

    return sub;
  }
}

export default class Provider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onConnect: PropTypes.func,
    url: PropTypes.string.isRequired,
    config: PropTypes.shape({
      insecure: PropTypes.bool
    })
  };

  static defaultProps = {
    onConnect: null,
    config: {
      insecure: false
    }
  };

  static childContextTypes = {
    zinnion: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.zinnion = new Manager(props.url, props.config);
  }

  componentDidMount = () => {
    this.zinnion.connect(this.props.onConnect);
  };

  getChildContext = () => ({ zinnion: this.zinnion });

  render = () => Children.only(this.props.children);
}
