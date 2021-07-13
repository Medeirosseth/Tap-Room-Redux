import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail'
import NewKegForm from './NewKegForm'

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state =  {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg!= null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingKegInlist = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg : selectedKeg})
  }

  handleDeletingkeg = (id) => {
    const newMasterKegList = 
      this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    })
  }
  
  handlePurchase = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.numOfPints >1){
      selectedKeg.numOfPints -=1
    } else {
      selectedKeg.numOfPints = "All Out"
    }
    this.setState({selectedKeg : selectedKeg})
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
  
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
        <KegDetail 
          keg = { this.state.selectedKeg } 
          onClickingDelete = { this.handleDeletingkeg } 
          onClickingEdit  = { this.handleEditClick }
          onClickingPurchase = { this.handlePurchase}
        />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewKegForm 
          onNewKegCreation={this.handleAddingNewKegToList}  />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList 
        kegList={this.state.masterKegList} 
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
      
}




export default KegControl;