<template>
    <div class="ui sixteen wide column grid">
        <div class="ui fluid grid container">
            <div class="row ui vertical segment grid">
                <span class="bold">Razon Social:</span>  {{ empresa.razon_social }}
            </div>
            <div class="row ui vertical segment grid">
                <span class="bold">Giro:</span> {{ empresa.giro }}
            </div>
            <div class="row ui vertical segment grid">
                <span class="bold">Rut:</span> {{ empresa.rut }} - {{ empresa.dv }}
            </div>
            <div class="row ui vertical segment grid">
                <span class="bold">Direccion:</span> {{ empresa.domicilio }}
            </div>
            <div class="row ui vertical segment grid">
                <span class="bold">Ciudad:</span> {{ empresa.ciudad }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { obtenerEmpresa } from "@/services/EmpresaService";

export default defineComponent({
    name: 'InfoBasica',
    setup(props) {
        const empresa = ref({} as Empresa);
        const cargarDatos = () => {
            obtenerEmpresa()
                .then((data) => empresa.value = data)
                .catch((err) => {
                    console.log(err.response);
                }); 
        };
        cargarDatos();
        return {
            empresa,
        }
    },
    
})
</script>

<style scoped>
.bold {
    font-weight: bold;
}
</style>