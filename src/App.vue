<template>
  <div>
    <app-swiper :posteSee="posteSee" @deletImg="deletImg"> </app-swiper>
    <div class="pages">
      <div>
        <router-link :to="`/post/${idPost}`">
          <button class="button-id-post" @click="countIdPostMinus">
            <img src="./assets/arrows/Arrow-right.png" />
          </button>
        </router-link>
      </div>
      <div class="count-id-post">
        <h1>{{ `1 / ${idPost}` }}</h1>
      </div>
      <div>
        <router-link :to="`/post/${idPost}`">
          <button class="button-id-post" @click="countIdPostPlus">
            <img src="./assets/arrows/Arrow-left.png" />
          </button>
        </router-link>
      </div>
    </div>
    <div class="wrapper-button-add">
      <div>
        <app-input-add-img @items="uploadNewImage"> </app-input-add-img>
      </div>
      <div>
        <input
          type="button"
          class="button-add"
          @click="uploadFromFlickr"
          value="Upload from Flickr"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper/core";
import "./style/appStyle.css";
SwiperCore.use([Pagination, Navigation, Thumbs]);
import AppSwiperVue from "./components/AppSwiper.vue";
import UploadNewImageVue from "./components/UploadNewImage.vue";

export default {
  components: {
    "app-swiper": AppSwiperVue,
    "app-input-add-img": UploadNewImageVue,
  },
  data() {
    return {
      sliderItems: [
        { src: require("./assets/img/Bubbles.jpg") },
        { src: require("./assets/img/Forest.jpg") },
        { src: require("./assets/img/Hubble_Extreme_Deep_Field.jpg") },
        { src: require("./assets/img/huntington bancshares.jpg") },
        { src: require("./assets/img/Lotus.jpg") },
        { src: require("./assets/img/Mansion.jpg") },
        { src: require("./assets/img/Moon.jpg") },
        { src: require("./assets/img/Three.jpg") },
        { src: require("./assets/img/Tie_dye.jpg") },
        { src: require("./assets/img/Vaporwave_wallpaper.jpg") },
      ],
      start: 0,
      end: 9,
      errors: [],
      formData: "",
      idPost: 1,
      posteSee: [
        { src: require("./assets/img/Bubbles.jpg") },
        { src: require("./assets/img/Forest.jpg") },
        { src: require("./assets/img/Hubble_Extreme_Deep_Field.jpg") },
        { src: require("./assets/img/huntington bancshares.jpg") },
        { src: require("./assets/img/Lotus.jpg") },
        { src: require("./assets/img/Mansion.jpg") },
        { src: require("./assets/img/Moon.jpg") },
        { src: require("./assets/img/Three.jpg") },
        { src: require("./assets/img/Tie_dye.jpg") },
      ],
    };
  },

  methods: {
    countIdPostPlus() {
      if (this.sliderItems.length / 9 > this.idPost) {
        this.idPost++;
        this.start += 9;
        this.end += 9;
        this.posteSee = this.sliderItems.slice(this.start, this.end);
      }
    },
    countIdPostMinus() {
      if (this.$route.params["id"] > 1) {
        --this.idPost;
        this.start -= 9;
        this.end -= 9;
        this.posteSee = this.sliderItems.slice(this.start, this.end);
      }
    },
    uploadNewImage(items) {
      this.sliderItems.push({ src: URL.createObjectURL(items) });
      this.posteSee.push({ src: URL.createObjectURL(items) });
    },

    deletImg(index) {
      this.sliderItems.splice(index, 1);
      this.posteSee.splice(index, 1);
    },

    async uploadFromFlickr() {
      try {
        const response = await fetch(
          "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=9c0b191a1d8415714a70a2a3db4abdeb&extras=url_m&text=nature"
        );
        this.formData = await response.json();
        if (response.status === 200 || response.status === 201) {
          this.namderPhoto = Math.floor(Math.random() * 101);
          this.sliderItems.push({
            src: this.formData.photos.photo[+this.namderPhoto].url_m,
          });
          this.posteSee.push({
            src: this.formData.photos.photo[+this.namderPhoto].url_m,
          });
        } else {
          this.errors = this.formData;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>