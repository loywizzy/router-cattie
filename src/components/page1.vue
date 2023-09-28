<template>
  <div class="box_all" id="font-family">
    <div class="col" v-for="(n, i) in travelList" :key="n">
      <div class="card" style="width: 25rem;">
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาห้อง : {{ n.price }} <p>เวลา 1 ชั่วโมง</p> </p> 
          <h6>จำกัด 5 คนต่อ 10 ตัว !!</h6><br>
          <a class="btn btn-primary"> จองแมว </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const travelList = ref([
  {
    name: 'Cattie House Private', price: 5890, img: "https://cdn.theatlantic.com/media/img/photo/2015/03/aoshima-japans-cat-island/c01_RTR4RUGT/main_1500.jpg"
  }])


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt&family=Roboto&display=swap');

* {
  font-family: 'Prompt', sans-serif;
}


.card-img-top {
  height: 100%;
  padding: 25px;

}

.box_all {
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  text-align: center
}
</style>
