<template>
  <div class="flex flex-col pt-8 md:py-16">
    <div 
      class="px-12 py-6 flex flex-col w-full self-center 
        max-w-lg rounded border border-gray-200 md:px-8"
    >
      <h2 class="mx-auto uppercase text-blue-500 font-semibold">
        Ingresar a Sistema
      </h2>
      <form
        class="flex flex-col"
        @submit.prevent="login"
      >
        <div class="h-10 flex my-5 relative text-gray-500 focus-within:text-gray-700">
          <i class="pi pi-user absolute top-2 left-1 text-xl" />
          <input
            v-model="user"
            type="text"
            class="flex-grow border-b-2 border-gray-200 txt-xl pl-10 bg-gray-100 focus:outline-none focus:bg-gray-200"
          > 
        </div>
        <div class="h-10 flex my-5 relative text-gray-500 focus-within:text-gray-700">
          <i class="pi pi-lock absolute top-2 left-1 text-xl" />
          <input
            v-model="pass"
            type="password"
            class="flex-grow border-b-2 border-gray-200 txt-xl pl-10 bg-gray-100 focus:outline-none focus:bg-gray-200"
          > 
        </div>
        <button
          class="h-10 my-5 bg-blue-800 hover:bg-blue-900 text-white text-xl uppercase rounded"
        >
          Ingresar
        </button>
      </form>
    </div>
    <div class="m-4 text-center">
      <span>¿No tiene cuenta? Reg&iacute;strese
        <router-link
          to="registro"
          class="text-blue-600 hover:text-blue-400"
        >aqu&iacute;</router-link></span>
    </div>
    <div class="self-center">
      <router-link 
        to="/reset"
        class="block text-center text-blue-600 hover:text-blue-400"
      >
        ¿Olvidó contraseña?
      </router-link>
    </div>
    <AlertBase
      v-show="hasError"
      v-model:isOpen="hasError"
      :mensaje="mensaje"
      class="container"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import auth from "@/services/LoginService";
import AlertBase from '@/components/AlertBase.vue';

export default defineComponent({
  components: {
    AlertBase
  },
  data() {
    return {
      pass: "",
      user: "",
      hasError: false,
      mensaje: "",
    };
  },

  methods: {
    login() {
      console.log("Intentando loguear...");
      if (this.pass.length === 0 || this.user.length === 0) {
        this.displayError("Complete los campos.");
        return;
      }
      this.hasError = false;

      const credenciales = this.crearCredenciales();
      auth(credenciales)
        .then((redirect) => this.$router.push(redirect))
        .catch(() => {
            this.displayError('Credenciales incorrectas. Inténtelo nuevamente.');
        });
    },

    crearCredenciales() {
      const password = this.pass;
      let credenciales: { [k: string]: string } = {
        password: password,
      };
      if (this.metodoLogin() === "correo") {
        credenciales.correo = this.user;
      } else {
        credenciales.rut = this.user;
      }
      return credenciales;
    },

    metodoLogin() {
      let metodo = "rut";
      const esCorreo = this.user.indexOf("@") != -1;
      if (esCorreo) {
        metodo = "correo";
      }

      return metodo;
    },

    displayError(msg: string) {
      this.hasError = true;
      this.mensaje = msg;
    },
  },
});
</script>