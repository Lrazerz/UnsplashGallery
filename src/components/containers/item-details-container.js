import React, {Component} from 'react';
import withUnsplashService from '../../hoc-helpers';
import ItemDetails from '../item-details';

class ItemDetailsContainer extends Component {
  state = {
    item: {},
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    const {unsplashService, itemId} = this.props;

    unsplashService
      .getSmallPhoto(itemId)
      .then(item => this.setState({item, loading: false, error: null}))
      .catch(error => this.setState({loading: false, error}));
  };

  render() {
    return <ItemDetails item={this.state.item} />;
  }
}

export default withUnsplashService(ItemDetailsContainer);
