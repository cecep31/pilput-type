import { create } from 'zustand'
import { axiosIntence } from '@/utils/fetch'
import { YourData } from '@/types'
import { getToken } from '@/utils/Auth'

interface yourdatasState {
    data: YourData
    fetch: () => void
    error: boolean
}

export const yourStore = create<yourdatasState>()((set) => ({
    data: {
        email: "Loading...",
        image: "placeholder/spinner.gif",
        first_name: "",
        last_name: "",},
    fetch: async () => {
        try {
            const response = await axiosIntence.get("/auth/profile", {
              headers: { Authorization: `Bearer ${getToken()}` },
            });
            set({ data: response.data })
          } catch (error) {
            console.log(error);
            set({ error: true })
          }
    },
    error: false,
}))