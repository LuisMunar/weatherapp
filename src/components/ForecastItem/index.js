import React from 'react'
import PropTypes from 'prop-types'

const ForecastItem = ({week_day}) => {
    return (
        <div>
            {week_day}
        </div>
    );
}

ForecastItem.propTypes = {
    week_day: PropTypes.string.isRequired
};

export default ForecastItem;