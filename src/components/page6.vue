<template>
  <div class="box_all" id="font-family">
    <div class="col" v-for="(n, i) in travelList" :key="n">
      <div class="card" style="width: 25rem;">
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาห้อง : {{ n.price }} <p>เวลา 1 ชั่วโมง</p> </p>
          <h6>จำกัด 2 คนต่อแมว 5 ตัว !!</h6><br>
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
    name:'Happy Cat Happy Price',price: 990, img: "https://worldanimalfoundation.org/wp-content/uploads/2023/02/how-many-cats-in-USA-review.jpg"
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
