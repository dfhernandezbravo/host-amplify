import React from 'react';
import MainLayout from '../main-layout';
import AccountSidebar from './components/accoun-sidebar';

interface Props {
  children: React.ReactNode;
}

const AccountLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayout>
      <div className="flex flex-row gap-16 justify-center p-4">
        <AccountSidebar />
        <div className="md:w-[956px] p-2 w-full">{children}</div>
      </div>
    </MainLayout>
  );
};

export default AccountLayout;
