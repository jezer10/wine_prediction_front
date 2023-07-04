<script>
import { client, baseURL } from "../api/client";

import _ from "lodash";
export default {
  data: () => ({
    isOpen: false,
    predictionData: {
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
    },
    wineData: {
      all: {},
      white: {},
      red: {},
    },
    wineImportances: {
      white: [],
      red: [],
    },
  }),
  async mounted() {
    await this.getProfile();
    console.log(this.wineImportances);
  },
  computed: {
    clusterGraphUrl() {
      return `${baseURL}/graph/pca`;
    },
  },
  methods: {
    async getProfile() {
      const { data } = await client.get("/profile");
      this.wineImportances = data;
    },
    async getData() {
      const { data } = await client.get("/summary");
      this.wineData = data;
    },
    toNormalCase(str) {
      return _.startCase(_.camelCase(str));
    },
    showGraph() {
      this.$router.push({
        name: "graph",
      });
    },
  },
};
</script>

<template>
  <div class="flex flex-col h-full gap-8 px-8">
    <div class="text-white rounded-lg bg-[#9E094F] p-4 relative">
      <img
        class="absolute bottom-0 right-0"
        src="@/assets/images/clustering.png"
        alt=""
      />
      <div class="font-bold text-4xl">Clusterizacion</div>
      <div class="font-light">
        Comparación de datos entre vino tinto y vino blanco
      </div>
    </div>
    <div class="grid grid-cols-2 gap-16 h-full">
      <div class="shadow-lg rounded-lg h-full flex flex-col">
        <div class="h-48">
          <img
            src="@/assets/images/bottle_red.png"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-white flex flex-col h-full rounded-b-lg">
          <div class="pt-4 -translate-x-8 relative">
            <span class="absolute text-white font-bold text-2xl top-8 left-8"
              >Vino Tinto</span
            >
            <img src="@/assets/images/red_label.png" class="w-68" />
          </div>
          <div class="grid grid-cols-4 gap-4 px-4">
            <div
              v-for="wine in wineImportances.red"
              class="text-center rounded-lg shadow-lg aspect-square bg-[#EBEBEB] text-[#6B6B6B] flex flex-col gap-2 items-center justify-center"
            >
              <div class="font-bold text-2xl">
                {{ wine["avg"] }}
              </div>
              <div class="text-xs">
                {{ toNormalCase(wine.name) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow-lg rounded-lg h-full flex flex-col">
        <div class="h-48">
          <img
            src="@/assets/images/bottle_white.png"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-white flex flex-col h-full rounded-b-lg">
          <div class="pt-4 -translate-x-8 relative">
            <span class="absolute text-white font-bold text-2xl top-8 left-8"
              >Vino Blanco</span
            >
            <img src="@/assets/images/blue_label.png" class="w-68" />
          </div>
          <div class="grid grid-cols-4 gap-4 px-4">
            <div
              v-for="wine in wineImportances.white"
              class="text-center shadow-lg rounded-lg aspect-square bg-[#EBEBEB] text-[#6B6B6B] flex flex-col gap-2 items-center justify-center"
            >
              <div class="font-bold text-2xl">
                {{ wine["avg"] }}
              </div>
              <div class="text-xs">
                {{ toNormalCase(wine.name) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mt-8 py-4 h-full gap-8  px-8 text-[#747070]">
    <div class="w-1/3 flex flex-col gap-4">
      <div class="flex gap-4">
        <div>
          <img src="@/assets/icons/shadow.svg" class="w-16 h-16" />
        </div>
        <div class="flex flex-col">
          <div class="font-light text-xl">Grafico de</div>
          <div class="font-bold text-4xl">Clusterizacion</div>
        </div>
      </div>
      <div class="text-sm font-light">
        Se revelan dos clusters distintos que representan dos colores de vino: el vino tinto y el vino blanco. El Cluster 1, asociado con el vino tinto, exhibe características distintivas que incluyen altos niveles de acidez, un aroma intenso y complejo, un cuerpo completo y una alta astringencia. Por otro lado, el Cluster 2, que representa el vino blanco, muestra niveles moderados de acidez, un aroma suave y delicado, un cuerpo ligero y una baja astringencia. Estos resultados permiten una diferenciación clara entre los dos tipos de vino basada en las variables y características analizadas durante el proceso de PCA.
      </div>
    </div>
    <div class="w-2/3">
      <div class="w-full h-full bg-white rounded-lg shadow">
        <img :src="clusterGraphUrl" class="w-full h-full shadow object-contain rounded-lg" />
      </div>
    </div>
  </div>
</template>
<style></style>
