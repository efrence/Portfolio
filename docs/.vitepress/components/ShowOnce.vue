<script setup>
import { computed, onMounted, ref } from 'vue';
import { LocalStorage, QDialog } from 'quasar';

const props = defineProps({
  viewId: {
    type: String,
    required: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  fadeAfter: {
    type: Number,
  },
  startDelay: {
    type: Number,
    default: 0,
  },
});

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};

onMounted(() => {
  setTimeout(() => {
    isOpen.value = true;
    if (props.fadeAfter) {
      console.log('fade after');
      setTimeout(close, props.fadeAfter);
    }
  }, props.startDelay);
});
</script>

<template>
  <q-slide-transition :appear="startDelay > 0">
    <component
      v-show="isOpen"
      :is="modal ? QDialog : 'div'"
      class="bg-opacity-50 bg-black-100 absolute w-full h-full z-1000"
      v-model="isOpen"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <slot name="content" :close="close"> </slot>
    </component>
  </q-slide-transition>
</template>
