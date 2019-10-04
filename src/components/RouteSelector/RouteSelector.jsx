import React, {useState} from "react";
import {FormControl, InputLabel, Input} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import 'antd/dist/antd.css';
import styles from './RouteSelector.module.scss'
import DateFnsUtils from '@date-io/date-fns';
import './RouteSelector.scss';


export const RouteSelector = (props) => {

    const [selectedDate, setSelectedDate] = useState(Date.now());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={styles.routeSelectorWrapper}>
            <FormControl className={styles.routeSelector}>
                <Input id="departureInput" aria-describedby="departureInputText" className={styles.routeSelectorInput} placeholder="Станция отправления" disableUnderline>
                </Input>
            </FormControl>
            <FormControl className={styles.routeSelector}>
                <Input id="arrivalInput" aria-describedby="departureInputText" className={styles.routeSelectorInput} placeholder="Станция назначения" disableUnderline>
                </Input>
            </FormControl>
            <div className={styles.routeSelectorDate}>
                    <KeyboardDatePicker

                        id="departureTime"
                        format="dd/MM/yy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className={styles.routeSelectorDateInput}
                        KeyboardButtonProps={{
                            'aria-label': 'Дата поездки',
                        }}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />

            </div>
        </div>
        </MuiPickersUtilsProvider>
    )
};
