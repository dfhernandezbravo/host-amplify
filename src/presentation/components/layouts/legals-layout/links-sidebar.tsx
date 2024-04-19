import { LegalsQueryParamns } from '@/domain/interfaces/legals/query-params';
import { useAppSelector } from '@/presentation/hooks/use-store';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  shouldBeNegative: boolean;
}

const LinksSidebar = ({ shouldBeNegative }: Props) => {
  const { links } = useAppSelector((state) => state.legals);
  const { query } = useRouter();
  const { viewName } = query as LegalsQueryParamns;

  return (
    <div
      style={{
        filter: shouldBeNegative ? 'invert(1)' : '',
        border: shouldBeNegative ? '1px solid black' : '1px solid transparent',
      }}
      className="bg-white rounded-md h-fit py-2"
    >
      {links.map((link) => {
        let classes = 'border-l-4';
        if (viewName === link.id) {
          if (shouldBeNegative) {
            classes = classes + ' text-white bg-black border-l-white';
          } else {
            classes = classes + ' text-red-900 bg-red-100 border-l-red-900';
          }
        }
        return (
          <Link
            href={`${link.redirect.url}`}
            target={link.redirect.target || ''}
            key={link.id}
          >
            <div
              style={{ fontSize: '1em' }}
              className={clsx('px-4 py-3 border-b font-semibold ') + classes}
            >
              {link.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LinksSidebar;
