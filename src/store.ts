import { reactive } from "vue";
import { PreviewBtn } from "./mock";

interface Store {
    links: PreviewBtn[]
    firstName: string
    lastName: string
    email: string
    avatarUrl?: string
    addLink: (arg: PreviewBtn) => void
    updateLink: (arg: PreviewBtn, idx: number) => void
    removeLink: (id: number, idx: number) => void
    setFirstName: (name: string) => void
    setlastName: (name: string) => void
    setEamil: (name: string) => void
    setAvatar: (name: string) => void
}

export const store = reactive<Store>({
    links: [],
    firstName: 'Aiden',
    lastName: 'Pearce',
    email: 'aiden@example.com',
    avatarUrl: '',
    addLink(platform){
        this.links.push(platform)
    },
    updateLink(platform, idx){
        this.links[idx] = {
            ...this.links[idx],
            ...platform
        }
    },
    removeLink(id, idx) {
        this.links.splice(idx, 1)
    },
    setFirstName(val){
        this.firstName = val
    },
    setlastName(val){
        this.lastName = val
    },
    setEamil(val){
        this.email = val
    },
    setAvatar(val){
        this.avatarUrl = val
    }
})