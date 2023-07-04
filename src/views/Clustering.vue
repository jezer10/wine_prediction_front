<script>
import { client } from "../api/client";
import GraphModal from "../components/GraphModal.vue";
import _ from "lodash";
export default {
  components: {
    GraphModal,
  },
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
    console.log(this.wineImportances)
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
  <GraphModal @closed="isOpen = false" :show="isOpen"></GraphModal>
  <div class="flex flex-col gap-4 p-20 pt-0 pb-0 h-full">
    <div class="text-white rounded-lg bg-[#9E094F] p-4">
      <div class="font-bold text-4xl">Clusterizacion</div>
      <div class="font-light">
        Comparación de datos entre vino tinto y vino blanco
      </div>
      <button @click="showGraph">Mostrar Graficos</button>
    </div>
    <div class="grid grid-cols-2 gap-12 h-full">
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
</template>
<style></style>
