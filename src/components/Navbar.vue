<template>
  <div
    v-if="userType === 'ADMIN'"
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
    v-else
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
      Formulario 29
      </router-link>
    <a
      class="item"
      @click="logOut"
    >
      <i class="power off icon" />
      Cerrar Sesion
    </a>
    <div class="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rol } from "@/types/enums/Rol";
import { logout } from "@/services/LoginService";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Navbar",
  props: {
    userType: {
      type: String,
      default: Rol.EMPRESA,
    },
  },
  setup() {
    const router = useRouter();
    const logOut = () => {
      logout().then(() => {
        router.push({ path: "/" });
      });
    };

    return {
      logOut,
    };
  },
});
</script>
