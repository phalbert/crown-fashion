import React from "react";
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionWithSpinner = WithSpinner(Collection)

class Shop extends React.Component {

    unSubscribeFromSnapshot = null

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props
        fetchCollectionsAsync()
    }

    render() {
        const { match, isCollectionFetching } = this.props

        return (
            <div className='shop'>
                <Route exact path={`${match.path}`} render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop)