<script>
import { client } from "../api/client";
import PredictionModal from "../components/PredictionModal.vue";
import _ from "lodash";
import { ArrowDownIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    PredictionModal,
    ArrowDownIcon,
  },
  data: () => ({
    isOpen: false,
    predictionData: {},
    informationData: {},
    predictionValues: {},
    selectedFile: null,
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
      const { data } = await client.post("predict/tree", {
        wines: [this.predictionData],
      });
      this.predictionValues = data;
      this.isOpen = true;
    },
    async closeModal() {
      this.isOpen = false;
      this.predictionData = {};
    },
    async importData() {
      try {
        const formData = new FormData();
        formData.append("file", this.selectedFile);
        const { data } = await client.post("/upload", formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        });
        this.predictionData = data;
        this.selectedFile = null
      } catch (error) {
        console.log(error);
      }
    },
    selectingFile({
      target: {
        files: { 0: selectedFile },
      },
    }) {
      this.selectedFile = selectedFile;
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-8 sm:px-8">
    <div class="text-white rounded-lg bg-[#9E094F] p-4">
      <div class="font-bold text-xl sm:text-4xl">Prediccion de datos</div>
      <div class="font-light text-xs sm:text-base">
        Predice la calidad, estado y el color del vino
      </div>
    </div>
    <div class="flex  flex-col sm:flex-row items-center gap-2 sm:gap-4">
      <label
        for="file_input"
        class="cursor-pointer w-full sm:w-auto  text-center bg-[#5C1C3A] text-white px-4 rounded-lg py-2 font-light text-sm"
      >
        Seleccionar Archivo
      </label>

      <input
        type="file"
        accept=".xls, .xlsx, .csv"
        class="hidden"
        @change="selectingFile"
        id="file_input"
      />
      <button
        @click="importData"
        :disabled="!selectedFile?.name"
        class=" text-[#5C1C3A] px-4 rounded-lg py-2 font-light text-sm w-full sm:w-auto truncate text-center"
      >
        {{
          selectedFile?.name
            ? `Importar ${selectedFile.name}`
            : "No seleccionado"
        }}
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-x-4 sm:gap-y-2">
      <div class="flex flex-col" v-for="key in Object.keys(informationData)">
        <span class="font-thin text-[#686868]">{{ toNormalCase(key) }}</span>
        <input
          type="number"
          placeholder="Ingrese un valor"
          v-model="predictionData[key]"
          :min="informationData[key]['min']"
          :max="informationData[key]['max']"
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
    <PredictionModal
      :show="isOpen"
      @closed="closeModal"
      :predictionValues="predictionValues"
    />
  </div>
</template>
