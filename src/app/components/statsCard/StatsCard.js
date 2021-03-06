// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const StatsCard = ({
  statValue,
  statLabel,
  icon,
  backColor,
  textIcon
}) => (
  <div className="sm-st clearfix">
    <span className={ `sm-st-icon st-${backColor}` }>
      { icon }
    </span>
    {/* <span className={ `sm-st-icon st-${backColor}` }>
      { textIcon }
    </span> */}
    <div className="sm-st-info">
      <span>
        { statValue }
      </span>
      <div>
        { statLabel }
      </div>
    </div>
  </div>
);

StatsCard.propTypes = {
  statValue:  PropTypes.string,
  statLabel:  PropTypes.string,
  icon:       PropTypes.node,
  backColor:  PropTypes.oneOf([
    'red',
    'blue',
    'violet',
    'green'
  ])
};

StatsCard.defaultProps = {
  statValue:  '0',
  statLabel:  'unknown',
  textIcon: '',
  icon:       (<i className="fa fa-check-square-o"></i>),
  backColor:  'blue'
};

export default StatsCard;
