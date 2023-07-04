<script>
import { client, baseURL } from "../api/client";
import GraphModal from "../components/GraphModal.vue";
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
  }),
  mounted() {},
  methods: {},
  computed: {
    clusterGraphUrl() {
      return `${baseURL}/graph/pca`;
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-4 p-4  pt-0 pb-0 text-[#747070] h-full">
    <div class="flex h-full gap-8">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div class="w-2/3">
        <div class="w-full rounded-lg bg-white shadow p-4 flex ">
          <img :src="clusterGraphUrl" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
