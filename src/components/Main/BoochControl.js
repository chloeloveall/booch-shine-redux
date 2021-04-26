import React from 'react';
import NewBoochForm from './NewBoochForm';
import BoochList from './BoochList';
import BoochDetail from  './BoochDetail';

export default class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBooch: null,
      mainBoochList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBooch: null
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
    this.setState({selectedBooch: selectedBooch});
  }

  handleDeletingBooch = (id) => {
    const newMainBoochList = this.state.mainBoochList.filter(booch =>booch.id !== id);
    this.setState({
      mainBoochList: newMainBoochList,
      selectedBooch: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedBooch !== null) {
      currentlyVisibleState = <BoochDetail booch={this.state.selectedBooch} onClickingDelete={this.handleDeletingBooch} />
      //back or submit? not sure yet
      buttonText = 'Back';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBoochForm onNewBoochCreation={this.handleAddingNewBoochToList} />
      buttonText = 'Back';
    } else {
      currentlyVisibleState = <BoochList boochList={this.state.mainBoochList} onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add Booch";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}