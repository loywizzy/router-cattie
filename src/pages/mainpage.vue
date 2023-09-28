<script setup>
import { ref } from 'vue';
import newcard from '../pages/newcard.vue'
import jumbo from './jumbo.vue';

const recentpost = ref([
  {
    name: 'แก๊งเหมียว ๆ ยกพวกตีนุด',
    img: "https://media.timeout.com/images/105871324/image.jpg",
    data_time: '31 January 2035'
  }
])
</script>

<template>
  <jumbo></jumbo>
  <newcard></newcard>
  <div class="row g-5">
    <div class="col-md-8">

      <article class="blog-post">
        <h2 class="display-5 link-body-emphasis mb-1"> </h2>
        <p class="blog-post-meta">January 1, 2083 </p>


        <hr>
        <h2 class="title">
          <span class="title-word title-word-1">CAT</span>
          <span class="title-word title-word-2">CU</span>
          <span class="title-word title-word-3">TE</span>
          <span class="title-word title-word-4">TY</span>
        </h2>
      </article>

      <article class="blog-post">

      </article>

      <nav class="blog-pagination" aria-label="Pagination">
      </nav>

    </div>


    <!--Side bar-->
    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem;">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
          <h4 class="fst-italic">About</h4>
          <p class="mb-0">CATCATCATCATCATCAT</p>
        </div>

        <div>
          <h4 class="fst-italic">Recent posts</h4>
          <ul class="list-unstyled">
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                href="#" v-for="(i, index) in recentpost" :key="index">
                <svg class="bd-placeholder-img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice" focusable="false">
                  <image :xlink:href="i.img" x="0" y="40" width="100px" />
                </svg>
                <div class="col-lg-8">
                  <h6 class="mb-0">{{ i.name }}</h6>
                  <small class="text-body-secondary">{{ i.data_time }}</small>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt&family=Roboto&display=swap');

* {
  font-family: 'Prompt', sans-serif;
}

.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #E4A9A8;
}

@keyframes color-animation {
  0% {
    color: var(--color-1)
  }

  32% {
    color: var(--color-1)
  }

  33% {
    color: var(--color-2)
  }

  65% {
    color: var(--color-2)
  }

  66% {
    color: var(--color-3)
  }

  99% {
    color: var(--color-3)
  }

  100% {
    color: var(--color-1)
  }
}

/* Here are just some visual styles. 🖌 */

.container {
  display: grid;
  place-items: center;
  text-align: center;
  height: 100vh
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 8.5vw;
  text-transform: uppercase;
}
</style>
