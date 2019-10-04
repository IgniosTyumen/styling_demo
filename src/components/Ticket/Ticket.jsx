import React, {useState} from "react";
import {Button, Grid, Toolbar} from '@material-ui/core'
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import GestureIcon from '@material-ui/icons/Gesture';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Collapse from '@material-ui/core/Collapse';
import styles from './Ticket.module.scss';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';
import AppBar from "@material-ui/core/AppBar";


const Ticket = (props) => {
    const [routeVisible, setRouteVisible] = useState(false);
    const [openBuyModal, setOpenBuyModal] = React.useState(false);
    const [openMobileInfo, setOpenMobileInfo] = React.useState(false);
    const [routeVisibleMobile, setRouteVisibleMobile] = React.useState(false);

    const handleRouteOpen = () => {
        setRouteVisible(!routeVisible);
    };

    const handleClickBuyModalOpen = () => {
        setOpenBuyModal(true);
    };

    const handleClickBuyModalClose = () => {
        setOpenBuyModal(false);
    };

    const handleOpenMobileInfo = () => {
        console.log("opened");
        setOpenMobileInfo(true);
    };

    const handleCloseMobileInfo = () => {
        console.log("closed");
        setOpenMobileInfo(false);
    };

    const toggleRouteInfoMobile = () => {
        setRouteVisibleMobile(!routeVisibleMobile);
    };

    const fullMobileInfoContent = () => {
        return (
            <div className={styles.ticketMobileInfo}>
                <Fab onClick={handleCloseMobileInfo} color="primary" className={styles.ticketMobileInfoBackButton}>
                    <ArrowBackIosOutlinedIcon/>
                </Fab>
                <Typography className={styles.ticketMobileInfoPrice}>450 руб</Typography>
                <div className={styles.ticketMobileInfoTextContainer}>
                    <Typography className={styles.ticketMobileInfoText}>551 Тюмень-Тюмень</Typography>
                    <PinDropIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                    {!routeVisibleMobile && <Button variant="text" color="primary"
                                                    onClick={toggleRouteInfoMobile}
                                                    className={styles.ticketMobileInfoRouteButton}
                    >Маршрут</Button>}
                    <Collapse in={routeVisibleMobile}>
                        <div onClick={toggleRouteInfoMobile} className={styles.ticketMobileInfoRouteContainer}>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                            </div>
                        </div>
                    </Collapse>
                    <LocationOnIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoText}>Тюмень АВ 26/05/2014 16:25</span>
                </div>
                <div className={styles.ticketMobileInfoAdditional}>
                    <EventBusyOutlinedIcon className={styles.ticketMobileInfoIcon}/>Ежедневно<br/>
                    <AirlineSeatReclineExtraOutlinedIcon className={styles.ticketMobileInfoIcon}/>Мягкий<br/>
                    <GpsFixedOutlinedIcon className={styles.ticketMobileInfoIcon}/> 15 остановок<br/>
                    <WorkOutlineOutlinedIcon className={styles.ticketMobileInfoIcon}/> 46 мест багажа<br/>
                    <AvTimerIcon className={styles.ticketMobileInfoIcon}/> 24 часа в пути<br/>
                    <GestureIcon className={styles.ticketMobileInfoIcon}/> 765 км<br/>
                </div>
                <Button variant="outlined" color="primary"
                        onClick={handleClickBuyModalOpen}
                >Купить билет</Button>


            </div>
        )
    }


    return (
        <Grid container
              justify="center"
              className={styles.ticketWrapper}
              alignItems="center"

        >
            <Grid item xs={12} sm={6} className={styles.ticket} onClick={handleOpenMobileInfo}>
                <div className={styles.ticketTop}>
                    <Grid container direction="row" justify="space-between">
                        <div className={styles.ticketTime}>
                            <span className={styles.ticketTimeItem}>
                                18 <sup>30</sup>
                            </span>
                            <span className={styles.ticketTimeItem}>
                                23 <sup>30</sup>
                            </span>
                        </div>
                        <div>
                            <span className={styles.ticketBusItem}>301 Тюмень - Тюмень</span>
                        </div>
                        <div>
                            <span className={styles.ticketPriceItem}>450 р</span>
                        </div>
                    </Grid>
                    <Grid container direction="row" justify="space-between">
                        <div>
                            <span className={styles.ticketTopDuration}>15 часов</span>
                        </div>
                        <div>
                            <span className={styles.ticketTopPlaces}>25 мест</span>
                        </div>
                    </Grid>
                </div>
                <div className={styles.ticketInfo}>
                    <EventBusyOutlinedIcon className={styles.ticketInfoIcon}/>Ежедневно
                    <AirlineSeatReclineExtraOutlinedIcon className={styles.ticketInfoIcon}/>Мягкий
                    <GpsFixedOutlinedIcon className={styles.ticketInfoIcon}/> 15 остановок
                    <WorkOutlineOutlinedIcon className={styles.ticketInfoIcon}/> 46 мест багажа
                </div>
                <div className={styles.ticketBottom}>
                    <Grid container direction="row" justify="space-around">
                        <div>
                            <span className={styles.ticketBottomItem}>26/05/19 Тюмень АВ </span>
                            <span className={styles.ticketBottomItem}>26/05/19 Антипино </span>
                        </div>
                        <div className={styles.ticketBottomButtonContainer}>
                            <Button variant="outlined" color="primary"
                                    className={styles.ticketBottomButtonContainerButton + ' ' + styles.ticketBottomButtonContainerButtonRoute}
                                    onClick={handleRouteOpen}>Маршрут</Button>
                            <Button variant="outlined" color="primary"
                                    className={styles.ticketBottomButtonContainerButton + ' ' + styles.ticketBottomButtonContainerButtonBuy}
                                    onClick={handleClickBuyModalOpen}
                            >Купить билет</Button>
                        </div>
                    </Grid>
                </div>
                <Collapse in={routeVisible}>
                    <div className={styles.routeInfo}>
                        <div className={(styles.routeInfoRoute)}>
                            <div className={styles.routeInfoRouteDecorator}></div>
                            <span className={styles.routeInfoRoutePoint}> 16:25 Тюмень АВ Стоянка: 15 мин</span>
                        </div>
                        <div className={styles.routeInfoRoute}>
                            <div className={styles.routeInfoRouteDecorator}></div>
                            <span className={styles.routeInfoRoutePoint}> 16:25 Тюмень АВ Стоянка: 15 мин</span>
                        </div>
                        <div className={styles.routeInfoRoute}>
                            <div className={styles.routeInfoRouteDecorator}></div>
                            <span className={styles.routeInfoRoutePoint}> 16:25 Тюмень АВ Стоянка: 15 мин</span>
                        </div>
                        <div className={styles.routeInfoRoute}>
                            <div className={styles.routeInfoRouteDecorator}></div>
                            <span className={styles.routeInfoRoutePoint}> 16:25 Тюмень АВ Стоянка: 15 мин</span>
                        </div>

                        <div className={styles.routeInfoRoute}>
                            <div
                                className={styles.routeInfoRouteDecorator + ' ' + styles.routeInfoRouteDecoratorLast}></div>
                            <span className={styles.routeInfoRoutePoint}> 16:25 Тюмень АВ Стоянка: 15 мин</span>
                        </div>
                    </div>
                </Collapse>
            </Grid>


            <Dialog open={openBuyModal} onClose={handleClickBuyModalClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Покупка билета</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Здесь будет лежать меню покупки билета
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickBuyModalClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClickBuyModalClose} color="primary">
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
