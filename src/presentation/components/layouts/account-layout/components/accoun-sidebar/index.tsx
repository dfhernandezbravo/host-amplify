import { getAccountLinks } from '@/domain/use-cases/account/get-account-links';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import ModalLogout from '../modal-logout';

const AccountSidebar = () => {
  const { pathname } = useRouter();
  const { data: links } = useQuery(['get-account-links'], getAccountLinks);
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  if (!links) return <></>;

  return (
    <div className="max-w-64 bg-white rounded-md h-fit py-2 hidden lg:block">
      {links.map(
        (link) =>
          link.isActive && (
            <Link
              href={`${link.redirect.url}`}
              target={link.redirect.target || ''}
              key={link.id}
            >
              <div
                className={clsx('px-4 py-3 border-b font-semibold text-sm', {
                  'border-l-4 border-l-red-900':
                    pathname === `/account/${link.redirect.url}`,
                })}
              >
                {link.label}
              </div>
            </Link>
          ),
      )}
      <button
        className="px-4 py-3 font-semibold text-sm"
        onClick={() => setIsOpenLogout(true)}
      >
        Cerrar Sesión
      </button>
      <ModalLogout
        isOpen={isOpenLogout}
        onClose={() => setIsOpenLogout(false)}
      />
    </div>
  );
};

export default AccountSidebar;
