<template>
  <div :class="{ 'z-19': isDropdownOpen, '!cursor-not-allowed ': disabled }">
    <FormDropdown
        wrapper-class=""
        :class="{ ' !pointer-events-none': disabled }"
        full
        @on-toggle="onToggleDropdown"
    >
      <template #head>
        <FormInput
            :readonly="true"
            :model-value="(labelKey ? currentItem[labelKey] : currentItem) ?? ''"
            input-class="cursor-pointer"
            :class="{ '!bg-[#EBEBEB] !text-[#8390A6]': disabled }"
            v-bind="{ error, placeholder }"
        >
          <template #suffix>
            <i class="icon-chevron-up text-sm rotate-180 transition-all"
               :class="{'rotate-0 transition-all':isDropdownOpen}"></i>
          </template>
        </FormInput>
      </template>
      <template v-if="!disabled" #body>
        <div class="h-full   max-h-[270px]">
          <div
              v-for="(item, index) in list"
              :key="index"
              class="py-3 px-4 bg-gray-200 text-gray-900 text-base  transition-200 leading-5 font-medium  border-b border-solid border-gray-400"
              :class="{
              'cursor-not-allowed pointer-events-none !text-primary ':
                currentItem[valueKey] === item[valueKey],
            }"
              @click="handleSelect(item, index)"
          >
            {{ labelKey ? item[labelKey] : item }}
          </div>
          <div v-if="observe" ref="allItemsTarget"></div>
        </div>
      </template>
    </FormDropdown>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

interface Props {
  list: Array<object>;
  label?: string;
  valueKey?: string;
  labelKey?: string;
  iconKey?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  modelValue?: number | string;
  observe?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  valueKey: undefined,
  iconKey: "",
  labelKey: "",
  disabled: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
  (e: "fetchData"): void;
}>();

const isDropdownOpen = ref(false);
const currentItem = ref("");

const allItemsTarget = ref(null);
const allItemsIsVisible = ref(false);
const allItemsObserver = ref();

if (props.observe) {
  allItemsObserver.value = useIntersectionObserver(
      allItemsTarget,
      ([{isIntersecting}]) => {
        allItemsIsVisible.value = isIntersecting;
      }
  );
}

watch(
    () => allItemsIsVisible.value,
    (newValue) => {
      if (newValue) {
        emit("fetchData");
      }
    }
);

function handleSelect(item: any, idx: number) {
  if (currentItem.value[props.valueKey] !== item[props.valueKey]) {
    currentItem.value = item;
    let current = undefined;

    props.valueKey ? (current = item[props.valueKey]) : (current = item);

    emit("update:modelValue", current);
  }
}

function onToggleDropdown(isOpened: boolean) {
  isDropdownOpen.value = isOpened;
}

async function getCurrent() {
  if (props.modelValue) {
    currentItem.value = props.list.find(
        (e) => e[props.valueKey] == props.modelValue
    );
  } else {
    if (props.modelValue === 0) {
      currentItem.value = props.list.find(
          (e) => e[props.valueKey] == props.modelValue
      );
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    getCurrent();
  }, 100);
});

watch(
    () => props.modelValue,
    () => {
      if (!props.modelValue) {
        currentItem.value = "";
      }
    }
);
</script>
