import React from 'react'
import cogoToast from 'cogo-toast';

const notify = ({ intent, message, ...otherProps }) => {
    const msg = (<div style={{
        fontSize: 16
    }}>
        <h3>{message}</h3>
    </div>)

    const notifiers = {
        info: cogoToast.info,
        success: cogoToast.success,
        warn: cogoToast.warn,
        loading: cogoToast.loading,
        error: cogoToast.error
    }

    let notifier = notifiers[intent]

    if (!notifier) {
        notifier = cogoToast.info
    }

    notifier(msg, {
        position: 'top-right',
        hideAfter: 6,
        ...otherProps
    });

}

export default notify