<template>
  <nav
    v-if="isLoggedIn() && isSuperUser()"
    class="flex flex-col items-stretch bg-gray-800 md:fixed md:w-48"
  >
    <template v-if="isAdmin()">
      <router-link
        class="block py-4 hover:bg-gray-700 text-center text-white"
        to="/ver-solicitudes"
      >
        <i class="file icon" />
        Gestionar Solicitudes
      </router-link>
      <router-link
        to="/dominios-correo"
        class="block py-4 hover:bg-gray-700 text-center text-white"
      >
        Gestión dominio correos
      </router-link>
      <router-link
        to="/auditores"
        class="block py-4 hover:bg-gray-700 text-center text-white"
      >
        Auditores
      </router-link>
    </template>
    <router-link
      to="/ver-empresas"
      class="block py-4 hover:bg-gray-700 text-center text-white"
    >
      Empresas
    </router-link>
    <a
      class="block py-4 hover:bg-red-900 text-center text-white cursor-pointer"
      @click="logOut"
    >
      <i class="power off icon" />
      Cerrar Sesión
    </a>
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
    <router-link
      class="flex items-center px-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:bg-blue-100"
      to="/mi-credencial"
    >
      Mi Credencial
    </router-link>
    <router-link 
      to="/f29"
      class="flex items-center px-4 border-b-2 border-black border-opacity-0 hover:border-opacity-100 hover:bg-blue-100"
    >
      <i class="folder icon" />
      Formulario 29
    </router-link>
    <a
      class="flex items-center px-4 cursor-pointer hover:bg-red-400"
      @click="logOut"
    >
      Cerrar Sesión
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logout } from "@/services/LoginService";
import { useRouter } from "vue-router";
import isLoggedIn from '@/auth/isLoggedIn';
import isAdmin from '@/auth/isAdmin';
import isSuperUser from '@/auth/checkPermissions';

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
      isSuperUser
    };
  },
});
</script>
