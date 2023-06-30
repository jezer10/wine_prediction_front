<script>
import GraphModal from "../components/GraphModal.vue";
import {
  ArrowDownTrayIcon,
  EyeDropperIcon,
  StarIcon,
  PresentationChartLineIcon,
} from "@heroicons/vue/24/solid";

import { client } from "../api/client";

export default {
  components: {
    ArrowDownTrayIcon,
    EyeDropperIcon,
    StarIcon,
    PresentationChartLineIcon,
    GraphModal,
  },
  data: () => ({
    columnTypes: {},
    isOpen: false,
    column: "",
    predictionRows: [
      
    ],
  }),
  async mounted() {
    this.addRow()
    await this.getColumns();
  },
  methods: {
    async getColumns() {
      const { data } = await client.get("columns");
      this.columnTypes = data;
    },
    async showGraphModal(column) {
      this.column = column;
      this.isOpen = true;
    },
    async addRow() {
      this.predictionRows.push({
        fixedAcidity: null,
        volatileAcidity: null,
        citricAcid: null,
        residualSugar: null,
        chlorides: null,
        freeSulfurDioxide: null,
        totalSulfurDioxide: null,
        density: null,
        pH: null,
        sulphates: null,
        alcohol: null,
      });
    },
  },
};
</script>

<template>
  <GraphModal :show="isOpen" @closed="this.isOpen = false" :column="column" />
  <div class="h-screen p-4 relative pl-80 pb-0">
    <div class="h-full w-72 pr-0 flex-none absolute top-0 left-0 p-4">
      <div
        class="gradient-card rounded-xl h-full w-full px-8 py-4 flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-center pt-8">
            <div class="relative">
              <div
                class="flex items-center gap-1 text-[#898888] absolute left-0"
              >
                <div class="font-ramaraja text-2xl">Calidad</div>
                <div class="font-sixcaps text-lg -rotate-90">Del</div>
              </div>
              <div
                class="text-shadow font-windsong text-7xl text-white leading-none"
              >
                Vino
              </div>
            </div>
          </div>
          <div class="my-4">
            <button
              class="rounded bg-white text-rose-900 flex items-center justify-center gap-2 w-full py-2 text-sm font-light"
            >
              <ArrowDownTrayIcon class="w-6 h-6" />
              <div>Importar Datos</div>
            </button>
          </div>

          <div class="px-4 flex flex-col gap-4">
            <div v-for="columnType in Object.keys(columnTypes)">
              <div class="border-b text-center text-white text-sm">
                {{ columnType }}
              </div>
              <ul>
                <li
                  v-for="column in columnTypes[columnType]"
                  @click="showGraphModal(column)"
                  class="hover:bg-white rounded hover:text-red-950 text-white gap-2 flex items-center p-2 cursor-pointer text-sm font-light"
                >
                  <eye-dropper-icon class="w-4 h-4" /> <span>{{ column }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-white text-center text-xs font-thin">
          Powered by Clusterizados
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 h-full">
      <div class="flex items-center gap-4 justify-end">
        <div v-for="i in 3" class="bg-[#898888] w-12 h-12 rounded-lg"></div>
      </div>
      <div class="h-full bg-white rounded-lg flex flex-col shadow">
        <div class="px-4 py-2 flex items-center justify-between border-b">
          <span class="font-bold text-lg">Agrupación</span>
          <button
            @click="addRow()"
            class="px-4 py-2 bg-red-900 text-white rounded"
          >
            Agregar Registro
          </button>
        </div>
        <div class="overflow-x-auto h-full">
          <table>
            <thead>
              <tr>
                <th>Acidez Fija</th>
                <th>Acidez Variable</th>
                <th>Acido Citrico</th>
                <th>Azucar Residual</th>
                <th>Cloruros</th>
                <th>Dioxido de Azufre Libre</th>
                <th>Dioxido de Azufre Total</th>
                <th>Densidad</th>
                <th>PH (papel higienico)</th>
                <th>Sulfatos</th>
                <th>Alcohol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in predictionRows">
                <td >
                  <input type="number" v-model="row.fixedAcidity"  />
                </td>
                <td>
                  <input type="number" v-model="row.volatileAcidity" />
                </td>
                <td>
                  <input type="number" v-model="row.citricAcid" />
                </td>
                <td>
                  <input type="number" v-model="row.residualSugar" />
                </td>
                <td>
                  <input type="number" v-model="row.chlorides" />
                </td>
                <td>
                  <input type="number" v-model="row.freeSulfurDioxide" />
                </td>
                <td>
                  <input type="number" v-model="row.totalSulfurDioxide" />
                </td>
                <td>
                  <input type="number" v-model="row.density" />
                </td>
                <td>
                  <input type="number" v-model="row.pH" />
                </td>
                <td>
                  <input type="number" v-model="row.sulphates" />
                </td>
                <td>
                  <input type="number" v-model="row.alcohol" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.gradient-card {
  background: linear-gradient(180deg, #5c1c3a 0%, #2f081a 100%);
}
</style>
