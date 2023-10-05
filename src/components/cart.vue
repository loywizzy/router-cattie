<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ห้อง</th>
                                <th>รูป</th>
                                <th>ชื่อห้อง</th>
                                <th>จำนวน</th>
                                <th>ราคา</th>
                                <th>ราคารวม</th>
                                <th>ลบ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.getCartItems" :key="item.id">
                                <td>Cattie Room {{ item.id }}</td>
                                <td>
                                    <img :src="item.img" class="fluid rounded" width="60" height="60" :alt="item.name" />
                                </td>
                                <td>
                                    {{ item.name }}
                                </td>
                                <td>
                                    {{ item.quantity }} ชั่วโมง
                                </td>
                                <td>
                                    {{ item.price }} Bath
                                </td>
                                <td>
                                    {{ item.price * item.quantity }} Bath
                                </td>
                                <td>
                                    <i @click="data.removeFromCart(item)" class="fa-solid fa-cart-shopping"
                                        style="color: #ff0000;"></i>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="3" class="text-center">
                                    Total
                                </th>
                                <td colSpan="3" class="text-center">
                                    <span class="badge bg-danger rounded-pill">
                                        {{ data.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0) }} Bath
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useShoppingStore } from "../stores/product"
const data = useShoppingStore();
</script>

<style>
i {
    cursor: pointer;
}
</style>