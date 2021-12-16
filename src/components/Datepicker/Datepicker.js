import React from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core icons
import DayIcon from "components/Icons/DayIcon";

const styles = {
    icon: {
        border: "1px solid #ECEEF0", 
        borderRadius: '22px', 
    }
}; 

const useStyles = makeStyles(styles);

const Datepicker = (props) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                InputProps={{disableUnderline: true}}
                format="MM/dd/yyyy"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{'aria-label': 'change date',}}
                keyboardIcon={<DayIcon className={classes.icon}/>}
                placeholder='Date'
            />
        </MuiPickersUtilsProvider>
    )
}
export default Datepicker; 