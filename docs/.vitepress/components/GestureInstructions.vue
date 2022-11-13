<script setup>
import { computed } from 'vue';
import ShowOnce from './ShowOnce.vue';

const props = defineProps({
  viewId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  fadeAfter: {
    type: Number,
    default: 3000,
  },
  startDelay: {
    type: Number,
  },
  modal: {
    type: Boolean,
    default: false,
  },
  gesture: {
    type: String,
    default: 'tap',
    validator() {
      return ['swipe', 'tap'];
    },
  },
});
const iconClassesMap = {
  tap: 'animate-bounce',
  swipe: 'animate-swipe',
};

const iconClasses = computed(() => iconClassesMap[props.gesture]);
</script>

<template>
  <show-once
    :fadeAfter="fadeAfter"
    :modal="modal"
    class="bg-opacity-70 h-full"
    :view-id="viewId"
    :startDelay="startDelay"
  >
    <template #content>
      <div
        class="flex justify-center items-center h-full bg-transparent !shadow-none p-4 w-full gap-4"
      >
        <q-icon
          class="text-16 text-white flex-0"
          :class="iconClasses"
          name="mdi-cursor-default"
        />
        <div class="text-white header flex-0">{{ message }}</div>
      </div>
    </template>
  </show-once>
</template>
