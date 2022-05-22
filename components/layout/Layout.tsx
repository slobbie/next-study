import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import React from 'react';

interface PropsDataModal {
  children?: React.ReactChild;
}

const Layout = (props: PropsDataModal) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
