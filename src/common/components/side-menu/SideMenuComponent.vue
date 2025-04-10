<script setup lang="ts">
import { ref } from "vue";
import NavBarComponent from "../navbar/NavBarComponent.vue";

const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
];

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <div class="drawer" :class="{ 'drawer-open': isDrawerOpen }">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      v-model="isDrawerOpen"
    />
    <div class="drawer-content">
      <NavBarComponent @toggleDrawer="toggleDrawer" />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
        @click="toggleDrawer"
      ></label>
      <ul
        class="menu bg-base-200 text-base-content min-h-full w-30 md:w-80 p-4"
      >
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
