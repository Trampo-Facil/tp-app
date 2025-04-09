<script setup lang="ts">
const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
];
</script>

<template>
  <div class="side-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
