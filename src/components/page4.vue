<template>
  <div class="box_all" id="font-family">
    <div class="col" v-for="(n, i) in travelList" :key="n">
      <div class="card" style="width: 25rem;">
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาห้อง : {{ n.price }} <p>เวลา 1 ชั่วโมง</p> </p>
          <h6>จำกัด 1 คนต่อ 8 ตัว !!</h6><br>
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
    name:'Sleepy All Days',price: 4590, img: "https://media.istockphoto.com/id/94056427/photo/adorable-silver-tabby-kitten-sleeping-stretched-out.jpg?s=612x612&w=0&k=20&c=PaorHgmrIE5aUcJbY94T4gEWe4ym8Gjsukf4RlQELDw="
  }])


</script>

<style>
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
