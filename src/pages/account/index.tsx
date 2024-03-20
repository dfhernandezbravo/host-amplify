import { AUTHCOOKIES } from '@/application/infra/cookies';
import { getAccountLinks } from '@/domain/use-cases/account/get-account-links';
import ModalLogout from '@/presentation/components/layouts/account-layout/components/modal-logout';
import useDevice from '@/presentation/hooks/useDevice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

export const ROOT_PATH = 'account';

const Account = () => {
  const { device } = useDevice();
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [cookies] = useCookies([AUTHCOOKIES.SOFT_LOGIN]);

  const router = useRouter();
  const { data: links } = useQuery(['get-account-links'], getAccountLinks);

  if (!links) return null;

  if (device === 'Desktop') {
    const routeByDefault = links.find((route) => route.isDefault);
    router.replace(
      `/${ROOT_PATH}/${routeByDefault!.redirect.url || 'profile'}`,
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col mb-4  ">
        <span className="text-lg">Hola</span>
        <strong className="text-lg">{cookies.SoftLogin}!</strong>
      </div>

      <div className="w-full bg-white rounded-md h-fit py-2 lg:hidden">
        {links.map(
          (link) =>
            link.isActive && (
              <Link
                href={`/account/${link.redirect.url}`}
                target={link.redirect.target || ''}
                key={link.id}
              >
                <div className="px-4 py-3 border-b font-semibold text-sm">
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
    </div>
  );
};

export default Account;
