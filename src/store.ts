import { reactive } from "vue";

interface Store {
    links: number[]
    userName: string
    email: string
    avatarUrl?: string
    addLink: (id: number, listIdx: number) => void
    removeLink: (id: number) => void
}

export const store = reactive<Store>({
    links: [],
    userName: 'Aiden Pearce',
    email: 'aiden@example.com',
    avatarUrl: '/src/assets/control_man.png',
    addLink(id, listIdx){
        this.links[listIdx] = id
    },
    removeLink(id) {
        this.links = this.links.filter(val => val != id)
    },
})