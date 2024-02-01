<template>
  <div
      :class="[
      wrapperClass,
      { 'dropdown-active': opened },
      'dropdown select-none rounded-[8px] h-full cursor-pointer !relative transition duration-150',
    ]"
  >
    <div
        class="flex-center-between h-full gap-[5px]"
        @click.stop="opened = !opened"
    >
      <slot name="head"/>
      <div
          v-if="arrow"
          class="flex-center w-4 h-4 transition duration-150"
          :class="[
          full ? 'absolute right-[10px]' : '',
          opened ? 'rotate-[180deg]' : '',
          arrowDisplay ? 'sl:!inline-flex !hidden' : '',
        ]"
      >
        <svg
            :class="arrowClass"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M7 10.5L14 17.5L21 10.5"
              stroke="#434545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <transition name="fromDown">
      <div
          v-if="opened"
          class="dropdown__list overflow-auto absolute  right-0 w-auto h-auto bg-[#191C1C] rounded-[8px] transition duration-150 z-40"
          :class="[{ '!w-full': full }, bodyClass, above ? 'bottom-[40px]' : 'top-[60px]']"
          @click.prevent="handleCloseDropdown"
      >
        <slot name="body"/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

interface Props {
  arrow?: boolean;
  arrowClass?: string;
  full?: boolean;
  removeEvent?: boolean;
  above?: boolean;
  wrapperClass?: string;
  bodyClass?: string;
  arrowDisplay?: boolean;
  close?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  arrow: false,
  full: false,
  removeEvent: false,
  above: false,
  arrowClass: "",
  wrapperClass: "",
  arrowDisplay: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: "on-toggle", boolean: any): void;
}>();

let opened = ref(false);
watch(opened, (newValue) => emit("on-toggle", newValue));

onMounted(() => {
  if (!props.removeEvent) {
    document.addEventListener("mousedown", hideEvent, {passive: true});
  }
});


watch(
    () => props.removeEvent,
    (newV) => {
      if (newV) {
        document.removeEventListener("mousedown", hideEvent);
      } else {
        document.addEventListener("mousedown", hideEvent);
      }
    }
);

const hideEvent = (e: any) => {
  if (!e.target.closest(".dropdown-active") && opened.value) {
    opened.value = false;
  }
};

function handleCloseDropdown() {
  if (!props.removeEvent) {
    opened.value = !opened.value;
  }
}

function openDropDownCheck() {
  opened.value = !opened.value;
}
</script>

<style scoped>
.dropdown-active .dropdown__list {
  box-shadow: 0 5px 8px rgba(51, 64, 85, 0.04),
  inset 0 -1px 0 rgba(182, 186, 191, 0.2);
  opacity: 1;
  visibility: visible;
  transform-origin: top center;
  border: 1px solid #E4E5E8;
}

.fromDown-enter-active {
  animation: fromDown 200ms ease-out;
}

.fromDown-leave-active {
  animation: fromDown 200ms ease-in reverse;
}

@keyframes fromDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
