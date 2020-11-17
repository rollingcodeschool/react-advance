import React from "react";
import PropTypes from "prop-types";

const Contador = ({ count }) => <div>{count}</div>;

Contador.defaultProps = {
  count: 0,
};

Contador.propTypes = {
  count: PropTypes.number,
};

export default Contador;
