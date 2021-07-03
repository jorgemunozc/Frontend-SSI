<template>
<div class="three wide column">
  <Navbar />
</div>
  <div class="twelve wide column">
    <table>
      <thead>
        <tr>
          <td rowspan="2">Mes</td>
          <td colspan="10">Periodos Tributarios</td>
        </tr>
        <tr>
    
          <td v-for="year in years" :key="year">{{ year }}</td>
        </tr>
      </thead>
      <tbody v-if="!isLoading">
        <tr v-for="(month, index) in months" :key="month">
          <td>{{ month }}</td>
          <td v-for="year in years" :key="year">
            <a v-if="hasF29(year, index + 1)" @click="loadF29(year, index + 1)">
              Ver
            </a>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="ui centered column" colspan="99">
            <div class="ui tiny inline active loader"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from '@/components/Navbar.vue';
import { obtenerFormularios } from "@/services/F29Service";
import { buscarF29 } from "@/services/F29Service";
import store from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Navbar,
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
        });
    };

    const hasF29 = function (year: string | number, month: string | number) {
      if (typeof year === "string") {
        year = +year;
      }
      if (typeof month === "string") {
        month = +month;
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
