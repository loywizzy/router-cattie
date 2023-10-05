<template>
  <div class="box_all" id="font-family">
    <div class="col-md-6" v-for="product in data.products" :key="product.id" >
      <div v-if="product.id === 10" class="card" style="width: 25rem;">
        <img :src="product.img" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p class="card-text">ราคาห้อง: {{ product.price }}</p>
          <p class="card-text">เวลา 1 ชั่วโมง</p>
          <h6>จำกัด 5 คนต่อ 10 ตัว !!</h6><br>
          <button @click="data.addToCart(product)" class="btn btn-primary">
            <i class="bi bi-cart-check"></i> จองแมว
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShoppingStore } from '../stores/product';

const data = useShoppingStore();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt&family=Roboto&display=swap');

* {
  font-family: 'Prompt', sans-serif;
}

.card {
  margin: 10px;
}

.card-img-top {
  height: 100%;
  padding: 25px;
}

.box_all {
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  text-align: center;
}
</style>
