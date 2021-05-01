import React from 'react';
import NewBoochForm from './NewBoochForm';
import BoochList from './BoochList';
import BoochDetail from  './BoochDetail';
import EditBoochForm from './EditBoochForm';
import BoochInfo from './BoochInfo';
import Grid from '@material-ui/core/Grid';

// const boochInfoButtonStyle = {
  // marginTop: '-50px',
  // marginBottom: '3%',
  // color: 'blue',
  // width: '100%',
  // marginLeft: 0,
// }

const boochInfoStyles = {
  // padding: '3%',
  backgroundColor: '#234A50',
}

const newBoochFormStyles = {
  // padding: '3%',
  backgroundColor: '#234A50',
}

const boochListStyles = {
  // padding: '3%',
  backgroundColor: '#234A50',
}

const boochListButtonStyle = {
  maxHeight: '50px',
}

export default class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBooch: null,
      mainBoochList: [],
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBooch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBoochToList = (newBooch) => {
    const newMainBoochList = this.state.mainBoochList.concat(newBooch);
    this.setState({
      mainBoochList: newMainBoochList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBooch = (id) => {
    const selectedBooch = this.state.mainBoochList.filter(booch => booch.id === id)[0];
    this.setState({
      selectedBooch: selectedBooch
    });
  }

  handleDeletingBooch = (id) => {
    const newMainBoochList = this.state.mainBoochList.filter(booch => booch.id !== id);
    this.setState({
      mainBoochList: newMainBoochList,
      selectedBooch: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({
      editing: true
    });
  }

  handleEditingBoochInList = (boochToEdit) => {
  const editedMainBoochList = this.state.mainBoochList
    .filter(booch => booch.id !== this.state.selectedBooch.id)
    .concat(boochToEdit);
  this.setState({
      mainBoochList: editedMainBoochList,
      editing: false,
      selectedBooch: boochToEdit
    });
  }

  handleBuyingBooch = () => {
    const selectedBooch = this.state.selectedBooch;
    if(selectedBooch.remainingPints > 10) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1});
      const newMainBoochList = this.state.mainBoochList
        .filter(booch => booch.id !== this.state.selectedBooch.id)
        .concat(decrementedBooch);
      this.setState({
        mainBoochList: newMainBoochList,
        selectedBooch: decrementedBooch
      });
    } else if (selectedBooch.remainingPints > 0 && selectedBooch.remainingPints <= 10) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1}, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Almost Empty!'});
      const newMainBoochList = this.state.mainBoochList
        .filter(booch => booch.id !== this.state.selectedBooch.id)
        .concat(decrementedBooch);
      this.setState({
        mainBoochList: newMainBoochList,
        selectedBooch: decrementedBooch
      });
    } else {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Out of Stock!'});
      const newMainBoochList = this.state.mainBoochList
        .filter(booch => booch.id !== this.state.selectedBooch.id)
        .concat(decrementedBooch);
      this.setState({
        mainBoochList: newMainBoochList,
        selectedBooch: decrementedBooch
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonStyle = null;
    let useStyles = null;
    if (this.state.editing) {      
      currentlyVisibleState = <EditBoochForm booch={this.state.selectedBooch} onEditBooch={this.handleEditingBoochInList} />
      buttonText = "Back";
    } else if (this.state.selectedBooch !== null) {
      currentlyVisibleState = <BoochDetail booch={this.state.selectedBooch} onClickingDelete={this.handleDeletingBooch} onClickingEdit={this.handleEditClick} onClickingBuy={this.handleBuyingBooch} />
      //back or submit? not sure yet
      buttonText = 'Back';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBoochForm onNewBoochCreation={this.handleAddingNewBoochToList} />
      buttonText = 'Back';
      // buttonStyle = boochInfoButtonStyle;
      useStyles = newBoochFormStyles;
    } else if (this.state.mainBoochList.length >= 1) {
      currentlyVisibleState = <BoochList boochList={this.state.mainBoochList} onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add a New Booch";
      buttonStyle = boochListButtonStyle;
      useStyles = boochListStyles;
    } else {
      currentlyVisibleState = <BoochInfo onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add a New Booch";
      // buttonStyle = boochInfoButtonStyle;
      useStyles = boochInfoStyles;
    }
    return (
      <>
        <Grid 
          container
          direction="row"
          // justify="center"
          // alignItems="stretch"
          style={useStyles}
        > 
          {currentlyVisibleState}
          {/* <Grid direction='row'> */}
            <button style={buttonStyle} onClick={this.handleClick}>{buttonText}</button>
          {/* </Grid> */}
        </Grid>
      </>
    );
  }
}