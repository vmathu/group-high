import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import InputBase from "@material-ui/core/InputBase";

// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core icons
import FilterIcon from "components/Icons/FilterIcon";

import { whiteColor } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
    iconButton: {
    padding: 0, 
    marginLeft: 8, 
    background: whiteColor, 
    border: "1px solid #ECEEF0"
    }, 
    root: {
        display: 'flex'
    }
}; 

const useStyles = makeStyles(styles);

const RightItems = (props) => {
    const classes = useStyles();

    return (
        <span className={classes.root}>
            <InputBase
                placeholder={props.text}
                startAdornment={<Search />}
            />
            <IconButton className={classes.iconButton}>
                <FilterIcon />
            </IconButton>
        </span>
    )
}
export default RightItems; 