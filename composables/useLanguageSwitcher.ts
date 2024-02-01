import {useI18n} from "vue-i18n";

export const useLanguageSwitcher = () => {
    const {locale} = useI18n();

    const languagesList = [
        {
            name: "O'zbekcha",
            code: "uz",
            flag: '/flags/uzb-flag.png',
        },
        {
            name: "English",
            code: 'en',
            flag: '/flags/eng-flag.png',
        },
        {
            name: "Русский",
            code: "ru",
            flag: '/flags/rus-flag.png',
        },
    ];

    const currentLanguage = computed(() =>
        languagesList.find((lang) => lang.code === locale.value)
    );

    function changeLocale(_locale: string) {
        useCookie("locale").value = _locale;
        locale.value = _locale;
        // window.location.reload();
    }

    return {currentLanguage, languagesList, changeLocale};
};
