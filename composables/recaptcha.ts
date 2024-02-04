import { load } from 'recaptcha-v3'

export const useRecaptcha = async (action: string): Promise<string> => {
    try {
        const recaptcha = await load(import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY as string, { useRecaptchaNet: true, autoHideBadge: true })
        return await recaptcha.execute(action)
    } catch (err) {
        throw new Error(err)
    }
}