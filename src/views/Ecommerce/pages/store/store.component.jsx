import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
const storePage = ({ match }) => (
      <div className='store-page'>
      <Route exact path ={`${match.path}`} component= {CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );

export default storePage;
