import {createI18n} from "vue-i18n";
import uz from "@/i18n/uz.json";
import ru from "@/i18n/ru.json";
import en from "~/i18n/en.json";
import {defineNuxtPlugin} from "#imports";

const messages = {ru, en, uz};

export default defineNuxtPlugin(({vueApp}) => {
    let locale = useCookie("locale");
    if (!locale.value) {
        locale.value = "uz";
    }
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        missingWarn: false,
        fallbackWarn: false,
        messages,
        locale: locale.value,
    });

    vueApp.use(i18n);
});
