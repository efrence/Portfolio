<script setup>
  import GestureInstructions from './GestureInstructions.vue';
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
  });
</script>
<template>
<a :href="path" class="w-full h-full">
  <div class="q-pa-md q-gutter-md">
    <div class="row rounded-3xl box-shadow justify-between relative overflow-hidden group">
    <gesture-instructions
                class="text-16"
                view-id="recommandations"
                message="Hover to show description"
                :fadeAfter="2000"
              />
      <div class="hide md:block">
        <div class="absolute w-full h-full z-100 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
          <h2 class="hide lg:block w-full text-center text-white font-semibold m-0 position-relative top-4">{{ title }}</h2>
          <h4 class="hide lg:block text-white font-semibold position-relative -top-8 mt-0 p-6 text-center"> {{ description }} </h4> 
          <h3 class="hide sm:block lg:hide w-full text-center text-white font-semibold m-0 position-relative top-4">{{ title }}</h3>
          <h5 class="hide sm:block lg:hide text-white font-semibold position-relative -top-2 mt-0 p-6 text-center"> {{ description }} </h5> 
        </div>
      </div>
        <q-img
          :src="img"
          class=""
        >
        </q-img>
    </div>
  </div>
</a>
</template>

<style>
 .box-shadow {
		box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
		-webkit-box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
		-moz-box-shadow: 3px 3px 14px -1px rgba(0,0,0,0.53);
 }
</style>

