import React from "react";
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { updateCollections } from '../../redux/shop/shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionWithSpinner = WithSpinner(Collection)

class Shop extends React.Component {

    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state

        return (
            <div className='shop'>
                <Route exact path={`${match.path}`} render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                />
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop)