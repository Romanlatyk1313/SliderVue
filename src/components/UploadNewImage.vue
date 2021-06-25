<template>
  <div class="button-newImg-block">
    <input
      type="file"
      @change="newImg"
      multiple
      id="input__file"
      class="input-newImg"
    />
    <label for="input__file" class="button-add">
      <span class="button-add">Upload new image </span>
    </label>
  </div>
</template>

<script>
import "../style/appStyle.css";

export default {
  name: "UploadNewImageVue",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    newImg(e) {
      this.items = e.target.files[0];
      this.$emit("items", this.items);
    },
  },
};
</script>