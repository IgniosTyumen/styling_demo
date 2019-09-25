import React, {useState} from "react";
import styles from './RouteSelector.module.scss';
import {format} from 'date-fns/esm';

export const RouteSelector = () => {
    const [animatedArrival, setAnimatedArrival] = useState(false);
    const [animatedCalendar, setAnimatedCalendar] = useState(false);

    const onClickDepartureHandler = () => {
        setAnimatedArrival(true)
    };

    const onClickArrivalHandler = () => {
        setAnimatedCalendar(true)
    };

    const current = Date.now()
    return (
        <div className={styles.inputFieldContainer}>
            <div className={styles.inputFieldRoutes}>
                <select  placeholder="Откуда"
                        className={styles.inputField + ' ' + styles.inputFieldDeparture}
                        onClick={onClickDepartureHandler}>
                    <option>Откуда</option>
                    <option>1</option>
                </select>
                <select placeholder="Куда"
                        className={`${styles.inputField} ${styles.inputFieldArrival} ${animatedArrival ? styles.inputFieldArrivalAnimate : ''} `}
                        onClick={onClickArrivalHandler}>
                    <option>Куда</option>
                    <option>1</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder={format(current, 'dd/MM/yy')}
                       className={`${styles.inputField} ${styles.inputFieldCalendar} ${animatedCalendar ? styles.inputFieldCalendarAnimate : ''} `}/>
            </div>
        </div>
    )
};
