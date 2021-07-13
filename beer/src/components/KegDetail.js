import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingPurchase } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Brewery:{keg.brewery}</h3>
      <h3>Name:{keg.name}</h3>
      <h3>Alcohol Content: %{keg.aC}</h3>
      <h3>${keg.price}</h3>
      <h3>Pints in stock: {keg.numOfPints}</h3>
      <button onClick ={()=> onClickingEdit(keg.id) }> Update Keg</button>
      <button onClick ={()=> onClickingDelete(keg.id) }> Remove Keg</button>
      <button onClick ={()=> onClickingPurchase(keg.id) }> Purchase Pint</button>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}


export default KegDetail;