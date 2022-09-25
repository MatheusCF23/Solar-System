import React from 'react';
import Proptype from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.propType = {
  headline: Proptype.string.isRequired,
};

export default Title;
