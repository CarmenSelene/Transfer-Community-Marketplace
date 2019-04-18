import React, { Component } from 'react';

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#5472a3',
    padding: '15px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    margin: '0px 0px 25px 0px',
    padding: '0px 0px 25px 0px',
    cursor: 'pointer',
    borderRadius: '25%',
    border: 'none',
    width: 'auto',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


class Dialog extends Component {
    render() {
        let dialog = (
            <div className="text-dark d-block" style={dialogStyles}>
                <button style={dialogCloseButtonStyles} className="d-inline-block" onClick={this.props.onClose}>X</button>

                <div>{this.props.children}</div>
            </div>
        );

        if (! this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Dialog;
