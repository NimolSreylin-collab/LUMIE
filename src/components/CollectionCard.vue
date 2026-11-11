<template>
  <div
    class="h-full flex flex-col overflow-hidden rounded-2xl border border-[#DCE6DC] bg-white shadow-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    data-aos="fade-up"
  >
    <!-- Image -->
    <div class="h-90 overflow-hidden bg-[#F4F8F1] relative">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Category Badge -->
      <span
        class="px-3 py-1 top-4 rounded-full bg-white/90 text-xs font-medium text-[#0F3D2E] absolute left-4 backdrop-blur-sm"
      >
        {{ category }}
      </span>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-1 flex-col">
      <h2
        class="text-xl font-semibold text-[#0F3D2E] transition-colors duration-300 group-hover:text-[#7A9E7E]"
      >
        {{ title }}
      </h2>

      <p class="mt-2 flex-1 text-sm text-gray-500 leading-6">
        {{ description }}
      </p>

   
      
      <!-- Button -->
      <div class="mt-auto pt-5">
        <router-link
          :to="`/collection/${category}`"
          class="inline-flex w-fit items-center justify-center gap-2
                px-6 py-2.5 rounded-full
                bg-[#0F3D2E] text-sm font-semibold text-white
                transition-all duration-300
                hover:bg-[#174A3A] hover:gap-3
                group/btn"
        >
          <span>Shop Collection</span>

          <ArrowRight
            class="h-4 w-4 shrink-0 transition-transform duration-300
                  group-hover/btn:translate-x-1"
            :stroke-width="2"
          />
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ArrowRight} from "@lucide/vue";
defineProps<{
  title: string;
  category: string;
  description: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
</style>
