import React from 'react';

const DEFAULT_SIZE = 50;
const DEFAULT_COLOR = 'grey';

export const Box = ({ size = DEFAULT_SIZE, color = DEFAULT_COLOR }) => {
  const styles = {
    width: size,
    height: size,
    background: color,
  };

  return <div style={styles}></div>;
};
