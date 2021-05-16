<template>
    <div class="ui centered grid">
        <div class="ui grid">
            <div class="row">
                Razon Social: {{ empresa.razon_social }}
            </div>
            <div class="row">
                Giro: {{ empresa.giro }}
            </div>
            <div class="row">
                Rut: {{ empresa.rut }} - {{ empresa.dv }}
            </div>
            <div class="row">
                Direccion: {{ empresa.domicilio }}
            </div>
            <div class="row">
                Ciudad: {{ empresa.ciudad }}
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
