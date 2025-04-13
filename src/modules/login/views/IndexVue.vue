<template>
    <div class="drawer drawer-mobile">
      <input id="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <SideMenuComponent />
  
        <div class="min-h-screen flex items-center justify-center bg-base-100 p-4">
          <div class="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-xl p-6 space-y-6">

            <div class="flex justify-center">
              <div class="bg-base-200 w-32 h-16 rounded-lg flex items-center justify-center">
                <span class="text-lg font-bold">Logo</span>
              </div>
            </div>
  
            <div class="flex justify-center">
              <div class="tabs tabs-bordered">
                <router-link
                  to="/login"
                  class="tab"
                  :class="{ 'tab-active text-red-500': isActive('/login') }"
                >
                  Login
                </router-link>
                <router-link
                  to="/register"
                  class="tab"
                  :class="{ 'tab-active text-red-500': isActive('/register') }"
                >
                  Cadastro
                </router-link>
              </div>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="form-control">
                <label class="label mb-2">
                  <span class="label-text">Email / Usuário</span>
                </label>
                <input
                  type="text"
                  placeholder="Email / Usuário"
                  class="input input-bordered w-full"
                  v-model="form.username"
                />
              </div>
  
              <div class="form-control">
                <label class="label mb-2">
                  <span class="label-text">Senha</span>
                </label>
                <input
                  type="password"
                  placeholder="Senha"
                  class="input input-bordered w-full"
                  v-model="form.password"
                />
              </div>

              <div class="text-sm text-warning text-right cursor-pointer hover:underline">
                Esqueceu sua senha?
              </div>
  
              <button class="btn btn-primary w-full">Logar</button>
  
              <div class="text-sm text-warning text-center cursor-pointer hover:underline">
                Fale conosco
              </div>
            </form>
  
            <footer class="text-center text-gray-400 text-sm pt-4 border-t">
              Footer
            </footer>
          </div>
        </div>
      </div>
  
      <div class="drawer-side">
        <label for="drawer" class="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import { useRoute } from "vue-router";
  import SideMenuComponent from "../../../common/components/side-menu/SideMenuComponent.vue";

  const form = reactive({
    username: "",
    password: "",
  });
  
  const route = useRoute();
  
  const isActive = (path) => route.path === path;
  
  const toggleDrawer = () => {
    const checkbox = document.getElementById("drawer");
    if (checkbox) checkbox.checked = !checkbox.checked;
  };
  </script>
  