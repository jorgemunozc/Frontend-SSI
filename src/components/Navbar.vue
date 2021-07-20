<template>
  <nav
    v-if="isLoggedIn() && isAdmin()"
    class="flex flex-col items-stretch bg-gray-800 md:fixed md:w-48"
  >
    <router-link
      class="block py-4 hover:bg-gray-700 text-center text-white"
      to="/ver-solicitudes"
    >
      <i class="file icon" />
      Gestionar Solicitudes
    </router-link>
    <router-link 
      to="dominios-correo"
      class="block py-4 hover:bg-gray-700 text-center text-white"
    >
      Gesti&oacute;n dominio correos
    </router-link>
    <a
      class="block py-4 hover:bg-red-900 text-center text-white cursor-pointer"
      @click="logOut"
    >
      <i class="power off icon" />
      Cerrar Sesi&oacute;n
    </a>
    
    <!-- <li>Gestionar Dominios</li> -->
  </nav>
  <nav
    v-else-if="isLoggedIn()"
    class="flex justify-start items-stretch bg-blue-50 mb-4 h-12 w-full"
  >
    <router-link
      class="flex items-center px-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:bg-blue-100"
      to="/home"
    >
      <i class="user icon" />
      Mis Datos
    </router-link>
    <!-- <a class="item">Ver Formulario 19</a> -->
    <router-link 
      to="/f29"
      class="flex items-center px-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:bg-blue-100"
    >
    <i class="folder icon"></i>
      Formulario 29
      </router-link>
    <a
      class="flex items-center px-4 cursor-pointer hover:bg-red-400"
      @click="logOut"
    >
      Cerrar Sesi&oacute;n
    </a>
    <!-- <div class="item" /> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { logout } from "@/services/LoginService";
import { useRouter } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';

export default defineComponent({
  name: "Navbar",
  setup() {
    const router = useRouter();
    const logOut = () => {
      logout().then(() => {
        router.push({ path: "/" });
      });
    };
    return {
      logOut,
      isLoggedIn,
      isAdmin,
    };
  },
});
</script>
