import React from 'react';
import {SvgIcon} from '@material-ui/core';

function StatusAction(props) {
    return (
      <SvgIcon {...props}>
        <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#E53935"/>
        <path d="M7.5 11.7632L16.5 7.5L12.2368 16.5L11.2895 12.7105L7.5 11.7632Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </SvgIcon>
    );
}

export default StatusAction;