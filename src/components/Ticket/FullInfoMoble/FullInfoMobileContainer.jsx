import React from "react";
import {connect} from "react-redux";
import FullInfoMobile from "./FullInfoMobile";


const FullInfoMobileContainer = () => {

    return(
        <>
      <FullInfoMobile/>
      </>
    );
}

const mapStateToProps = (state) =>{

};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(FullInfoMobileContainer);
export default FullInfoMobileContainer;
