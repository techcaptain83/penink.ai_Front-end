import { atom } from "recoil";

export const activeLanguageState = atom<"en" | "fr" | "es">({
    key: 'activeLanguageState',
    default: 'en',
});