<script>
export default {};
</script>

<template>
  <p class="text-white fixed bottom-3 right-4 text-xs">
    Powered By <span class="italic">Clusterizados</span>
  </p>
  <img
    src="@/assets/images/wine_splash_vector.svg"
    class="h-full -z-20 fixed right-0"
    alt=""
  />
  <img
    src="@/assets/images/rectangle_back.png"
    class="fixed -z-30 w-full h-full"
  />
  <img
    src="@/assets/images/rectangle_front.png"
    class="fixed -z-10 w-full h-full"
  />

  <div class="h-screen p-4 sm:p-16">
    <div class="flex flex-col gap-4 sm:gap-0 items-start">
      <div class="bg-[#5C1C3A] w-full px-16 py-4 rounded-lg shadow block sm:hidden">
        <img
          src="@/assets/images/logo.svg"
          class=" w-full "
          alt="splash logo"
        />
      </div>
      <div class="relative hidden sm:block">
        <div class="flex items-center gap-4 text-[#898888] absolute left-0">
          <div class="font-ramaraja text-[106px]">Calidad</div>
          <div class="font-sixcaps text-[54px] -rotate-90">Del</div>
        </div>
        <div
          class="text-shadow font-windsong text-[300px] text-white leading-none"
        >
          Vino
        </div>
      </div>
      <div class="flex flex-col gap-4 items-start ">
        <div class="font-light text-xs sm:text-[16px] bg-[#5C1C3A] sm:bg-inherit rounded-lg text-gray-200 p-4 sm:text-inherit">
          <p>
            Un proyecto de
            <span class="italic text-[#2F081A] font-thin">Clusterizados</span>.
            Predicción de los datos mas relevantes
          </p>

          <span>de la calidad del vino y sus propiedades.</span>
        </div>
        <router-link
          :to="{ name: 'dashboard' }"
          class="bg-gradient-to-r from-rose-950 to-rose-900 rounded-lg shadow text-white px-8 py-2 w-full sm:w-auto text-center"
        >
          Empezar
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>
.text-shadow {
  text-shadow: 1px 1px 2px black;
}
</style>
