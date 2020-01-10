import React from 'react';

const Alert = ({hideAlert, alert}) => {
    console.log(alert);
    //console.log(hideAlert);

    return (
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hideAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert;
