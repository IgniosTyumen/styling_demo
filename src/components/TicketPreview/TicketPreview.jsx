import React from 'react'
import styles from "./TicketPreview.module.scss"

export const TicketPreview = (props) => {
    let statusStyle ='';
    if (props.payed) {
        statusStyle= `${styles.ticketStatusPayed}`
    }
    else {
        statusStyle = `${styles.ticketStatusNonPayed}`
    }

    return(
      <div className={styles.ticketCard}>
          <div className={styles.ticketHeader +' '+ statusStyle}>
              <p className={styles.ticketStatus}>Ожидает оплату</p>
              <p className={styles.ticketNumber}> Билет № 545646546</p>
          </div>
          <div className={styles.ticketBody}>
              <div className={styles.ticketShort}>
                  <div className={styles.ticketDepartureDate + ' '+ styles.ticketField}>
                      <span>Омск, АВ - Астана, АВ</span>
                  </div>
                  <div className={styles.ticketDepartureDate + ' '+ styles.ticketField}>
                      <span>22.04.2019 22:15</span>
                  </div>
                  <div className={styles.ticketDepartureDate + ' '+ styles.ticketField}>
                      <span>№ 551 место 25 платформа 2</span>
                  </div>
                  <div className={styles.ticketDepartureDate + ' '+ styles.ticketField}>
                      <span>Цена: 5555руб. 22коп.</span>
                  </div>
                  <button className={styles.ticketButton + ' ' + styles.routeButtonSm} type="button">Маршрут</button>


              </div>


              <div className={styles.ticketDeparture}>
                  <span className={styles.ticketDepartureTitle}>Отправление:</span>
                  <div className={styles.ticketDepartureDate + ' '+ styles.ticketField}>
                      <span>Дата: 22.04.2019</span>
                  </div>
                  <div className={styles.ticketDepartureTime + ' '+ styles.ticketField}>
                      <span>Время: 22:15</span>
                  </div>
                  <div className={styles.ticketDepartureCity + ' '+ styles.ticketField}>
                      <span> Омск, АВ</span>
                  </div>
              </div>

              <div className={styles.ticketArrival}>
                  <span className={styles.ticketArrivalTitle}>Прибытие:</span>
                  <div className={styles.ticketArrivalDate + ' '+ styles.ticketField}>
                      <span>Дата: 23.04.2019</span>
                  </div>
                  <div className={styles.ticketArrivalTime + ' '+ styles.ticketField}>
                      <span>Время: 23:15</span>
                  </div>
                  <div className={styles.ticketArrivalCity + ' '+ styles.ticketField}>
                      <span>Астана, АВ</span>
                  </div>
              </div>

              <div className={styles.ticketBus}>
                  <span className={styles.ticketBusTitle}>Автобус:</span>
                  <div className={styles.ticketBusNumber + ' '+ styles.ticketField}>
                      <span>Маршрут: 551</span>
                  </div>
                  <div className={styles.ticketBusSeat + ' '+ styles.ticketField}>
                      <span>Место: 25</span>
                  </div>
                  <div className={styles.ticketBusPlatform + ' '+ styles.ticketField}>
                      <span>Платформа: 2</span>
                  </div>
                  <div className={styles.ticketBusPrice + ' '+ styles.ticketField}>
                      <span>Цена: 5555руб. 22коп.</span>
                  </div>
              </div>
          </div>
          <div className={styles.ticketButtonGroup +' '+ statusStyle}>
              <button className={styles.ticketButton + ' ' + styles.blankButton} type="button">Бланк</button>
              <button className={styles.ticketButton + ' ' + styles.routeButton} type="button">Маршрут</button>
              <button className={styles.ticketButton + ' ' + styles.returnButton} type="button">Возврат</button>
              <button className={styles.ticketButton + ' ' + styles.buyButton} type="button">Оплатить</button>
          </div>
      </div>

    )
};
