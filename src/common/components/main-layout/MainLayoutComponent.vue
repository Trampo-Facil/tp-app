<template>
  <div class="home">
    <SideMenuComponent />
    <slot />
  </div>
</template>
<script setup lang="ts">
import SideMenuComponent from "../side-menu/SideMenuComponent.vue";
</script>
