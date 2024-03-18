import React from 'react';
import MainLayout from '../main-layout';
import AccountSidebar from './components/accoun-sidebar';
import { useCookies } from 'react-cookie';
import { AUTHCOOKIES } from '@/application/infra/cookies';

interface Props {
  children: React.ReactNode;
}

const AccountLayout: React.FC<Props> = ({ children }) => {
  const [cookies] = useCookies([AUTHCOOKIES.SOFT_LOGIN]);

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row gap-16 justify-center p-4 ">
        <div className="hidden md:block">
          <div className="flex flex-col mb-4  ">
            <span className="text-lg">Hola</span>
            <strong className="text-lg">{cookies.SoftLogin}!</strong>
          </div>

          <AccountSidebar />
        </div>
        <div className="md:w-[956px] p-2 w-full">{children}</div>
      </div>
    </MainLayout>
  );
};

export default AccountLayout;
