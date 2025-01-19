import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <h3>root</h3>
      <Outlet />
    </div>
  );
};

export default Root;