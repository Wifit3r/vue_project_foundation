<script>
export default {
  name: 'cardGalery',
  data() {
    return {
      isOpen: false,
      currentImage: 0,
      images: [
        require('@/assets/img/1.jpg'),
        require('@/assets/img/IMG_4613.jpg'),
        require('@/assets/img/IMG_4627.jpg'),
        require('@/assets/img/IMG_4662.jpg'),
        require('@/assets/img/IMG_4679.jpg'),
        require('@/assets/img/IMG_4707.jpg')
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    nextImage() {
      this.currentImage =
        (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    setCurrentImage(index) {
      this.currentImage = index;
    },

  },
}
</script>

<template>
  <div class="card-gal">
    <h3>Фото </h3>
    <div class="spliter"></div>
    <p>Приклади роботи фонду. Тут буде історія роботи фонду, або якась інша інформація</p>

    <div class="mainGallery">
      <div class="gallery" id="gal">
        <div class="main-image">
          <img :src="images[currentImage]" alt="Main Image" />
        </div>
        <div class="controls">
          <button @click="prevImage">◄</button>
          <button @click="nextImage">►</button>
        </div>
        <div class="thumbnails">
          <div class="thumbnails-img" v-for="(image, index) in images" :key="index">
            <img :src="image" @click="setCurrentImage(index)" :class="{ active: index === currentImage }"
              alt="Thumbnail" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.gallery {
  text-align: center;
}

.card-gal {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 80%;
  max-width: 600px;
}

.card-gal h3 {
  font-size: 60px;
  padding-left: 2vw;
}

.card-gal h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.card-gal p {
  color: #666;
  line-height: 1.5;
}

.card-gal:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.spliter {
  background-color: wheat;
  width: 100%;
  height: 1vh;
  border-radius: 1vw;
}

.main-image img {
  width: 28vw;
  height: auto;
  max-width: 400px;
  border-radius: 10px;
}
.main-image{
  margin-top: 20px;
}

.thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  
}
.thumbnails-img{
  position: relative;
  width: 90px;
  height: 150px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: border-color 0.3s;
  border-color: burlywood;
  border-radius: 5px;
  margin: 5px;
}

.thumbnails img {
  width: 11vw;
  height: 16vw;
  max-height: 150px;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}

.thumbnails img.active {
  border-color: #333;
}



.controls {
  margin-top: 20px;
  margin-bottom: 20px;
}

.controls button {
  margin-left: 5px;
  margin-right: 5px;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  background-color: wheat;
  border: none;
}
</style>