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
      <p class="mb-2 font-semibold">
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
            >
              Mes
            </label>
            <MonthsDropdown v-model="selectedMonth" />
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
                v-for="year in yearsForDropdown"
                :key="year.id"
                :value="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
          <div class=" self-end xs:self-auto mx-2">
            <button class="bg-blue-800 px-4 text-white h-8 w-20">
              <span v-show="!isProcessing">Aceptar</span>
              <LoadingSpinner v-show="isProcessing" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <AlertBase
    v-if="openAlert"
    v-model:isOpen="openAlert"
    :mensaje="errorMsg"
    class="container"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { buscarF29 } from '@/services/F29Service';
import store from '@/store/f29.module';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import AlertBase from '@/components/AlertBase.vue';
import MonthsDropdown from '@/components/MonthsDropdown.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default defineComponent({
  components: {
    Navbar,
    AlertBase,
    MonthsDropdown,
    LoadingSpinner
  },
  setup() {
    const f29Store = store;
    const router = useRouter();
    const selectedMonth = ref(0);
    const selectedYear = ref(2021);
    const currDate = new Date();
    const yearsForDropdown: number[] = [];
    let currentTaxPeriod = new Date();
    const newF29UrlPath = '/nuevo-f29';
    const errorMsg = ref('');
    const isProcessing = ref(false);
    const openAlert = ref(false);

    const setCurrTaxPeriod = function(): void {
      currentTaxPeriod = getCurrTaxPeriod();
    }

    const getCurrTaxPeriod = function() : Date {
      const taxPeriod = new Date();
      taxPeriod.setDate(1);
      if (isCurrMonthJanuary()) {
        taxPeriod.setMonth(11);
        taxPeriod.setFullYear(currDate.getFullYear() - 1)
      } else {
        taxPeriod.setMonth(currDate.getMonth() - 1);
      }
      //Hack para resetear hora y milisegundos
      taxPeriod.setHours(0,0,0);
      taxPeriod.setMilliseconds(0);
      return taxPeriod;
    }

    const setDefaultPeriodInForm = function (): void {
      if (isCurrMonthJanuary()) {
        selectedMonth.value = 12;
        selectedYear.value = currDate.getFullYear() - 1;
      } else {
        selectedMonth.value = currDate.getMonth();
      }
    } 
    const isCurrMonthJanuary = function() : boolean {
      return currDate.getMonth() === 0;
    }

    const fillYearsDropdown = () => {
      for (let i = 2021; i <= currDate.getFullYear(); i++) {
        yearsForDropdown.push(i);
      }
    }

    const getSelectedPeriod = function() : Date {
      const selectedPeriod = new Date(selectedYear.value, selectedMonth.value - 1);
      selectedPeriod.setHours(0,0,0);
      return selectedPeriod;
    }
    const mostrarF29 = () => {
      isProcessing.value = true;
      const selectedPeriod = getSelectedPeriod();
      if (selectedPeriod > currentTaxPeriod) {
        errorMsg.value = 'Período seleccionado no es válido.';
        openAlert.value = true;
        isProcessing.value = false;
        return;
      }
      const periodoTributario = {
        month: selectedMonth.value,
        year: selectedYear.value,
      }
      f29Store.resetValues(false);
      buscarF29(periodoTributario)
      .then((res) => {
        if (res.estado === 'ENVIADO') {
          console.error('Declaración de mes seleccionado ya fue enviada. No se puede modificar');
          errorMsg.value = 'Declaración de mes seleccionado ya fue enviada. No se puede modificar';
          openAlert.value = true;
          throw new Error('Ya fue enviado');
        }
        f29Store.loadData(res);
        router.push({ 
          path: newF29UrlPath, 
          query: {
            'month': periodoTributario.month,
            'year': periodoTributario.year,
          }
        })
      })
      .catch(err => {
        //Si es un throw enviado por nosotros lo ignoramos
        const errCode = err.response.status;
        if (!errCode) {
          return
        }
        if (errCode === 404) {
          router.push({
            path: newF29UrlPath,
            query: {
            'month': periodoTributario.month,
            'year': periodoTributario.year,
            }
            });
        } else {
          console.error(err.response.data.error);
        }
      })
      .finally(() => isProcessing.value = false);
    };
    setCurrTaxPeriod();
    setDefaultPeriodInForm();
    fillYearsDropdown();
    return {
      selectedYear,
      selectedMonth,
      yearsForDropdown,
      errorMsg,
      openAlert,
      isProcessing,
      mostrarF29,
    }
  },
})
</script>
