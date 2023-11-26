import { create } from 'zustand'
import { axiosIntence } from '@/utils/fetch'
import { PostInterface } from '@/utils/type'

interface PostsState {
    posts: PostInterface[]
    fetch: () => void
    error: boolean
    total: number;
}

export const postsStore = create<PostsState>()((set) => ({
    posts: [],
    fetch: async () => {
        try {
            const response = await axiosIntence.get("/api/v2/posts", { params: { per_page: 10 } })
            set({ posts: response.data.data })
            set({ total: response.data.total })
        } catch (error) {
            console.log("error");
        }
    },
    error: false,
    total: 0
}))