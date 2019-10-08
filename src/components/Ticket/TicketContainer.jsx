import React, {memo, useState} from "react";
import Ticket from "./Ticket";

const TicketContainer = () => {

    const [routeVisible, setRouteVisible] = useState(false);
    const [openBuyModal, setOpenBuyModal] = React.useState(false);
    const [openMobileInfo, setOpenMobileInfo] = React.useState(false);


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
        setOpenMobileInfo(true);
    };

    const handleCloseMobileInfo = () => {
        setOpenMobileInfo(false);
    };

    return(
        <Ticket
            routeVisible={routeVisible}
            openBuyModal={openBuyModal}
            openMobileInfo={openMobileInfo}

            handleRouteVisibleChange={handleRouteOpen}
            handleOpenBuyModal={handleClickBuyModalOpen}
            handleCloseBuyModal={handleClickBuyModalClose}
            handleOpenMobileInfo={handleOpenMobileInfo}
            handleCloseMobileInfo={handleCloseMobileInfo}

        />
    )
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);
export default memo(TicketContainer);
