<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="mx-2 h-80 max-w-3xl lg:mx-8">
    <h1 class="text-blue-700 text-2xl font-semibold mb-2">
      Declarar IVA
    </h1>
    <div class="container text-sm">
      <p class="mb-2">
        Mediante esta opción podrás realizar tu declaración de Formulario 29 (F29)
      </p>
      <p class="mb-2">
        Te recomendamos revisar con detención la información antes de enviar tu
        declaración.
      </p>
      <div class="flex flex-col max-w-4xl bg-gray-100 my-4 p-2">
        <div class="max-w-xs text-sm mb-4">
          Para comenzar, selecciona el per&iacute;odo a declarar:
        </div>
        <form
          class="flex flex-grow"
          @submit.prevent="mostrarF29"
        >
          <div class="mx-2">
            <label
              for="month"
              class="mx-2"
            >Mes</label>
            <select
              id="month"
              v-model="selectedMonth"
              name="month"
              class="border h-8 px-2"
            >
              <option value="1">
                Enero
              </option>
              <option value="2">
                Febrero
              </option>
              <option value="3">
                Marzo
              </option>
              <option value="4">
                Abril
              </option>
              <option value="5">
                Mayo
              </option>
              <option value="6">
                Junio
              </option>
              <option value="7">
                Julio
              </option>
              <option value="8">
                Agosto
              </option>
              <option value="9">
                Septiembre
              </option>
              <option value="10">
                Octubre
              </option>
              <option value="11">
                Noviembre
              </option>
              <option value="12">
                Diciembre
              </option>
            </select>
          </div>
          <div class="mx-2">
            <label
              for="year"
              class="mx-2"
            >Año</label>
            <select
              id="year"
              v-model="selectedYear"
              name="year"
              class="border h-8 px-2"
            >
              <option
                v-for="year in years"
                :key="year.id"
                :value="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
          <div class=" self-end xs:self-auto mx-2">
            <button class="bg-blue-800 px-4 text-white h-8">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <AlertBase
    v-if="errorMsg"
    v-model:isOpen="errorMsg"
    :mensaje="errorMsg"
    class="container"
  />
</template>
<script lang="ts">
/**
 * TODO: - Verificar que no se ingrese declaracion de mes mayor al correspondiente
 *       - Mostrar mensaje cuando ya se ha enviado una declaracion para el mes seleccionado
 */
import { defineComponent, ref } from 'vue'
import { buscarF29 } from '@/services/F29Service';
import store from '@/store/f29.module';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import AlertBase from '@/components/AlertBase.vue';

export default defineComponent({
  components: {
    Navbar,
    AlertBase
  },
  setup() {
    const f29Store = store;
    const router = useRouter();
    const selectedMonth = ref(0);
    const selectedYear = ref(2021);
    const currDate = new Date();
    const years: number[] = [];
    const nuevoF29Path = '/nuevo-f29';
    const errorMsg = ref('');
    let currentPeriod = new Date();
    currentPeriod.setDate(1);
    //Hack para resetear hora y milisegundos
    // currentPeriod.setHours(0,0,0);
    // currentPeriod.setMilliseconds(0);
    const setCurrPeriod = () => {
      if (currDate.getMonth() === 0) {
          selectedMonth.value = 12;
          selectedYear.value = currDate.getFullYear() - 1;
          currentPeriod.setMonth(11);
          currentPeriod.setFullYear(currDate.getFullYear() - 1)
      } else {
        selectedMonth.value = currDate.getMonth();
        currentPeriod.setMonth(currDate.getMonth() - 1);
      }
    }
    const fillYearDropdown = () => {
      for (let i = 2021; i <= currDate.getFullYear(); i++) {
        years.push(i);
      }
    }

    const mostrarF29 = () => {
      const selectedPeriod = new Date(selectedYear.value, selectedMonth.value - 1);
      selectedPeriod.setHours(0,0,0);
      if (selectedPeriod > currentPeriod) {
        errorMsg.value = 'Período seleccionado no es válido.';
        return;
      }
      const periodoTributario = {
        month: selectedMonth.value,
        year: selectedYear.value,
      }
      f29Store.resetValues();
      buscarF29(periodoTributario)
      .then((res) => {
        if (res.estado === 'ENVIADO') {
          console.error('Declaración de mes seleccionado ya fue enviada. No se puede modificar');
          errorMsg.value = 'Declaración de mes seleccionado ya fue enviada. No se puede modificar';
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
      years,
      errorMsg,
      mostrarF29,
    }
  },
})
</script>
