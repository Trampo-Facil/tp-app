<script setup lang="ts">
import { Phone, Info, Star } from "lucide-vue-next";

const occupations = [
  {
    id: 1,
    name: "Tia bel",
    occupation: "Faxineira",
    avatar: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    rating: 4.5,
    qtdRating: 12
  },
  {
    id: 2,
    name: "Gótica doida",
    occupation: "Proplayer",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    rating: 5,
    qtdRating: 34
  },
  {
    id: 3,
    name: "Sabrino",
    occupation: "Atendente",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    rating: 2.3,
    qtdRating: 5
  },
  {
    id: 4,
    name: "3oitão",
    occupation: "Investidor",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    rating: 3.6,
    qtdRating: 9
  },
];
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
      Top trabalhores com avaliações mais alta
    </li>
    <li v-for="occupation in occupations" :key="occupation.id" class="list-row flex items-center gap-4">
      <div class="flex items-center gap-4 p-2 w-full">
        <div>
          <img class="size-20 rounded-full" :src="occupation.avatar" alt="name image" />
        </div>
        <div class="flex-1 flex flex-col gap-1">
          <div>{{ occupation.name }}</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            {{ occupation.occupation }}
          </div>
          <div class="flex items-center mt-1">
            <div class="flex gap-0.5">
              <template v-for="index in 5" :key="index">
                <Star v-if="index <= Math.floor(occupation.rating)" class="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <div v-else-if="index === Math.ceil(occupation.rating)" class="relative w-4 h-4">
                  <Star class="absolute w-4 h-4 text-yellow-400 fill-yellow-400" :style="{
                    clipPath: `inset(0 ${100 - (occupation.rating % 1) * 100}% 0 0)`
                  }" />
                  <Star class="w-4 h-4 text-gray-300 fill-none" />
                </div>
                <Star v-else class="w-4 h-4 text-gray-300 fill-none" />
              </template>
            </div>
            <span class="ml-2 text-xs text-gray-500">({{ occupation.qtdRating }})</span>
          </div>
        </div>
        <button class="btn btn-square btn-ghost">
          <Phone />
        </button>
        <button class="btn btn-square btn-ghost">
          <Info />
        </button>
      </div>
    </li>
  </ul>
</template>
