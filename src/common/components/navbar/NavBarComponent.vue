<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { useRoute } from "vue-router";

const emit = defineEmits(["toggleDrawer"]);
const route = useRoute();
const hideLoginButton = ['/login', '/register'].includes(route.path);
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <button
        class="btn btn-square btn-ghost bg-red-200"
        @click="$emit('toggleDrawer')"
      >
        <Menu class="text-white" />
      </button>
    </div>

    <div class="flex-1">
      <a class="pl-2 text-xl font-semibold">Trampo Facil</a>
    </div>

    <div class="flex-none">
      <router-link to="/login">
        <button v-if="!hideLoginButton" class="btn btn-primary">
          Login
        </button>
      </router-link>
    </div>
  </div>
</template>