import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-gh2project';

export default class ReactGh2project extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    href: PropTypes.string
  };

  static defaultProps = {};

  get href() {
    const { href } = this.props;
    return href || `https://github.com/afeiship${window.location.pathname}`;
  }

  constructor(inProps) {
    super(inProps);
    this.state = { href: inProps.href };
  }

  componentDidMount() {
    this.setState({ href: this.href });
  }

  render() {
    const { className, href, ...props } = this.props;
    const _href = this.state.href;

    return (
      <a
        data-component={CLASS_NAME}
        href={_href}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <img alt="" src="https://simpleicons.org/icons/github.svg" />
      </a>
    );
  }
}

