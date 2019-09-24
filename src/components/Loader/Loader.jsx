import React from "react";
import styles from "./Loader.module.css"
import busesAnimation from './../../assets/images/animation/buses-animation.png';

export const Loader = () => {
    return (
        <>
            <div className={styles.loader}>
                <img src={busesAnimation} className={styles.animationLoader}/>
            </div>
        </>
    )
};
