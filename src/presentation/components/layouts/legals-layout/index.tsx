import React from 'react';
import MainLayout from '../main-layout';
import LinksSidebar from './links-sidebar';

interface Props {
  children: React.ReactNode;
}

const LegalsLayout = ({ children }: Props) => {
  return (
    <MainLayout>
      <div className="flex flex-row gap-16 justify-center p-4">
        <LinksSidebar />
        <div className="md:w-[956px] bg-white rounded-md p-2 w-full">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default LegalsLayout;
