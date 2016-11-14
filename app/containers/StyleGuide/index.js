/*
 *
 * StyleGuide
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

export class StyleGuide extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.styleGuide}>
        <Helmet
          title="StyleGuide"
          meta={[
            { name: 'description', content: 'Description of StyleGuide' },
          ]}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(StyleGuide);
