import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemList from '../item-list';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';
import withUnsplashService from '../../hoc-helpers';
import {fetchPhotos} from '../../redux/actions';

class ItemListContainer extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const {photos, loading, error} = this.props;

    if (loading) {
      return <LoadingIndicator/>;
    } else if (error) {
      return <ErrorIndicator error={error} fetchPhotos={this.props.fetchPhotos}/>;
    }
    return (
      <ScrollView style={styles.scrollView}>
        <ItemList data={photos} navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(0,255,189,0.12)',
  },
});

const mapStateToProps = ({photos, loading, error}) => {
  return {photos, loading, error};
};

const mapDispatchToProps = (dispatch, {unsplashService}) => {
  return bindActionCreators(
    {
      fetchPhotos: fetchPhotos(unsplashService),
    },
    dispatch,
  );
};

export default withUnsplashService(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ItemListContainer),
);
