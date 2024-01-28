// @ts-ignore
import {FetchOptions} from "ohmyfetch";
import {NitroFetchRequest} from "nitropack";
import {useAuthStore} from "~/stores/auth";
import {generateUUID} from "~/helpers";

class ApiFetcher {
    public readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private generateFingerprint() {
        const cookie = useCookie("visitorId");
        if (!cookie.value) {
            cookie.value = generateUUID();
        }
        return cookie.value;
    }

    private $service(options: FetchOptions) {
        const locale = useCookie("locale");
        const {getTokens} = useAuthStore();
        const tokens = getTokens();
        let authHeader: { Authorization?: string } = {};
        if (tokens?.access) {
            authHeader.Authorization = `Bearer ${tokens?.access}`;
        }
        return $fetch.create({
            ...options,
            baseURL: this.baseUrl,
            headers: {
                ...options?.headers,
                ...authHeader,
                fingerprint: this.generateFingerprint(),
                "Accept-Language": locale.value || "uz",
            },
        });
    }

    public $get<T = any>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.$service(options)(endpoint)
                .then((response: T) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    }

    public $post<T = any>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.$service({...options, method: "POST"})(endpoint)
                .then((response: T) => {
                    resolve(response);
                })
                .catch((error) => reject(error.response));
        });
    }

    public $put<T = any>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.$service({...options, method: "PUT"})(endpoint)
                .then((response: T) => {
                    resolve(response);
                })
                .catch((error) => reject(error.response));
        });
    }

    public $patch<T = any>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.$service({...options, method: "PATCH"})(endpoint)
                .then((response: T) => {
                    resolve(response);
                })
                .catch((error) => reject(error.response));
        });
    }

    public $delete<T = any>(
        endpoint: NitroFetchRequest,
        options?: FetchOptions
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            this.$service({...options, method: "DELETE"})(endpoint)
                .then((response: T) => {
                    resolve(response);
                })
                .catch((error) => reject(error.response));
        });
    }
}

export const $api = new ApiFetcher(import.meta.env.VITE_API_BASE_URL as string);

// import { FetchOptions } from "ohmyfetch";
// import { NitroFetchRequest } from "nitropack";
// import { useAuthStore } from "~/store/auth";
// import { generateUUID } from "~/helpers";
//
// class ApiFetcher {
//   public readonly baseUrl: string;
//
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl;
//   }
//
//   private generateFingerprint() {
//     const cookie = useCookie("visitorId");
//     if (!cookie.value) {
//       cookie.value = generateUUID();
//     }
//     return cookie.value;
//   }
//
//   private $service(options: FetchOptions) {
//     const locale = useCookie("locale");
//     const { getTokens } = useAuthStore();
//     const tokens = getTokens();
//     let authHeader: { Authorization?: string } = {};
//     if (tokens?.access) {
//       authHeader.Authorization = `Bearer ${tokens?.access}`;
//     }
//     return $fetch.create({
//       ...options,
//       baseURL: this.baseUrl,
//       headers: {
//         ...options?.headers,
//         ...authHeader,
//         fingerprint: this.generateFingerprint(),
//         "Accept-Language": locale.value || "uz",
//       },
//     });
//   }
//
//   public $get<T = any>(
//     endpoint: NitroFetchRequest,
//     options?: FetchOptions
//   ): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.$service(options)(endpoint)
//         .then((response: T) => {
//           resolve(response);
//         })
//         .catch((error) => {
//           reject(error.response)
//         });
//     });
//   }
//
//   public $post<T = any>(
//     endpoint: NitroFetchRequest,
//     options?: FetchOptions
//   ): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.$service({ ...options, method: "POST" })(endpoint)
//         .then((response: T) => {
//           resolve(response);
//         })
//         .catch((error) => reject(error.response));
//     });
//   }
//
//   public $put<T = any>(
//     endpoint: NitroFetchRequest,
//     options?: FetchOptions
//   ): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.$service({ ...options, method: "PUT" })(endpoint)
//         .then((response: T) => {
//           resolve(response);
//         })
//         .catch((error) => reject(error.response));
//     });
//   }
//
//   public $patch<T = any>(
//     endpoint: NitroFetchRequest,
//     options?: FetchOptions
//   ): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.$service({ ...options, method: "PATCH" })(endpoint)
//         .then((response: T) => {
//           resolve(response);
//         })
//         .catch((error) => reject(error.response));
//     });
//   }
//
//   public $delete<T = any>(
//     endpoint: NitroFetchRequest,
//     options?: FetchOptions
//   ): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.$service({ ...options, method: "DELETE" })(endpoint)
//         .then((response: T) => {
//           resolve(response);
//         })
//         .catch((error) => reject(error.response));
//     });
//   }
// }
//
// export const $api = new ApiFetcher(import.meta.env.VITE_API_BASE_URL as string);

