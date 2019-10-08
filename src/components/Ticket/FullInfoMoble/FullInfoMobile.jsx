import React, {memo} from "react";
import styles from "./FullInfoMobile.module.scss";

import AppBar from "@material-ui/core/AppBar/AppBar";
import {Button, Toolbar} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import GestureIcon from '@material-ui/icons/Gesture';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';


const mockProps = {
    Route: "Тюмень АВ — Криводанова 205 , Пригородное",
    Price: 22.99,
    Frequency: "Ежедневно",
    SeatsClass: "Жесткий",
    BaggageCapacity: 90,
    Duration: 17,
    Distance: 10.5,
    ArrivalTime: "2019-10-08 05:17:00",
    Date: "2019-10-08",
    Time: "05:00:00",
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


const FullInfoMobile = (propsReal) => {
    const props = mockProps;
    //variables
    const {Route, Price, Frequency, SeatsClass, BaggageCapacity, Duration, Distance, ArrivalTime, Date, Time, Free_places} = props;
    //arrays
    const { stopList } = props;
    //actions
    const {handleCloseMobileInfo, handleClickBuyModalOpen} = propsReal;

    //vars fo rename
    const price = Price;
    const frequency = Frequency;
    const seatsClass = SeatsClass;
    const baggageCapacity = BaggageCapacity;
    const hoursDuration = Math.trunc(Duration / 60);
    const minutesDuration = Duration - hoursDuration * 60;
    const distance = Distance;
    const freePlaces = Free_places;

    //local hooks
    const [routeVisibleMobile, setRouteVisibleMobile] = React.useState(false);

    //local hooks callbacks
    const toggleRouteInfoMobile = () => {
        setRouteVisibleMobile(!routeVisibleMobile);
    };

    //local components
    const stopListElements = stopList.map(stop => {
        return (
            <div>
                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoText}><span
                    className={styles.ticketMobileInfoAdditionalText}>{ `${stop.stopPoint} ${stop.stopDate} ${stop.stopTime} стоянка:${stop.stopDuration}`}</span></span>
            </div>
        )
    })

    return (
        //Блок заголвка/маршрута
        <div className={styles.ticketMobileInfo}>
            <AppBar position="relative" className={styles.ticketMobileInfoHeader}>
                <Toolbar>
                    {/*Проверить отображение кнопки*/}
                    <Button color="inherit" onClick={handleCloseMobileInfo}><ArrowBackIosIcon/></Button>
                    <Typography variant="h6" color="inherit" className={styles.ticketMobileInfoDirection}>
                        {Route}
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*Остальные блоки разделены Divider'ами*/}
            <Typography className={styles.ticketMobileInfoPrice}>{`${(Math.ceil(price))} ₽`}</Typography>
            <Typography className={styles.ticketMobileInfoPrice}>{`${freePlaces} мест свободно`}</Typography>

            <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>

            <div className={styles.ticketMobileInfoTextContainer}>
                <Typography className={styles.ticketMobileInfoText}>{Route}</Typography>
            </div>

            <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>

            <div className={styles.ticketMobileInfoAdditional}>
                <EventBusyOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}>{frequency}</span>
                <br/>
                <AirlineSeatReclineExtraOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}>{seatsClass}</span
                ><br/>
                {/*<GpsFixedOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}> 15 остановок</span>
                <br/>*/}
                <WorkOutlineOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}>{baggageCapacity} мест багажа</span>
                <br/>
                <AvTimerIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}>{hoursDuration}ч {minutesDuration}мин. в пути</span>
                <br/>
                <GestureIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoAdditionalText}> {distance} км</span>
                <br/>
            </div>

            <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
            <div className={styles.ticketMobileInfoAdditional}>
                <LocationOnIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoText}><span
                    className={styles.ticketMobileInfoAdditionalText}>{Date} {Time}</span></span>
                {!routeVisibleMobile && <Button variant="text" color="primary"
                                                onClick={toggleRouteInfoMobile}
                                                className={styles.ticketMobileInfoRouteButton}
                >Полный маршрут</Button>}
                <Collapse in={routeVisibleMobile}>
                    <div onClick={toggleRouteInfoMobile} className={styles.ticketMobileInfoRouteContainer}>
                        {stopListElements}
                    </div>
                </Collapse>
                <PinDropIcon className={styles.ticketMobileInfoIcon}/>
                <span className={styles.ticketMobileInfoText}><span
                    className={styles.ticketMobileInfoAdditionalText}>{ArrivalTime}</span></span>
            </div>
            <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
            <Button variant="outlined" color="primary"
                    onClick={handleClickBuyModalOpen}
                    className={styles.ticketMobileInfoBuyButton}
            >Купить билет</Button>
        </div>
    );
};

export default memo(FullInfoMobile);
