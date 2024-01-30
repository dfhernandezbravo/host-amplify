import {
  FirstRowContainer,
  FirstRowContainerMobile,
  SearchContainer,
  SearchContainerMobile,
  SecondRowContainer,
  SecondRowContainerMobile,
  SkeletonContainer,
  SkeletonContainerMobile,
  ThirdRowContainer,
  CartContainer,
  LoginContainer,
  LocationContainerMobile,
} from './HeaderSkeleton.styles';
import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';

const HeaderSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <SkeletonContainer>
          <FirstRowContainer>
            {[...Array(9)].map((brand, i) => (
              <Skeleton key={i} height="28px" width="95px" animation="wave" />
            ))}
          </FirstRowContainer>
          <SecondRowContainer>
            <Skeleton
              height="60px"
              width="60px"
              borderRadius="50%"
              animation="wave"
            />
            <SearchContainer>
              <Skeleton
                height="40px"
                width="100%"
                borderRadius="28px"
                animation="wave"
              />
            </SearchContainer>
            <Skeleton height="40px" width="130px" animation="wave" />
            <LoginContainer>
              <Skeleton height="40px" width="130px" animation="wave" />
            </LoginContainer>
            <CartContainer>
              <Skeleton height="30px" width="30px" animation="wave" />
            </CartContainer>
          </SecondRowContainer>
          <ThirdRowContainer>
            <Skeleton height="40px" width="210px" animation="wave" />
            <Skeleton height="40px" width="420px" animation="wave" />
          </ThirdRowContainer>
        </SkeletonContainer>
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <SkeletonContainerMobile>
          <FirstRowContainerMobile>
            <Skeleton
              height="60px"
              width="60px"
              borderRadius="50%"
              animation="wave"
            />
            <SearchContainerMobile>
              <Skeleton
                height="40px"
                width="100%"
                borderRadius="28px"
                animation="wave"
              />
            </SearchContainerMobile>
            <CartContainer>
              <Skeleton height="30px" width="30px" animation="wave" />
            </CartContainer>
          </FirstRowContainerMobile>
          <SecondRowContainerMobile>
            <Skeleton height="40px" width="77px" animation="wave" />
            <LocationContainerMobile>
              <Skeleton height="40px" width="126px" animation="wave" />
            </LocationContainerMobile>
          </SecondRowContainerMobile>
        </SkeletonContainerMobile>
      </Layout>
    </>
  );
};

export default HeaderSkeleton;
