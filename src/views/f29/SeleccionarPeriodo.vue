<template>
  <p>
    Mediante esta opción podrás realizar tu declaración de Formulario 29 (F29)
  </p>
  <p>
    Te recomendamos revisar con detención la información antes de enviar tu
    declaración.
  </p>
  <div class="ui centered grid">
    <div>Para comenzar, selecciona el periodo a declarar:</div>
    <form class="ui form" @submit.prevent="mostrarF29">
      <div class="inline fields">
        <div class="inline field">
          <label for="month">Mes</label>
          <select name="month" id="month" class="ui dropdown" v-model="selectedMonth">
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>
        <div class="inline field">
          <label for="year">Año</label>
          <select name="year" id="year" class="ui dropdown" v-model="selectedYear">
            <option v-for="year in years" :key="year.id" :value="year">{{ year }}</option>
          </select>
        </div>
        <div>
          <button class="ui blue button">Aceptar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
/**
 * TODO: - Verificar que no se ingrese declaracion de mes mayor al correspondiente
 *       - Mostrar mensaje cuando ya se ha enviado una declaracion para el mes seleccionado
 */
import { defineComponent, ref } from 'vue'
import { buscarF29 } from '@/services/F29Service';
import store from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const f29Store = store;
    const router = useRouter();
    const selectedMonth = ref(0);
    const selectedYear = ref(2021);
    const currDate = new Date();
    const years: number[] = [];
    const nuevoF29Path = '/nuevo-f29';

    const setCurrPeriod = () => {
      if (currDate.getMonth() === 0) {
          selectedMonth.value = 12;
          selectedYear.value = currDate.getFullYear() - 1; 
      } else {
        selectedMonth.value = currDate.getMonth();
      }
    }
    const fillYearDropdown = () => {
      for (let i = 2021; i <= currDate.getFullYear(); i++) {
        years.push(i);
      }
    }

    const mostrarF29 = () => {
      const periodoTributario = {
        month: selectedMonth.value,
        year: selectedYear.value,
      }
      f29Store.resetValues();
      buscarF29(periodoTributario)
      .then((res) => {
        if (res.estado === 'ENVIADO') {
          console.error('Declaracion de mes seleccionado ya fue enviada. No se puede modificar');
          return;
        }
        f29Store.loadData(res);
        router.push({ 
          path: nuevoF29Path, 
          query: {
            'month': periodoTributario.month,
            'year': periodoTributario.year,
          }
        })
      })
      .catch(err => {
        const errCode = err.response.status;
        if (errCode === 404) {
          router.push({
            path: nuevoF29Path,
            query: {
            'month': periodoTributario.month,
            'year': periodoTributario.year,
            }
            });
        } else {
          console.error(err.response.data.error);
        }
      })
    };


    setCurrPeriod();
    fillYearDropdown();
    return {
      selectedYear,
      selectedMonth,
      mostrarF29,
      years,
    }
  },
})
</script>
