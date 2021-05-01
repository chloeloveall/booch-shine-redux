import React from 'react';
import NewBoochForm from './NewBoochForm';
import BoochList from './BoochList';
import BoochDetail from  './BoochDetail';
import EditBoochForm from './EditBoochForm';
import BoochInfo from './BoochInfo';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import Booch from './Booch';
import PropTypes from "prop-types";
import * as a from '../../actions';

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

class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBooch: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch !== null) {
      this.setState({
        selectedBooch: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewBoochToList = (newBooch) => {
    const { dispatch } = this.props;
    const action = a.addBooch(newBooch);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBooch = (id) => {
    const selectedBooch = this.props.mainBoochList[id];
    this.setState({selectedBooch: selectedBooch});
  }

  handleDeletingBooch = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBooch(id);
    dispatch(action);
    this.setState({selectedBooch: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({
      editing: true
    });
  }

  handleEditingBoochInList = (boochToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBooch(boochToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedBooch: null
    });
  }

  handleBuyingBooch = () => {
    const selectedBooch = this.state.selectedBooch;
    if(selectedBooch.remainingPints > 11) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1});
      this.handleEditingBoochInList(decrementedBooch);
      this.setState({
        selectedBooch: decrementedBooch
      });
    } else if (selectedBooch.remainingPints >= 1 && selectedBooch.remainingPints <= 11) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1}, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Almost Empty!'});
      this.handleEditingBoochInList(decrementedBooch);
      this.setState({
        selectedBooch: decrementedBooch
      });
    } else if (selectedBooch.remainingPints <= 0) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Out of Stock!'});
      this.handleEditingBoochInList(decrementedBooch);
      this.setState({
        selectedBooch: decrementedBooch
      });
    }
  }

  // handleBuyingBooch = () => {
  //   const selectedBooch = this.state.selectedBooch;
  //   if(selectedBooch.remainingPints > 10) {
  //     const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1});
  //     const newMainBoochList = this.state.mainBoochList
  //       .filter(booch => booch.id !== this.state.selectedBooch.id)
  //       .concat(decrementedBooch);
  //     this.setState({
  //       mainBoochList: newMainBoochList,
  //       selectedBooch: decrementedBooch
  //     });
  //   } else if (selectedBooch.remainingPints > 0 && selectedBooch.remainingPints <= 10) {
  //     const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1}, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Almost Empty!'});
  //     const newMainBoochList = this.state.mainBoochList
  //       .filter(booch => booch.id !== this.state.selectedBooch.id)
  //       .concat(decrementedBooch);
  //     this.setState({
  //       mainBoochList: newMainBoochList,
  //       selectedBooch: decrementedBooch
  //     });
  //   } else {
  //     const decrementedBooch = Object.assign({}, selectedBooch, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Out of Stock!'});
  //     const newMainBoochList = this.state.mainBoochList
  //       .filter(booch => booch.id !== this.state.selectedBooch.id)
  //       .concat(decrementedBooch);
  //     this.setState({
  //       mainBoochList: newMainBoochList,
  //       selectedBooch: decrementedBooch
  //     });
  //   }
  // }

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
      buttonText = 'Back';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBoochForm onNewBoochCreation={this.handleAddingNewBoochToList} />
      buttonText = 'Back';
      // buttonStyle = boochInfoButtonStyle;
      useStyles = newBoochFormStyles;
    } else if ((Object.entries(this.props.mainBoochList).length > 0)) {
      currentlyVisibleState = <BoochList boochList={this.props.mainBoochList} onBoochSelection={this.handleChangingSelectedBooch} />
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

BoochControl.propTypes = {
  mainBoochList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainBoochList: state.mainBoochList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BoochControl = connect(mapStateToProps)(BoochControl);

export default BoochControl;