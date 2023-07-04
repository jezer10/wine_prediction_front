<template>
  <div v-if="show" class="text-[#747070] flex flex-col gap-4 sm:gap-0">
    <div>
      <h3 class="leading-6 text-3xl font-bold">Resultados</h3>
      <div>Puntaje de la prediccion</div>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-16 sm:py-16 sm:px-24 items-stretch justify-center"
    >
      <div class="flex flex-col justify-between items-center gap-2 h-full">
        <span class="font-light text-xl">Calidad</span>
        <span class="text-6xl font-bold">{{ predictionValues.quality }}</span>
        <div class="flex gap-2 text-yellow-300">
          <star-icon v-for="star in predictionValues.quality" class="w-4 h-4" />
        </div>
      </div>
      <div class="flex flex-col justify-between items-center h-full gap-2">
        <span class="font-light text-xl">Estado</span>
        <FaceSmileIcon class="w-16 h-16" v-if="predictionValues.state == 1" />
        <FaceFrownIcon class="w-16 h-16" v-else />

        <span> {{ predictionValues.state == 1 ? "Bueno" : "Malo" }}</span>
      </div>
      <div class="flex flex-col justify-between items-center gap-2">
        <span class="font-light text-xl">Color</span>
        <div
          class="h-8 w-16 rounded-lg"
          :class="[
            predictionValues.color == 'red' ? 'bg-[#9E094F]' : 'bg-yellow-100',
          ]"
        ></div>
        <span>
          {{ predictionValues.color == "red" ? "Vino Tinto" : "Vino Blanco" }}
        </span>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="bg-[#5C1C3A] text-white rounded-lg px-20 py-2"
        @click="closeModal"
      >
        Limpiar
      </button>
    </div>
  </div>
</template>

<script>
import {
  StarIcon,
  XMarkIcon,
  FaceSmileIcon,
  FaceFrownIcon,
} from "@heroicons/vue/24/solid";
export default {
  components: {
    StarIcon,
    XMarkIcon,
    FaceSmileIcon,
    FaceFrownIcon,
  },

  props: {
    show: Boolean,
    predictionValues: Object,
  },
  mounted() {
    console.log(this.predictionValues);
  },
  methods: {
    closeModal() {
      this.$emit("closed");
    },
    openModal() {
      this.isOpen = true;
    },
  },
};
</script>
