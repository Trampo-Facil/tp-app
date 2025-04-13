<template>
  <div class="drawer drawer-mobile">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <SideMenuComponent />
      
      <div
        class="min-h-screen flex items-center justify-center bg-base-100 p-4"
      >
        <div
          class="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-xl p-6 space-y-6"
        >
          <div class="flex justify-center">
            <div
              class="bg-base-200 w-32 h-16 rounded-lg flex items-center justify-center"
            >
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

          <form @submit.prevent="handleRegister" class="space-y-4">
            <div class="form-control">
              <label class="label mb-2"
                ><span class="label-text">Nome</span></label
              >
              <input
                v-model="form.nome"
                type="text"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control">
              <label class="label mb-2"
                ><span class="label-text">Email / Usuário</span></label
              >
              <input
                v-model="form.email"
                type="email"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control">
              <label class="label mb-2"
                ><span class="label-text">Telefone</span></label
              >
              <input
                v-model="form.telefone"
                type="text"
                class="input input-bordered w-full"
              />
            </div>

            <div class="flex gap-2">
              <div class="form-control w-1/2">
                <label class="label mb-2">
                  <span class="label-text">Área</span>
                </label>
                <select
                  v-model="form.area"
                  class="select select-bordered w-full"
                >
                  <option>Engenharia</option>
                  <option>Design</option>
                  <option>TI</option>
                  <option>Gestão</option>
                </select>
              </div>

              <div class="form-control w-1/2">
                <label class="label mb-2">
                  <span class="label-text">Profissão</span>
                </label>
                <select
                  v-model="form.profissao"
                  class="select select-bordered w-full"
                >
                  <option>Engenheiro Civil</option>
                  <option>UX Designer</option>
                  <option>Desenvolvedor</option>
                  <option>Gerente de Projetos</option>
                </select>
              </div>
            </div>

            <div class="form-control">
              <label class="label mb-2"
                ><span class="label-text">Senha</span></label
              >
              <input
                v-model="form.senha"
                type="password"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control">
              <label class="label mb-2"
                ><span class="label-text">Confirmar Senha</span></label
              >
              <input
                v-model="form.confirmarSenha"
                type="password"
                class="input input-bordered w-full"
              />
            </div>

            <div
              v-if="senhaInvalida"
              class="text-error text-sm text-center font-semibold"
            >
              As senhas não coincidem
            </div>

            <button class="btn btn-primary w-full">Cadastrar</button>

            <div
              class="text-sm text-warning text-center cursor-pointer hover:underline"
            >
              <router-link to="/login">Possui cadastro?</router-link>
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
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../../../common/components/navbar/NavBarComponent.vue";
import SideMenuComponent from "../../../common/components/side-menu/SideMenuComponent.vue";

const route = useRoute();
const isActive = (path) => route.path === path;

const form = reactive({
  nome: "",
  username: "",
  telefone: "",
  area: "",
  profissao: "",
  senha: "",
  confirmarSenha: "",
});

const senhaInvalida = computed(
  () => form.senha && form.confirmarSenha && form.senha !== form.confirmarSenha
);

const handleRegister = () => {
  if (senhaInvalida.value) {
    console.warn("Senhas não coincidem!");
    return;
  }

  console.log("Cadastrado:", form);
};

const toggleDrawer = () => {
  const checkbox = document.getElementById("drawer");
  if (checkbox) checkbox.checked = !checkbox.checked;
};
</script>
