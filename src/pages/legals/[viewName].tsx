import { getLegalLinks } from '@/domain/use-cases/legals/get-legals-link';
import LegalsLayout from '@/presentation/components/layouts/legals-layout';
import { useAppDispatch } from '@/presentation/hooks/use-store';
import { setLegalsLinks } from '@/presentation/providers/store/modules/legals/slice';
import { LegalLiks } from '@/presentation/providers/store/modules/legals/state';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from '../_app';
import LegalsPage from 'home/legals';

interface Props {
  links: LegalLiks[];
  content: any;
}

export const getServerSideProps = (async (context) => {
  const links = await getLegalLinks();
  const page = await import('home/legals');
  if (page?.getServerSideProps) {
    const content = await page.getServerSideProps(context);

    return {
      props: {
        links,
        ...content.props,
      },
    };
  }

  return {
    props: {},
  };
}) satisfies GetServerSideProps<Props>;

const Legals: NextPageWithLayout<Props> = ({ links, content }) => {
  const dispatch = useAppDispatch();
  dispatch(setLegalsLinks(links));

  return <LegalsPage content={content} />;
};

Legals.getLayout = (page) => <LegalsLayout>{page}</LegalsLayout>;

export default Legals;
