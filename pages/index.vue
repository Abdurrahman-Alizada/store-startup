<template>
  <div>
    <Banner></Banner>
    <Offer></Offer>
    <LatestProducts></LatestProducts>
    <ProductCategory></ProductCategory>
    <TrendingProducts></TrendingProducts>
    <BestSellers></BestSellers>
    <Facility></Facility>
    <Testimonials></Testimonials>
    <News></News>
    <Subscribe></Subscribe>
    <Partner></Partner>
    <InstagramPhotos></InstagramPhotos>
  </div>
</template>

<script>
import Banner from '../components/landing/Banner';
import Offer from '../components/landing/Offer';
import LatestProducts from '../components/landing/LatestProducts';
import ProductCategory from '../components/landing/ProductCategory';
import TrendingProducts from '../components/landing/TrendingProducts';
import BestSellers from '../components/landing/BestSellers';
import Facility from '../components/landing/Facility';
import Testimonials from '../components/landing/Testimonials';
import News from '../components/landing/News';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';

export default {
  components: {
    Banner, Offer, LatestProducts, ProductCategory, TrendingProducts,
    BestSellers, Facility, Testimonials, News, Subscribe, Partner, InstagramPhotos
  }
}
</script>