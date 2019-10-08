import React, {useState} from "react";
import {Button, Grid, TextField, Toolbar} from '@material-ui/core'
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import Collapse from '@material-ui/core/Collapse';
import styles from './Ticket.module.scss';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Drawer from "@material-ui/core/Drawer";
import FullInfoMobileContainer from "./FullInfoMoble/FullInfoMobile";
import RoomOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";


const mockProps = {
    Route: "Тюмень АВ — Криводанова 205 , Пригородное",
    Price: 22.99,
    Frequency: "Ежедневно",
    SeatsClass: "Жесткий",
    BaggageCapacity: 90,
    Duration: 17,
    Distance: 10.5,
    ArrivalTime: "2019-10-08 05:17:00",
    date: "2019-10-08",
    time: "05:00:00",
    Free_places: 39,
    stopList: [
        {
            stopPoint: "Тюмень АВ",
            stopDate: "26/05/2014",
            stopTime: "16:25",
            stopDuration: 15
        },
        {
            stopPoint: "Тюмень АВ",
            stopDate: "26/05/2014",
            stopTime: "16:25",
            stopDuration: 15
        },
        {
            stopPoint: "Тюмень АВ",
            stopDate: "26/05/2014",
            stopTime: "16:25",
            stopDuration: 15
        },
        {
            stopPoint: "Тюмень АВ",
            stopDate: "26/05/2014",
            stopTime: "16:25",
            stopDuration: 15
        },
    ]


}


const Ticket = (propsReal) => {
    const props = mockProps;

    //variables
    const {Route, Price, Frequency, SeatsClass, BaggageCapacity, Duration, Distance, ArrivalTime, date, time, Free_places} = props;
    const {routeVisible, openBuyModal, openMobileInfo} = propsReal;
    //arrays
    const { stopList } = props;
    //actions
    const {handleRouteVisibleChange, handleOpenBuyModal, handleCloseBuyModal, handleOpenMobileInfo, handleCloseMobileInfo} = propsReal;
    //vars fo rename
    const price = Price;
    const frequency = Frequency;
    const seatsClass = SeatsClass;
    const baggageCapacity = BaggageCapacity;
    const hoursDuration = Math.trunc(Duration / 60);
    const minutesDuration = Duration - hoursDuration * 60;
    const distance = Distance;
    const freePlaces = Free_places;

    //local components
    const stopListElements = stopList.map(stop => {
        return (
            <div>
                <div className={(styles.routeInfoRoute)}>
                    <div className={styles.routeInfoRouteDecorator}></div>
                    <span className={styles.routeInfoRoutePoint}> { `${stop.stopPoint} ${stop.stopDate} ${stop.stopTime} стоянка:${stop.stopDuration}`}</span>
                </div>
            </div>
        )
    });

    const fullMobileInfoContent = () => {
        return (
            <FullInfoMobileContainer props={props} handleCloseMobileInfo={handleCloseMobileInfo}/>
        )
    };

    let dateInstance = new Date();
    dateInstance.setTime(Date.parse(date +' '+ time));
    const departureHours = dateInstance.getHours();
    const departureMinutes = dateInstance.getMinutes();
    dateInstance.setTime(Date.parse(ArrivalTime));
    const arrivalHours = dateInstance.getHours();
    const arrivalMinutes = dateInstance.getMinutes();

    return (
        <Grid container
              justify="center"
              className={styles.ticketWrapper}
              alignItems="center"

        >
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10} className={styles.ticket} onClick={handleOpenMobileInfo}>
                <div className={styles.ticketTop}>
                    <Grid container direction="row" justify="space-between">
                        <div className={styles.ticketTime}>
                            <span className={styles.ticketTimeItem}>
                                {("0" + departureHours).slice(-2)} <sup> {("0" + departureMinutes).slice(-2)} </sup>
                            </span>
                            <span className={styles.ticketTimeItem}>
                               {("0" + arrivalHours).slice(-2)} <sup> {("0" + arrivalMinutes).slice(-2)} </sup>
                            </span>
                        </div>
                        <div>
                            <span className={styles.ticketBusItem}>{Route}</span>
                        </div>
                        <div>
                            <span className={styles.ticketPriceItem}>{`${(Math.ceil(price))} ₽`}</span>
                        </div>
                    </Grid>
                    <Grid container direction="row" justify="space-between">
                        <div>
                            <span className={styles.ticketTopDuration}>{`${hoursDuration}ч ${minutesDuration}мин.`}</span>
                        </div>
                        <div>
                            <span className={styles.ticketTopPlaces}>{`${freePlaces} мест свободно`}</span>
                        </div>
                    </Grid>
                </div>
                <div className={styles.ticketInfo}>
                    <EventBusyOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoAdditionalText}>{frequency}</span>
                    <AirlineSeatReclineExtraOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoAdditionalText}>{seatsClass}</span>
                    {/*<GpsFixedOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}> 15 остановок</span>
                <br/>*/}
                    <WorkOutlineOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoAdditionalText}>{baggageCapacity} мест багажа</span>
                </div>


                <div className={styles.ticketBottom}>
                    <Grid container direction="row" justify="space-around">
                        <div>
                            {/*TODO !!!!!! check props extension*/}
                            <span className={styles.ticketBottomItem}>26/05/19 Тюмень АВ </span>
                            <span className={styles.ticketBottomItem}>26/05/19 Антипино </span>
                        </div>


                        <div className={styles.ticketBottomButtonContainer}>
                            <Button variant="outlined" color="primary"
                                    className={styles.ticketBottomButtonContainerButton + ' ' + styles.ticketBottomButtonContainerButtonRoute}
                                    onClick={handleRouteVisibleChange}>Маршрут</Button>
                            <Button variant="outlined" color="primary"
                                    className={styles.ticketBottomButtonContainerButton + ' ' + styles.ticketBottomButtonContainerButtonBuy}
                                    onClick={handleOpenBuyModal}
                            >Купить билет</Button>
                        </div>
                    </Grid>
                </div>

                {/*  TODO not getting data already*/}
                <Collapse in={routeVisible}>
                    <div className={styles.routeInfo}>
                        {stopListElements}
                    </div>
                </Collapse>
            </Grid>


            <Dialog open={openBuyModal} onClose={handleCloseBuyModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Покупка билета</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Здесь будет лежать меню покупки билета
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseBuyModal} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleCloseBuyModal} color="primary">
                        Купить билет
                    </Button>
                </DialogActions>
            </Dialog>


            <Drawer anchor="right" open={openMobileInfo} variant="persistent">
                {fullMobileInfoContent('right')}
            </Drawer>

        </Grid>

    )
};


export default Ticket
