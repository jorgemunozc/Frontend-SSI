<template>
  <div class="ui text container">
    <div class="column">
      <h2 class="ui blue image header">
        Ingresar a Sistema
      </h2>
      <form
        class="ui form large segment"
        @submit.prevent="login"
      >
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon" />
            <input
              v-model="user"
              type="text"
            >
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon" />
            <input
              v-model="pass"
              type="password"
            >
          </div>
        </div>
        <input
          class="ui big fluid submit button blue"
          type="submit"
          value="Ingresar"
        >
      </form>
    </div>
    <div class="ui message">
      <span>¿No tiene cuenta? Registrese
        <router-link to="registro">aqui</router-link></span>
    </div>
    <div
      v-if="hasError"
      class="ui error message"
    >
      <i class="exclamation circle icon" />
      {{ mensaje }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import auth from "@/services/LoginService";
import { setLoggedIn, setAdminSession } from "@/auth/setAuth";

export default defineComponent({
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
        console.log("campos vacios");
        this.displayError("Complete los campos");
        return;
      }
      this.hasError = false;

      const credenciales = this.crearCredenciales();
      auth(credenciales)
        .then((rol) => {
          let redirect = "home";
          setLoggedIn();
          if (rol === "ADMIN") {
            redirect = "dashboard";
            setAdminSession();
          }
          this.$router.push(redirect);
        })
        .catch(() => {
            this.displayError('Credenciales incorrectas. Intentelo nuevamente.');
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
