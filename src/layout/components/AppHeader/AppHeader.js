import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.scss';

const AppHeader = (props) => {
  const { title } = props;
  return <h1 className="app-header--title">{title}</h1>;
};

AppHeader.defaultProps = {
  title: 'App',
};

AppHeader.propTypes = {
  title: PropTypes.string,
};

export default AppHeader;
