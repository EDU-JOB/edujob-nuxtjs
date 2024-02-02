<template>
  <label
      v-if="mounted"
      class="bg-dark-700 rounded-lg flex items-center border border-dark-350 focus-within:border-blue transition-all duration-300 group pr-0.5 py-1"
      :class="[inputClass, { '!border-[red]': error }]"
  >
    <div class="flex items-center w-full">
        <textarea
            :id="`a-textarea-${id}`"
            :value="modelValue"
            :autocomplete="autocomplete"
            v-bind="{ minlength, maxlength, max, min, placeholder }"
            class="group"
            :class="[
            'outline-none w-full bg-transparent h-full leading-[125%] placeholder:text-[#4D555A] placeholder:font-medium text-light font-medium text-base md:text-sm px-2 md:px-3 py-1.5 pb-3.5 md:py-2.5 md:pb-6',
            inputStyle,
          ]"
            :pattern="pattern"
            :required="required"
            @input="handleInput"
            @blur="handleBlur"
            @keyup.enter="handleSubmit"
        ></textarea>
    </div>
  </label>
</template>

<script setup lang="ts">
interface Props {
  type?: string;
  placeholder?: string;
  modelValue?: any;
  error?: boolean;
  maxlength?: number | string;
  minlength?: number;
  max?: number;
  min?: number;
  inputClass?: string;
  label?: string;
  errorLabel?: string;
  inputStyle?: string;
  optional?: boolean;
  autocomplete?: string;
  pattern?: string;
  required?: boolean;
  suffixClass?: string;
  inputCustomClass?: string;
  isCount?: boolean
}

withDefaults(defineProps<Props>(), {
  type: "text",
  maxlength: 500,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputStyle: undefined,
  inputClass: undefined,
});

const id = computed(() => {
  return Math.floor(Math.random() * 101);
});

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
  (e: "blur", value: Event): void;
  (e: "keyup", value: Event): void;
}>();

const handleInput = (e: any) => {
  emit("update:modelValue", e.target.value);
};
const handleBlur = (e: Event) => {
  emit("blur", e);
};
const handleSubmit = (e: Event) => {
  emit("keyup", e);
};
</script>
