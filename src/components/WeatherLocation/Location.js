import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const Location = ({ city }) => (
    <div className="Location">
        <h1>{city}</h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;