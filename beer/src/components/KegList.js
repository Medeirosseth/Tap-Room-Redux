import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
    return (
        <React.Fragment>
            <hr />
        {props.kegList.map((keg) =>
            <Keg
                whenKegClicked = { props.onKegSelection }
                brewery={keg.brewery}
                name={keg.name}
                price={keg.price}
                aC={keg.aC}
                numOfPints={keg.numOfPints}
                id={keg.id}
                key={keg.id}/>
        )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.object,
    onKegSelection: PropTypes.func
};

export default KegList;