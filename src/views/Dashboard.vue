<script>
import {
  ArrowDownTrayIcon,
  EyeDropperIcon,
  StarIcon,
  PresentationChartLineIcon,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    ArrowDownTrayIcon,
    EyeDropperIcon,
    StarIcon,
    PresentationChartLineIcon,
  },
};
</script>

<template>
  <div class="h-screen flex gap-4 p-4">
    <div class="h-full w-72 pr-0 flex-none">
      <div class="gradient-card rounded-xl h-full w-full px-8 py-4  flex flex-col justify-between">
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
            <div>
              <div class="border-b text-center text-white text-sm">
                Variables de Entrada
              </div>
              <ul>
                <li
                  v-for="i in 8"
                  class="text-white gap-2 flex items-center py-2 text-sm font-thin"
                >
                  <eye-dropper-icon class="w-4 h-4" /> <span>Acidez Fija</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="border-b text-center text-white text-sm">
                Variables de Salida
              </div>
              <ul>
                <li
                  v-for="i in 3"
                  class="text-white gap-2 flex items-center py-2 text-sm font-thin"
                >
                  <eye-dropper-icon class="w-4 h-4" /> <span>Acidez Fija</span>
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
    <div class="flex flex-col gap-4 w-full">
      <div class="flex items-center gap-4 justify-end">
        <div v-for="i in 3" class="bg-[#898888] w-12 h-12 rounded-lg"></div>
      </div>
      <div class="bg-[#898888] h-full rounded-lg"></div>
    </div>
  </div>
</template>
<style>
.gradient-card {
  background: linear-gradient(180deg, #5c1c3a 0%, #2f081a 100%);
}
</style>
