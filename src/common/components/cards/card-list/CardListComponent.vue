<script setup lang="ts">
import { Heart, PlayCircle } from "lucide-vue-next";
const songs = [
  {
    id: 1,
    artist: "Dio Lupa",
    song: "Remaining Reason",
    image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
  },
  {
    id: 2,
    artist: "Ellie Beilish",
    song: "Bears of a fever",
    image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    id: 3,
    artist: "Sabrino Gardener",
    song: "Cappuccino",
    image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
];
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
      Most played songs this week
    </li>
    <li
      v-for="song in songs"
      :key="song.id"
      class="list-row flex items-center gap-4"
    >
      <div class="bg- rounded-box flex items-center gap-4 p-2">
        <div>
          <img
            class="size-10 rounded-box"
            :src="song.image"
            alt="Artist image"
          />
        </div>
        <div>
          <div>{{ song.artist }}</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            {{ song.song }}
          </div>
        </div>
        <button class="btn btn-square btn-ghost">
          <Heart />
        </button>
        <button class="btn btn-square btn-ghost">
          <PlayCircle />
        </button>
      </div>
    </li>
  </ul>
</template>
