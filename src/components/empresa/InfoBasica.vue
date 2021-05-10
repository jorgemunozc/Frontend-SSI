<template>
    <div>
        <div>
            Razon Social: {{ empresa.razon_social}}
        </div>
        <div>
            Giro: {{ empresa.giro }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { obtenerEmpresa } from "@/services/EmpresaService";

export default defineComponent({
    props: ['rut'],
    setup(props) {
        const empresa = ref({} as Empresa);
        const cargarDatos = async () => {
            await obtenerEmpresa(props.rut)
                .then((data) => empresa.value = data)
                .catch((err) => {
                    console.log(err.response);
                }); 
        };

        onMounted(
            () => {
                cargarDatos();
            }
        ); 
        return {
            empresa,
            cargarDatos,
        }
    },
    
})
</script>
