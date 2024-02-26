import { LegalsQueryParamns } from '@/domain/interfaces/legals/query-params';
import { useAppSelector } from '@/presentation/hooks/use-store';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinksSidebar = () => {
  const { links } = useAppSelector((state) => state.legals);
  const { query } = useRouter();
  const { viewName } = query as LegalsQueryParamns;

  return (
    <div className="max-w-64 bg-white rounded-md h-fit py-2 hidden lg:block">
      {links.map((link, index) => (
        <Link
          href={`${link.redirect.url}`}
          target={link.redirect.target || ''}
          key={link.id}
        >
          <div
            className={clsx(
              'px-4 py-3 border-b font-semibold text-sm',
              {
                ' text-red-900 bg-red-100 border-l-4 border-l-red-900':
                  viewName === link.id,
              },
              {
                'border-b-0': index + 1 === links.length,
              },
            )}
          >
            {link.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinksSidebar;
