import { create } from "zustand";
import { account, client } from "../appwrite/config";
import { createJSONStorage, persist } from "zustand/middleware";

const userStore = (set: any, get: any) => ({
    user: null,
    isLoggedIn: false,
    login: async (email: string, password: string) => {
        await account.createEmailSession(email, password)
            .then((resp: any) => {
                set(() => ({ user: resp, isLoggedIn: true}));
            })
    },
    logout: async () => {
        await account.deleteSession('current')
            .then(() => {
                set(() => ({ user: null, isLoggedIn: false}));
            })
    }
})

export const useUserStore = create(
    persist(
        userStore,
        {
            name: "vonage-appwrite-demo",
            storage: createJSONStorage(() => localStorage)
        }
    )
)