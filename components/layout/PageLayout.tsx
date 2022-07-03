import React, { Fragment } from 'react';
import PageHeader from './PageHeader';

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <PageHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default PageLayout;
