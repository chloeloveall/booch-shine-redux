import React from 'react';
import NewBoochForm from './NewBoochForm';
import BoochList from './BoochList';
import BoochDetail from  './BoochDetail';
import EditBoochForm from './EditBoochForm';
import BoochInfo from './BoochInfo';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../../actions';

const boochInfoStyles = {
  backgroundColor: '#234A50',
}

const newBoochFormStyles = {
  backgroundColor: '#234A50',
}

const boochListStyles = {
  backgroundColor: '#234A50',
}

const boochListButtonStyle = {
  maxHeight: '50px',
}

class BoochControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedBooch !== null) {
      const action = a.nullifyBooch();
      dispatch(action);
      const action2 = a.setEdit();
      dispatch(action2);
    } else {
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
    const { dispatch } = this.props;
    const action = a.selectBooch(selectedBooch);
    dispatch(action);
  }

  handleDeletingBooch = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBooch(id);
    dispatch(action);
    const action2 = a.nullifyBooch();
    dispatch(action2);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.setEdit();
    dispatch(action);
  }

  handleEditingBoochInList = (boochToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBooch(boochToEdit);
    dispatch(action);
    const action2 = a.setEdit();
    dispatch(action2);
    const action3 = a.nullifyBooch();
    dispatch(action3);
  }

  handleBuyingBooch = () => {
    const { dispatch } = this.props;
    const selectedBooch = this.props.selectedBooch;
    if(selectedBooch.remainingPints > 11) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1});
      const action = a.addBooch(decrementedBooch);
      dispatch(action);
      const action2 = a.selectBooch(decrementedBooch);
      dispatch(action2);
    } else if (selectedBooch.remainingPints >= 1 && selectedBooch.remainingPints <= 11) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPints: selectedBooch.remainingPints - 1}, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Almost Empty!'});
      const action = a.addBooch(decrementedBooch);
      dispatch(action);
      const action2 = a.selectBooch(decrementedBooch);
      dispatch(action2);
    } else if (selectedBooch.remainingPints <= 0) {
      const decrementedBooch = Object.assign({}, selectedBooch, {remainingPintsMessage: selectedBooch.remainingPintsMessage = 'Out of Stock!'});
      const action = a.addBooch(decrementedBooch);
      dispatch(action);
      const action2 = a.selectBooch(decrementedBooch);
      dispatch(action2);
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonStyle = null;
    let useStyles = null;
    if (this.props.editing) {      
      currentlyVisibleState = <EditBoochForm booch={this.props.selectedBooch} onEditBooch={this.handleEditingBoochInList} />
      buttonText = "Back";
    } else if (this.props.selectedBooch !== null) {
      currentlyVisibleState = <BoochDetail booch={this.props.selectedBooch} onClickingDelete={this.handleDeletingBooch} onClickingEdit={this.handleEditClick} onClickingBuy={this.handleBuyingBooch} />
      buttonText = 'Back';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBoochForm onNewBoochCreation={this.handleAddingNewBoochToList} />
      buttonText = 'Back';
      useStyles = newBoochFormStyles;
    } else if ((Object.entries(this.props.mainBoochList).length > 0)) {
      currentlyVisibleState = <BoochList boochList={this.props.mainBoochList} onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add a New Booch";
      buttonStyle = boochListButtonStyle;
      useStyles = boochListStyles;
    } else {
      currentlyVisibleState = <BoochInfo onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add a New Booch";
      useStyles = boochInfoStyles;
    }
    return (
      <>
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          style={useStyles}
        > 
          {currentlyVisibleState}
          <button style={buttonStyle} onClick={this.handleClick}>{buttonText}</button>
        </Grid>
      </>
    );
  }
}

BoochControl.propTypes = {
  mainBoochList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainBoochList: state.mainBoochList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedBooch: state.selectedBooch,
    editing: state.editing
  }
}

BoochControl = connect(mapStateToProps)(BoochControl);

export default BoochControl;