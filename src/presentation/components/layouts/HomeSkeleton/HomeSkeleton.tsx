import CalugasSkeleton from '@/presentation/modules/CalugasSkeleton/CalugasSkeleton';
import EventRibbonSkeleton from '@/presentation/modules/EventRibbonSkeleton/EventRibbonSkeleton';
import MainCarouselSkeleton from '@/presentation/modules/MainCarouselSkeleton/MainCarouselSkeleton';
import React from 'react';
import { Container, HomeSkeletonContainer } from './HomeSkeleton.styles';
import FeaturedCategoriesSkeleton from '@/presentation/modules/FeaturedCategoriesSkeleton/FeaturedCategoriesSkeleton';
import CategoriesCarouselSkeleton from '@/presentation/modules/CategoriesCarouselSkeleton/CategoriesCarouselSkeleton';
import ProductsCarouselSkeleton from '@/presentation/modules/ProductsCarouselSkeleton/ProductsCarouselSkeleton';
import BannerSkeleton from '@/presentation/modules/BannerSkeleton/BannerSkeleton';

const HomeSkeleton = () => {
  return (
    <HomeSkeletonContainer>
      <EventRibbonSkeleton />
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
