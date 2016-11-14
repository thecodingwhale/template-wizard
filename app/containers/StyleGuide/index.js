import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';
import Button from  '../../components/Button'; // eslint-disable-line no-multi-spaces

export class StyleGuide extends React.Component {
  renderButtons() {
    return (
      <div>
        <h1 className={styles.pageTitle}>Buttons</h1>
        <p>
          <Button />
          <Button type="primary">Primary Button</Button>
          <Button type="primary" outline>Outline Primary Button</Button>
        </p>
        <p>
          <Button size="small" outline>Small Button</Button>
          <Button type="primary">Default Button</Button>
          <Button type="primary" size="large" outline />
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.styleGuide}>
        <Helmet
          title="StyleGuide"
          meta={[
            { name: 'description', content: 'Description of StyleGuide' },
          ]}
        />
        {this.renderButtons()}
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
