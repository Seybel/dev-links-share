import { reactive } from "vue";
import { PreviewBtn } from "./mock";

interface Store {
    isAuthenticated?: boolean 
    access_token?: string
    links: PreviewBtn[]
    firstName: string
    lastName: string
    email: string
    avatarUrl?: string
    addLink: (arg: PreviewBtn) => void
    updateLink: (arg: PreviewBtn, idx: number) => void
    removeLink: (idx: number) => void
    setFirstName: (name: string) => void
    setlastName: (name: string) => void
    setEamil: (name: string) => void
    setAvatar: (name: string) => void
    setAuth: (val: boolean) => void
    setToken: (val: string) => void
}

export const store = reactive<Store>({
    links: [],
    firstName: 'Aiden',
    lastName: 'Pearce',
    email: 'aiden@example.com',
    avatarUrl: '',
    addLink(platform){
        if(this.links.every(link => link.id != platform.id)){
            this.links.push(platform)
        } else {
            let idx = this.links.findIndex(link => link.id == platform.id)
            this.updateLink(platform, idx)
        }
    },
    updateLink(platform, idx){
        this.links[idx] = {
            ...this.links[idx],
            ...platform
        }
    },
    removeLink(idx) {
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
    },
    setAuth(val){
        this.isAuthenticated = val
    },
    setToken(val){
        this.access_token = val
    }
})