import React from 'react';
import Proptype from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptype.string.isRequired,
  year: Proptype.string.isRequired,
  country: Proptype.string.isRequired,
  destination: Proptype.string.isRequired,
};

export default MissionCard;
