import React from "react";
import { Col } from 'reactstrap';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

// core icons
import ColumIcon from "components/Icons/ColumIcon";

import { whiteColor } from "assets/jss/material-dashboard-pro-react.js";

import AlertSearch from "components/AlertSearch/AlertSearch.js"

const styles = {
    iconButton: {
    padding: 0, 
    marginLeft: 8, 
    background: whiteColor, 
    border: "1px solid #ECEEF0"
    }, 
    alignRight: {
        display: 'flex', 
        justifyContent: 'flex-end'
    }, 
    root: {
        display: 'flex'
    }
}; 

const useStyles = makeStyles(styles);

const RightItems = (props) => {
    const classes = useStyles();

    return (
        <Col className={classes.alignRight}>
            <div className={classes.root}>
                <AlertSearch text='Search incidents' />
                <IconButton className={classes.iconButton}>
                    <ColumIcon />
                </IconButton>
            </div>
        </Col>
    )
}
export default RightItems; 