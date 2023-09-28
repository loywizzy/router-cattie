<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const travelList = ref([
  { link: 'page1', name: 'Cattie House Private', price: 5890, img: "https://cdn.theatlantic.com/media/img/photo/2015/03/aoshima-japans-cat-island/c01_RTR4RUGT/main_1500.jpg", text: 'เพลิดเพลินกับเหล่าแมวนับสิบตัว' },
  { link: 'page2', name: 'Happy Happy Happy', price: 1990, img: "https://i.pinimg.com/originals/48/c9/52/48c9522aaa31a27582216bec737e92ce.gif", text: 'แฮปปี้ๆๆๆๆๆๆๆๆๆ' },
  { link: 'page3', name: 'Smart Cat Show', price: 1290, img: "https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg", text: 'แมวกายกรรมที่คุณไม่เคยเห็นมาก่อน กายกรรมงั่มๆๆๆ' },
  { link: 'page4', name: 'Sleepy All Days', price: 4590, img: "https://media.istockphoto.com/id/94056427/photo/adorable-silver-tabby-kitten-sleeping-stretched-out.jpg?s=612x612&w=0&k=20&c=PaorHgmrIE5aUcJbY94T4gEWe4ym8Gjsukf4RlQELDw=", text: 'หลับปุ่ย กินๆนอนๆ นอนทั้งวัน รอบชมน้อนนอนตรงนี้ค้าบ' },
  { link: 'page5', name: 'Kitten Cute', price: 4444, img: "https://thumbs.dreamstime.com/b/moggie-kittens-28062021.jpg", text: 'แมวน้อยสุดคาวาอิ๊ โดนตกแบบสามร้อยเปอร์' },
  { link: 'page6', name: 'Happy Cat Happy Price', price: 990, img: "https://worldanimalfoundation.org/wp-content/uploads/2023/02/how-many-cats-in-USA-review.jpg", text: 'โปรโมชั่น!!! แมวสุขใจ' }
])

</script>
<template>
  <div>
    <div class="row mb-2">
      <div class="col-md-6" v-for="(n, index) in travelList" :key="index">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis"><i class="fa-solid fa-paw"
                style="color: #d699d6;"></i> Cattie Rooms {{ index + 1 }} </strong>
            <h3 class="mb-0">{{ n.name }}</h3>
            <div class="mb-1 text-body-secondary">ราคาต่อชั่วโมง : {{ n.price }}</div>
            <p class="card-text mb-auto">{{ n.text }}</p>
            <RouterLink :to="n.link" class="icon-link gap-1 icon-link-hover stretched-link">
              กดจองน้อนเหมียวตรงนี้งับ <i class="fa-solid fa-arrow-pointer" style="color: #81a9ee;"></i>
              <svg class="bi">
                <use xlink:href="#chevron-right" />
              </svg>
            </RouterLink>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
              preserveAspectRatio="xMidYMid slice" focusable="false" style="margin: 15px;">
              <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>