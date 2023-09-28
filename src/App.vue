<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import BolgHeader from '@/pages/BlogHeader.vue'
</script>

<template>
    <div class="container">
        <BolgHeader></BolgHeader>
        <RouterView />
    </div>
</template>

<style scoped></style>
