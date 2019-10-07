import React, {useState} from "react";
import {Button, Grid, TextField, Toolbar} from '@material-ui/core'
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
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";


const Ticket = (props) => {
    const [routeVisible, setRouteVisible] = useState(false);
    const [openBuyModal, setOpenBuyModal] = React.useState(false);
    const [openMobileInfo, setOpenMobileInfo] = React.useState(false);
    const [routeVisibleMobile, setRouteVisibleMobile] = React.useState(false);
    const [luggage, setLuggage] = React.useState(0);

    const handleRouteOpen = () => {
        setRouteVisible(!routeVisible);
    };

    const handleLuggageChange = (event) => {
        const number = event.target.value;
        setLuggage(number);
    } ;

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
                <AppBar position="relative" className={styles.ticketMobileInfoHeader}>
                    <Toolbar>
                        <Button color="inherit" onClick={handleCloseMobileInfo} ><ArrowBackIosOutlinedIcon/></Button>
                        <Typography variant="h6" color="inherit" className={styles.ticketMobileInfoDirection}>
                            Тюмень-Антипино
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Typography className={styles.ticketMobileInfoPrice}>450 руб</Typography>
                <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
                <div className={styles.ticketMobileInfoTextContainer}>
                    <Typography className={styles.ticketMobileInfoText}>551 Тюмень-Тюмень</Typography>

                </div>
                <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
                <div className={styles.ticketMobileInfoAdditional}>
                    <EventBusyOutlinedIcon className={styles.ticketMobileInfoIcon}/><span className={styles.ticketMobileInfoAdditionalText}>Ежедневно</span><br/>
                    <AirlineSeatReclineExtraOutlinedIcon className={styles.ticketMobileInfoIcon}/><span className={styles.ticketMobileInfoAdditionalText}>Мягкий</span><br/>
                    <GpsFixedOutlinedIcon className={styles.ticketMobileInfoIcon}/><span className={styles.ticketMobileInfoAdditionalText}> 15 остановок</span><br/>
                    <WorkOutlineOutlinedIcon className={styles.ticketMobileInfoIcon}/> <span className={styles.ticketMobileInfoAdditionalText}>46 мест багажа</span><br/>
                    <AvTimerIcon className={styles.ticketMobileInfoIcon}/> <span className={styles.ticketMobileInfoAdditionalText}>24 часа в пути</span><br/>
                    <GestureIcon className={styles.ticketMobileInfoIcon}/><span className={styles.ticketMobileInfoAdditionalText}> 765 км</span><br/>
                </div>
                <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
                <div className={styles.ticketMobileInfoAdditional}>
                    <LocationOnIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25</span></span>
                    {!routeVisibleMobile && <Button variant="text" color="primary"
                                                    onClick={toggleRouteInfoMobile}
                                                    className={styles.ticketMobileInfoRouteButton}
                    >Полный маршрут</Button>}
                    <Collapse in={routeVisibleMobile}>
                        <div onClick={toggleRouteInfoMobile} className={styles.ticketMobileInfoRouteContainer}>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25, стоянка 15 мин.</span></span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25, стоянка 15 мин.</span></span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25, стоянка 15 мин.</span></span>
                            </div>
                            <div>
                                <RoomOutlinedIcon className={styles.ticketMobileInfoIcon}/>
                                <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25, стоянка 15 мин.</span></span>
                            </div>
                        </div>
                    </Collapse>
                    <PinDropIcon className={styles.ticketMobileInfoIcon}/>
                    <span className={styles.ticketMobileInfoText}><span className={styles.ticketMobileInfoAdditionalText}>Тюмень АВ 26/05/2014 16:25</span></span>
                </div>
                <Divider variant="fullWidth" className={styles.ticketMobileInfoDivider}/>
                <Button variant="outlined" color="primary"
                        onClick={handleClickBuyModalOpen}
                        className={styles.ticketMobileInfoBuyButton}
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
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10} className={styles.ticket} onClick={handleOpenMobileInfo}>
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
