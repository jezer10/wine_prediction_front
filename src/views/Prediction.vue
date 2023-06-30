<script>
import { client } from "../api/client";
import PredictionModal from "../components/PredictionModal.vue";
import _ from "lodash";

export default {
  components: {
    PredictionModal,
  },
  data: () => ({
    isOpen: false,
    predictionData: {},
    informationData: {},
  }),
  mounted() {
    this.getParameters();
  },
  methods: {
    toNormalCase(str) {
      return _.startCase(_.camelCase(str));
    },
    async getParameters() {
      const {
        data: { all },
      } = await client.get("summary");
      this.informationData = all;
    },
    async predictData() {
      console.log(this.predictionData);
      return;
      const { data } = await client.post("predict/tree", {
        wines: [this.predictionData],
      });
      console.log(data);
      this.isOpen = true;
    },
  },
};
</script>

<template>
  <PredictionModal :show="isOpen" @closed="isOpen = false" />
  <div class="flex flex-col gap-12 p-12">
    <div class="text-white rounded-lg bg-[#9E094F] p-4">
      <div class="font-bold text-4xl">Prediccion de datos</div>
      <div class="font-light">
        Predice la calidad, estado y el color del vino
      </div>
    </div>
    <div class="grid grid-cols-4 gap-x-4 gap-y-2">
      <div class="flex flex-col" v-for="key in Object.keys(informationData)">
        <span class="font-thin text-[#686868]">{{ toNormalCase(key) }}</span>
        <input
          type="number"
          placeholder="Ingrese un valor"
          v-model="predictionData[key]"
        />
        <span class="text-xs font-thin">
          (
          {{ informationData[key]["min"] }} - {{ informationData[key]["max"] }}
          )
        </span>
      </div>
    </div>
    <button
      @click="predictData()"
      class="rounded-lg bg-[#5C1C3A] text-white py-4"
    >
      Predecir datos
    </button>
  </div>
</template>
