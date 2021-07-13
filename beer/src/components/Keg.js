import React from "react"
import PropTypes from "prop-types";


function Keg(props){

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>Brewed by {props.brewery}</h3>
        <h3>Beer Name: {props.name}</h3>
        <h3>${props.price}</h3>
        <h3>Alcohol Content: %{props.aC}</h3>
        <h3>Pints in stock: {props.numOfPints}</h3>
        <hr />
      </div>
    </React.Fragment>
  )
}




Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  aC: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;