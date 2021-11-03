<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container px-4">
    <h1 class="text-blue-700 text-2xl font-semibold mb-2">
      Formularios 29 Declarados
    </h1>
    <p class="font-light">
      Aqu&iacute; podr&aacute; revisar todas las declaraciones de impuestos mensuales declarados exitosamente en
      cada per&iacute;odo tributario.
    </p>
    <table class="mx-8 mt-4 border border-gray-400 border-collapse">
      <thead>
        <tr>
          <td
            rowspan="2"
            class="bg-gray-300 border border-gray-400"
          >
            Mes
          </td>
          <td
            colspan="10"
            class="bg-gray-300 text-center border border-gray-400"
          >
            Per&iacute;odos Tributarios
          </td>
        </tr>
        <tr>
          <td v-if="isLoading">
            <Loading-spinner />
          </td>
          <td
            v-for="year in years"
            :key="year"
            class="bg-blue-100 text-center border border-gray-400"
          >
            {{ year }}
          </td>
        </tr>
      </thead>
      <tbody v-if="!isLoading">
        <tr
          v-for="(month, index) in months"
          :key="month"
        >
          <td class="bg-blue-100 border border-gray-400">
            {{ month }}
          </td>
          <td
            v-for="year in years"
            :key="year"
            class="text-center border border-gray-400"
          >
            <a
              v-if="hasF29(year, index + 1)"
              class="text-blue-700 hover:text-blue-800 cursor-pointer"
              @click="loadF29(year, index + 1)"
            >
              Ver
            </a>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td>
            <span class="opacity-0">Septiembre</span>
            <LoadingSpinner />
          </td>
          <td
            class="h-80"
            colspan="99"
          >
            <div>
              <LoadingSpinner />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from '@/components/Navbar.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { obtenerFormularios } from "@/services/F29Service";
import { buscarF29 } from "@/services/F29Service";
import store from "@/store/f29.module";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Navbar,
    LoadingSpinner,
  },
  setup() {
    const years = ref<string[]>([]);
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let f29Data = {};
    const f29Store = store;
    const router = useRouter();
    const isLoading = ref(true);
    const loadYears = function (dataSource: Object) {
      Object.keys(dataSource)
        .sort(function (a, b) {
          return parseInt(b) - parseInt(a);
        })
        .forEach((year) => {
          const nextYear = (parseInt(year) + 1).toString();
          if (years.value.indexOf(nextYear) === -1 && years.value.length > 0) {
            years.value.push(nextYear);
          }
          years.value.push(year);
        })
      if (years.value.length === 0) {
        years.value.push('2021');
      }
    };

    const hasF29 = function (year: string | number, month: string | number) {
      if (typeof year === "string") {
        year = parseInt(year);
      }
      if (typeof month === "string") {
        month = parseInt(month);
      }
      if (f29Data[year] && f29Data[year].indexOf(month) !== -1) {
        return true;
      }
      return false;
    };

    const loadF29 = function(year, month) {
      const periodo = {
        'month': month,
        'year': year
      };
      buscarF29(periodo).then((res) => {
        f29Store.loadData(res);
        router.push({
          name: 'Ver F29',
          query: {
            'month': month,
            'year': year
          }
        })
      })
      .catch(err => {
        console.error(err.response.data);
      })
    }

    obtenerFormularios().then((res) => {
      loadYears(res);
      f29Data = res;
      isLoading.value = false;
    });

    return {
      months,
      years,
      f29Data,
      isLoading,
      hasF29,
      loadF29,
    };
  },
});
</script>
