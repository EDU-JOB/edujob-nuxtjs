import dayjs from "dayjs";
import "dayjs/locale/uz-latn";
import "dayjs/locale/uz";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
import customParseFormat from "dayjs/plugin/customParseFormat";
import parsePhoneNumber from "libphonenumber-js";

dayjs.extend(customParseFormat);
export function toEmbed(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);

  if (match && match?.at(2)?.length === 11) {
    return match?.at(2);
  } else {
    return "error";
  }
}

export function formatMoneyDecimal(number: any, fix = 0, option = "decimal") {
  let style: string;
  if (["USD", "RUB"].includes(option)) {
    style = "currency";
  } else if (["kilogram", "meter", "percent"].includes(option)) {
    style = "unit";
  } else {
    style = "";
  }

  const newStyle: string = style;
  const option2 = {
    newStyle, //  unit currency percent decimal
    [newStyle]: option,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix,
    decimal: ".",
  };
  return number
    ? new Intl.NumberFormat("ru-RU", option2).format(number)
    : "0.00";
}

const timeouts: { [key: string]: any } = {};

const cTimeout = (key = "key") => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key]);
    timeouts[key] = undefined;
  }
};
export const debounce = (key = "key", fn = () => {}, timeout = 500) => {
  const sTimeout = (key: string, fn: any, timeout: number) => {
    cTimeout(key);

    timeouts[key] = setTimeout(() => {
      try {
        fn();
      } catch (e) {
        console.log(e);
      }

      timeouts[key] = undefined;
    }, timeout);
  };

  return sTimeout(key, fn, timeout);
};

export const calcTabIndex = (index: number, offset: number) => offset + index;

export function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ""}
          (${format && format[2] ? format[2] : ""})
          ${format && format[3] ? format[3] : ""}
          ${format && format[4] ? format[4] : ""}
          ${format && format[5] ? format[5] : ""}`.replace(/\n/g, "");
}

export const deMask = (value: string) => value.replace(/[)(_\s-)]/g, "");
export function isPhone(value: string) {
  if (!value?.length) {
    return true;
  }
  const phoneNumber = parsePhoneNumber(value, "UZ");
  return phoneNumber?.isValid();
}

export function hashCardNumberMore(number: string) {
  const firstFourNumber = number?.slice(0, 4);
  const middleTwoNumber = number?.slice(4, 6);
  const lastFourNumber = number?.slice(12, 16);

  return `${firstFourNumber} ${middleTwoNumber}** **** ${lastFourNumber}`;
}
export function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
      "MacIntel",
    ].includes(navigator?.platform) ||
    navigator?.platform?.includes("Mac") ||
    (navigator?.userAgent?.includes("Mac") && "ontouchend" in document)
  );
}

export function formatNumber(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const checkExpireDate = (value: any) => {
  let month = value.slice(0, 2);
  let year = value.slice(3, 5);

  let currentMonth = new Date().getMonth() + 1;
  let currentYear = String(new Date().getFullYear()).slice(2, 5);
  let checkMonth =
    +month <= 12 &&
    (+year !== +currentYear ||
      (+year === +currentYear && +month >= currentMonth));
  let checkYear = year >= currentYear && year <= +currentYear + 5;

  return checkYear && checkMonth;
};

export const cardNumberValidator = (value: string) =>
  /8600|9860|5440|4200/.test(value);

export async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

export const generateUniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

export const onErrorImage = (img: HTMLImageElement) => {
  img.onerror = null;
  img.src = "/images/defaults/image.png";
};

export const moneyMask = () => ({
  mask: [
    "D",
    "##",
    "###",
    "# ###",
    "## ###",
    "### ###",
    "# ### ###",
    "## ### ###",
    "### ### ###",
    "# ### ### ###",
  ],
  tokens: {
    D: {
      pattern: /[1-9]/,
    },
  },
});

export const removeSpaces = (text: string) => {
  return text?.replace(/\s/g, "");
};

export const share = (network: string, title: string) => {
  if (process.client) {
    switch (network) {
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${window.location.href}&text=${title}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${title}\n+${window.location.href}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?t=${title}\n${window.location.href}`,
          "_blank"
        );
        break;
    }
  }
};

export function generateUUID() {
  // Public Domain/MIT
  let d = new Date().getTime(); //Timestamp
  let d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function isValidDate(date: any) {
  return dayjs(date, "DD.MM.YYYY", true).isValid();
}

export function elapsedTime(seconds: number) {
  if (seconds) {
    const format = (val: any) => `0${Math.floor(val)}`.slice(-2);
    let minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(":");
  } else {
    return "00:00";
  }
}

export function translateDate(date: Date, locale: string) {
  if (locale === "uz") {
    return dayjs(date).locale("uz-latn").format("MMMM D, YYYY");
  } else if (locale === "uzc") {
    return dayjs(date).locale("uz").format("MMMM D, YYYY");
  } else {
    return dayjs(date).locale(locale).format("MMMM D, YYYY");
  }
}
