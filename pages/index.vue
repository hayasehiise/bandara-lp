<template>
  <div class="w-full flex flex-col">
    <div class="flex flex-col"></div>
    <!-- Ini bagian Hero slider -->
    <div class="flex flex-col">
      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="5000">
        <Slide v-for="(image, index) in imageItem" :key="index">
          <div class="fullscreen-slide">
            <img :src="image.url" :alt="image.alt" />
          </div>
        </Slide>
      </Carousel>
    </div>
    <!-- ============================================= -->
  </div>
</template>

<script lang="ts" setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const imageItem = [
  {
    url: "/image/slider/slider-1.png",
    alt: "Slider 1",
    title: "Item Slider 1",
    desc: "just slider 1",
  },
  {
    url: "/image/slider/slider-2.png",
    alt: "Slider 2",
    title: "Item Slider 2",
    desc: "just slider 2",
  },
  {
    url: "/image/slider/slider-3.png",
    alt: "Slider 3",
    title: "Item Slider 3",
    desc: "just slider 3",
  },
];
</script>

<style>
.fullscreen-slide {
  width: 100dvw;
  height: 90dvh;
  position: relative;
}
.fullscreen-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
