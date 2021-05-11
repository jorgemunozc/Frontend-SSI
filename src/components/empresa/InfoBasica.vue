<template>
    <div>
        <div>
            Razon Social: {{ empresa.razon_social }}
        </div>
        <div>
            Giro: {{ empresa.giro }}
        </div>
        <div>
            Rut: {{ empresa.rut }} - {{ empresa.dv }}
        </div>
        <div>
            Direccion: {{ empresa.domicilio }}
        </div>
        <div>
            Ciudad: {{ empresa.ciudad }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { obtenerEmpresa } from "@/services/EmpresaService";

export default defineComponent({
    props: ['rut'],
    setup(props) {
        const empresa = ref({} as Empresa);
        const cargarDatos = () => {
            obtenerEmpresa(props.rut)
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
