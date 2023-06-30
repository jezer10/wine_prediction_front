<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="text-[#747070]  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div>
                <div>
                  <DialogTitle as="h3" class="leading-6 text-3xl font-bold">
                    Resultados
                  </DialogTitle>
                  <div>Puntaje de la prediccion</div>
                </div>
              </div>
              <div class="flex gap-16 py-16 px-24 items-stretch">
                <div class="flex flex-col justify-between items-center gap-2 h-full">
                  <span class="font-light text-xl">Calidad</span>
                  <span class="text-6xl font-bold">4.5</span>
                  <div class="flex gap-2 text-yellow-300">
                    <star-icon v-for="star in 5" class="w-4 h-4" />
                  </div>
                </div>
                <div class="flex flex-col justify-between items-center h-full gap-2">
                  <span class="font-light text-xl">Estado</span>
                  <FaceSmileIcon class="w-16 h-16"/>
                  <span>Bueno</span>
                </div>
                <div class="flex flex-col justify-between items-center  gap-2">
                  <span class="font-light text-xl">Color</span>
                  <div class="bg-[#9E094F] h-8 w-16 rounded-lg"></div>
                  <span>Vino Tinto</span>

                </div>
              </div>
              <div class="flex justify-center">
                <button
                  type="button"
                  class="bg-[#5C1C3A] text-white rounded-lg px-20 py-2"
                  @click="closeModal"
                >
                  Confirmar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { StarIcon, XMarkIcon,FaceSmileIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    StarIcon,
    XMarkIcon,
    FaceSmileIcon
  },

  props: {
    show: Boolean,
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
