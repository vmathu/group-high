import React from "react";
import { Col } from 'reactstrap';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// core components
import Datepicker from "components/Datepicker/Datepicker.js";

// @material-ui/icons
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { whiteColor } from "assets/jss/material-dashboard-pro-react.js";

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
    button: {
        background: '#27AE60', 
        borderRadius: '22px', 
        color: 'white !important', 
        textTransform: "capitalize", 
        marginLeft: 8, 
        "& .MuiSvgIcon-root": {
            color: 'white !important'
        }, 
        height: 42, 
        "& .MuiButton-startIcon": {
            marginLeft: -15, 
            marginRight: 0
        }
    }
}; 

const useStyles = makeStyles(styles);

const RightItems = (props) => {
    const classes = useStyles();

    return (
        <Col className={classes.alignRight}>
            <div>
                <Datepicker/>
                <IconButton className={classes.iconButton}>
                    <MoreHorizOutlinedIcon />
                </IconButton>
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<FiberManualRecordIcon />}
                >
                    Live
                </Button>
            </div>
        </Col>
    )
}
export default RightItems; 