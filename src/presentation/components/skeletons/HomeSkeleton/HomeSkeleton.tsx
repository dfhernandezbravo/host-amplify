import BannerSkeleton from '@/presentation/components/skeletons/BannerSkeleton/BannerSkeleton';
import CalugasSkeleton from '@/presentation/components/skeletons/CalugasSkeleton/CalugasSkeleton';
import CategoriesCarouselSkeleton from '@/presentation/components/skeletons/CategoriesCarouselSkeleton/CategoriesCarouselSkeleton';
import FeaturedCategoriesSkeleton from '@/presentation/components/skeletons/FeaturedCategoriesSkeleton/FeaturedCategoriesSkeleton';
import MainCarouselSkeleton from '@/presentation/components/skeletons/MainCarouselSkeleton/MainCarouselSkeleton';
import ProductsCarouselSkeleton from '@/presentation/components/skeletons/ProductsCarouselSkeleton/ProductsCarouselSkeleton';
import React from 'react';
import { Container, HomeSkeletonContainer } from './HomeSkeleton.styles';

const HomeSkeleton = () => {
  return (
    <HomeSkeletonContainer>
      <MainCarouselSkeleton />
      <Container>
        <FeaturedCategoriesSkeleton />
        <CategoriesCarouselSkeleton />
        <CalugasSkeleton />
        <ProductsCarouselSkeleton />
        <BannerSkeleton />
      </Container>
    </HomeSkeletonContainer>
  );
};

export default HomeSkeleton;
