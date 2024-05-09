import { LegalsQueryParamns } from '@/domain/interfaces/legals/query-params';
import { useAppSelector } from '@/presentation/hooks/use-store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkLabel, SideBarWrapper } from './styles';

interface Props {
  shouldBeNegative: boolean;
}

const LinksSidebar = ({ shouldBeNegative }: Props) => {
  const { links } = useAppSelector((state) => state.legals);
  const { query } = useRouter();
  const { viewName } = query as LegalsQueryParamns;

  return (
    <SideBarWrapper isNegative={shouldBeNegative}>
      {links.map((link) => (
        <Link
          href={`${link.redirect.url}`}
          target={link.redirect.target || ''}
          key={link.id}
        >
          <LinkLabel
            isActive={viewName === link.id}
            isNegative={shouldBeNegative}
          >
            {link.label}
          </LinkLabel>
        </Link>
      ))}
    </SideBarWrapper>
  );
};

export default LinksSidebar;
