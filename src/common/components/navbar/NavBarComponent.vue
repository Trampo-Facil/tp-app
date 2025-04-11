<script setup lang="ts">
import { Menu } from "lucide-vue-next";

const emit = defineEmits(["toggleDrawer"]);
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
      <a class="pl-2 text-xl">Trampo Facil</a>
    </div>
  </div>
</template>
