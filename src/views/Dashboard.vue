<script>
import GraphModal from "../components/GraphModal.vue";
import {
  ArrowDownTrayIcon,
  EyeDropperIcon,
  StarIcon,
  PresentationChartLineIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  Bars3Icon,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    ArrowDownTrayIcon,
    EyeDropperIcon,
    StarIcon,
    PresentationChartLineIcon,
    ChartPieIcon,
    PresentationChartBarIcon,
    GraphModal,
    Bars3Icon,
  },
  data: () => ({
    isOpen: false,
    isSideOpen: false,
  }),
};
</script>

<template>
  <button
    @click="isSideOpen = !isSideOpen"
    class="w-12 h-12 rounded-full p-2 text-white fixed bottom-4 right-4 bg-red-900 z-20 block sm:hidden"
  >
    <Bars3Icon class="w-full h-full" />
  </button>
  <div class="h-screen p-4 relative sm:pl-76">
    <div
      class="h-full w-72 pr-0 flex-none top-0 p-4 fixed z-20"
      :class="[isSideOpen ? 'left-0' : '-left-full sm:left-0 ']"
    >
      <div
        class="gradient-card rounded-xl h-full w-full px-8 py-4 flex flex-col justify-between"
      >
        <div class="flex flex-col gap-8">
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
          <div class="flex flex-col gap-4">
            <div
              class="border-b text-[#B8B8B8] text-sm text-center border-[#B8B8B8]"
            >
              Opciones
            </div>
            <ul class="flex flex-col gap-2">
              <li>
                <router-link
                  :to="{ name: 'clustering' }"
                  class="w-full font-thin text-sm text-white flex items-center gap-4 px-4 py-2 hover:bg-white rounded-lg hover:text-red-900"
                >
                  <ChartPieIcon class="w-6 h-6" /> <span>Clusterizacion</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'prediction' }"
                  class="w-full font-thin text-sm text-white flex items-center gap-4 px-4 py-2 hover:bg-white rounded-lg hover:text-red-900"
                >
                  <PresentationChartLineIcon class="w-6 h-6" />
                  <span>Prediccion de datos</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-white text-center text-xs font-thin">
          Powered by Clusterizados
        </div>
      </div>
    </div>
    <div class="h-full w-full overflow-y-auto">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
.gradient-card {
  background: linear-gradient(180deg, #5c1c3a 0%, #2f081a 100%);
}
</style>
