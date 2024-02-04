import { onMounted, ref } from 'vue'

export function useMounted() {
    const mounted = ref(false)
    onMounted(() => {
        mounted.value = true
        if (process.client) {
            const placeholder = document.getElementById(
                'header-breadcrumbs'
            ) as HTMLElement
            if (placeholder) {
                placeholder.innerHTML = ''
            }
        }
    })

    return { mounted }
}
