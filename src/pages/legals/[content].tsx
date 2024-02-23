import { LegalsQueryParamns } from '@/domain/interfaces/legals/query-params';
import { getLegalLinks } from '@/domain/use-cases/legals/get-legals-link';
import LegalsLayout from '@/presentation/components/layouts/legals-layout';
import { useAppDispatch } from '@/presentation/hooks/use-store';
import { setLegalsLinks } from '@/presentation/providers/store/modules/legals/slice';
import { LegalLiks } from '@/presentation/providers/store/modules/legals/state';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';
// import dynamic from 'next/dynamic';

interface Props {
  links: LegalLiks[];
}

// const LegalsLayout = dynamic(
//   () => import('home/legals-layout'),
//   {
//     ssr: false,
//     loading: () => <LegalsSidebarSkeleton />,
//   },
// );

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { content } = query as LegalsQueryParamns;

  console.log(content);

  const links = await getLegalLinks();
  return {
    props: {
      links,
    },
  };
}) satisfies GetServerSideProps<Props>;

const Legals: NextPageWithLayout<Props> = ({ links, ...rest }) => {
  const { query } = useRouter();
  const { content } = query as LegalsQueryParamns;
  const dispatch = useAppDispatch();

  dispatch(setLegalsLinks(links));

  return <div style={{ height: '100vh' }}>{content}</div>;
};

Legals.getLayout = (page) => <LegalsLayout>{page}</LegalsLayout>;

export default Legals;
