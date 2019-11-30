import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview, { } from "../../components/collection-preview/collection-preview.component";

const Shop = ({ collections }) => (
    <div className='shop'>
        {
            collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop)