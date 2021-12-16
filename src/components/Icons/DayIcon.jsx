import React from 'react';
import {SvgIcon} from '@material-ui/core';

function DayIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M5.09,2.09v.77H2v17H19v-17H15.91V2.09H14.36v.77H6.64V2.09ZM3.55,4.41H5.09v.77H6.64V4.41h7.72v.77h1.55V4.41h1.54V6H3.55Zm0,3.09h13.9V18.32H3.55ZM8.18,9.05v1.54H9.73V9.05Zm3.09,0v1.54h1.55V9.05Zm3.09,0v1.54h1.55V9.05ZM5.09,12.14v1.54H6.64V12.14Zm3.09,0v1.54H9.73V12.14Zm3.09,0v1.54h1.55V12.14Zm3.09,0v1.54h1.55V12.14ZM5.09,15.23v1.54H15.91V15.23Z"/>
      </SvgIcon>
    );
}

export default DayIcon;