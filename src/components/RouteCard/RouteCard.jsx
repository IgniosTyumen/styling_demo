import React from 'react'
import styles from "./RouteCard.module.scss"
import logoLuggage from "./../../assets/images/png/luggage.png"
import logoCustoms from "./../../assets/images/png/customs.png"
import logoCheap from "./../../assets/images/png/cheap.png"
import logoStops from "./../../assets/images/png/stops.png"
import logoComfort from "./../../assets/images/png/comfort.png"
import logoRoute from "./../../assets/images/png/route.png"
import logoSchedule from "./../../assets/images/png/schedule.png"
import logoTimezone from "./../../assets/images/png/timezone.png"
import logoSeats from "./../../assets/images/png/freeseats.png"
import logoFast from "./../../assets/images/png/fast.png"

export const RouteCard = (props) => {
    return (
        <div className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.travel}>
                    <p className={styles.price}> 10 000<span>₽</span></p>
                    <div className={styles.travelRoute}>
                        <div className={styles.travelStart}>
                            <div className={styles.travelStartLogoContainer}>
                                <span className={styles.travelEndLogoContainerText}> 12:59 </span>
                            </div>
                            <div className={styles.travelStartData}>
                                <div className={styles.travelDataCity}>Омск, автовокзал</div>
                                <span className={styles.travelDataSeparator}> / </span>
                                <div className={styles.travelDataTime}>25.01.2222</div>
                            </div>
                        </div>
                        <div className={styles.travelEnd}>
                            <div className={styles.travelEndLogoContainer}>
                                <span className={styles.travelEndLogoContainerText}> 16:59 </span>
                            </div>
                            <div className={styles.travelEndData}>
                                <div className={styles.travelDataCity}>Астана, автовокзал</div>
                                <span className={styles.travelDataSeparator}> / </span>
                                <div className={styles.travelDataTime}>26.01.2229</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.additionalInfo}>
                    <div className={styles.additionalInfoMain}>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoSeats} className={styles.iconFooter}/>
                            <span>25 свободно</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoRoute} className={styles.iconFooter}/>
                            <span>765км 25ч 15 мин</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoStops} className={styles.iconFooter}/>
                            <span>23 остановки</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoComfort} className={styles.iconFooter}/>
                            <span>Мягкие</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoCustoms} className={styles.iconFooter}/>
                        </div>
                    </div>
                    <div className={styles.additionalInfoSecondary}>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoCheap} className={styles.iconFooter}/>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoFast} className={styles.iconFooter}/>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoTimezone} className={styles.iconFooter}/>
                            <span>+2 часа</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoLuggage} className={styles.iconFooter}/>
                            <span>46 мест</span>
                        </div>
                        <div className={styles.additionalInfoContent}>
                            <img src={logoSchedule} className={styles.iconFooter}/>
                            <span>Ежедневно</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.cardButton + ' ' + styles.infoButton} type="button">Маршрут</button>
                <button className={styles.cardButton + ' ' + styles.buyButton} type="button">Купить</button>
            </div>
        </div>
    )

};
