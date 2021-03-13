import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionItem } from "../collection-item/collection-item.component";

import "./collection.component.styles.scss";

const CollectionPage = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>Category page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
