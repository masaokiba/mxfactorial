import React, { Component, PropTypes } from 'react';

import './RequestPopup.scss';

export default class RequestPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expirationTime: 0
    };
    this.handleRequest = this.handleRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflowY = '';
  }

  handleRequest() {
    this.props.handleRequest(this.state.expirationTime);
  }

  handleChange(event) {
    this.setState({
      expirationTime: Number(event.target.value) || 0
    });
  }

  render() {
    const { handleCancel } = this.props;
    const buttonClass = 'indicator radius5 text-center font22 modal__btn';

    return (
      <div className='transaction-modal'>
        <div className='transaction-popup'>
          <div>
            Expiration:
          </div>
          <div className='indicator radius5 font22 text-right'>
            <span/>
            <input type='number' className='expiration text-right' onChange={ this.handleChange }/>
            <span>
              day{ this.state.expirationTime > 1 ? 's' : null }
            </span>
          </div>
          <div className='modal__footer text-center'>
            <button className={ `${buttonClass} btn__cancel` } onClick={ handleCancel }>Cancel</button>
            <button className={ `${buttonClass} btn__ok` }
              onClick={ this.handleRequest }>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

RequestPopup.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired
};
