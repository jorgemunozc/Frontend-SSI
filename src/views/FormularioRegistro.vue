<template>
  <form @submit.prevent="register">
    <div>
      <label for="razon_social" />Razon Social
      <input v-model="solicitud.razon_social" type="text" />
    </div>
    <div>
      <label for="">Giro</label>
      <!-- <input type="text" v-model="solicitud.giro"> -->
      <GirosList v-model="solicitud.giro"/>
    </div>
    <div>
      <label for="correo">Correo</label>
      <input type="text" v-model="correoParcial" />
      <DominiosList v-model="dominioCorreo" />
    </div>
    <div>
      <label for="">Direccion</label>
      <input
        type="text"
        v-model="solicitud.domicilio"
        name="domicilio"
        id="domicilio"
      />
    </div>
    <div>
      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="solicitud.ciudad" name="ciudad" id="ciudad" />
    </div>
    <input type="submit" value="Registrar" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DominiosList from "@/components/DominiosList.vue";
import GirosList from '@/components/GirosList.vue';
import { createSolicitud } from "@/services/SolicitudService";
export default defineComponent({
  name: "FormularioRegistro",
  components: {
    DominiosList,
    GirosList,
  },
  data() {
    let solicitud = ref({
      razon_social: "",
      correo: "",
      domicilio: "",
      ciudad: "",
      estado: "PENDIENTE",
      giro: ""
    });
    let dominioCorreo = ref("");
    let correoParcial = ref("");
    let message = "";
    return {
      solicitud,
      dominioCorreo,
      correoParcial,
      message
    };
  },
  methods: {
    async register() {
      this.solicitud.correo = this.parseMail(this.correoParcial, this.dominioCorreo);
      console.log("Registrando formulario *beep beep*...");
      console.log(this.solicitud.correo);
      await createSolicitud(this.solicitud).then(res => res)
                            .catch(() => {
                              return null;
                            });
      // if (solicitudCreada != null && solicitudCreada.id > 0) {
      //   this.$router.push()
      // }
    },

    parseMail(user: string, domain: string): string {
      return user + '@' + domain;
    },

  },
});
</script>
