<template>
  <div>
    <div class="wrapper">
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        class="my-swiper2"
      >
        <swiper-slide
          :index="index"
          v-for="(item, index) in posteSee"
          :key="index"
        >
          <img class="img" :src="item.src" :alt="posteSee" />
        </swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="9"
        :freeMode="true"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        class="my-swiper"
      >
        <swiper-slide v-for="(item, index) in posteSee" :key="index">
          <div class="hover-delete">
            <button class="hover-delete-button" @click.stop="deletImg(index)">
              X
            </button>
          </div>
          <img class="img" :src="item.src" :alt="posteSee" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "../style/style.css";

import SwiperCore, { Navigation, Thumbs } from "swiper/core";

SwiperCore.use([Navigation, Thumbs]);

export default {
  name: "AppSwiperVue",
  props: {
    posteSee: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    deletImg(index) {
      this.$emit("deletImg", index);
    },
  },
};
</script>

<style>
</style>