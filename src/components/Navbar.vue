<template>
  <div
    v-if="isLoggedIn() && isAdmin()"
    class="ui fluid vertical labeled icon menu"
    style="height: 100%"
  >
    <router-link
      class="item"
      to="/ver-solicitudes"
    >
      <i class="file icon" />
      Gestionar Solicitudes
    </router-link>
    <a
      class="item"
      @click="logOut"
    >
      <i class="power off icon" />
      Cerrar Sesion
    </a>
    <div class="item" />
    <!-- <li>Gestionar Dominios</li> -->
  </div>
  <div
    v-else-if="isLoggedIn()"
    class="ui fluid vertical labeled icon menu"
    style="height: 100%"
  >
    <router-link
      class="item"
      to="/home"
    >
      <i class="user icon" />
      Mis Datos
    </router-link>
    <!-- <a class="item">Ver Formulario 19</a> -->
    <router-link 
      to="/f29"
      class="item"
    >
    <i class="folder icon"></i>
      Formulario 29
      </router-link>
    <a
      class="item"
      @click="logOut"
    >
      <i class="power off icon" />
      Cerrar Sesion
    </a>
    <!-- <div class="item" /> -->
  </div>
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
