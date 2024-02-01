<template>
  <div class="flex-y-center flex-col gap-3">
    <div
        class="relative w-[88px] h-[88px] overflow-hidden rounded-full"
    >
      <input
          accept="image/png, image/jpeg"
          id="file"
          type="file"
          name="file"
          class="w-0 h-0 absolute"
          @change="handleFile"
      />
      <div
          class="flex-center cursor-pointer absolute group w-full h-8 bottom-0 pb-1 left-0 z-10 bg-blur-opacity transition-300"
          @click="getFile"
      >
        <i class="icon-edit group-hover:text-blue text-lg text-white transition" />
      </div>
        <div
            v-if="image.url"
            class="w-full h-full relative overflow-hidden cursor-pointer"
        >
          <CommonAvatar :image="image?.url" />
        </div>
        <div
            v-else
            class="w-full h-full flex items-center gap-5 cursor-pointer"
        >
          <CommonAvatar :image="image.url" />
        </div>
    </div>
    <div class="flex-y-center gap-1 cursor-pointer group" @click="removeImage">
      <i
          class="icon-edit-square text-xl text-gray-100 -mb-1 transition-300 group-hover:text-red"
      />
      <p
          class="text-gray-100 text-base leading-130 transition-300 group-hover:text-red"
      >
        {{ $t('delete') }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const emit = defineEmits(['upload', 'remove'])
interface Props {
  item: any
  small: boolean
  error: boolean
  desc: string
  label: string
}
const props = withDefaults(defineProps<Props>(), {
  item: '',
  small: false,
  error: false,
  desc: '',
})
const image = reactive({
  url: props?.image,
  file: null,
})

let imageName = ref('')
const handleFile = (event: any) => {
  image.file = event.target.files[0]
  imageName.value = image.file?.name
  const reader = new FileReader()
  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (e) => {
      image.url = e.target?.result
    }
    send()
  }
}
const getFile = () => {
  const input = document.getElementById('file')
  input?.click()
}
const removeImage = () => {
  image.file = null
  image.url = null
  emit('remove')
}
const send = () => {
  emit('upload', image.file)
}
onMounted(() => {
  if (props.item) {
    image.url = props.item
  }
})
</script>

<style>
.bg-blur-opacity {
  background: #172329CC;
}
</style>
