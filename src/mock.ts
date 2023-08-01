export interface PreviewBtn {
    id: number,
    name: string,
    bg: string,
    iconName: string, 
    textColor?: string,
    border?: string,
}

export const AllPreviewBtn: PreviewBtn[] = [
    {
        id: 1,
        name: 'GitHub',
        bg: 'bg-github',
        iconName: '/src/assets/icons/icon-github-color.svg',
        textColor: 'text-white',
        border: ''
    },
    {
        id: 2,
        name: 'Facebook',
        bg: 'bg-facebook',
        iconName: '/src/assets/icons/icon-facebook-color.svg',
        textColor: 'text-white',
        border: ''
    },
    {
        id: 3,
        name: 'Twitter',
        bg: 'bg-twitter',
        iconName: '/src/assets/icons/icon-twitter-color.svg',
        textColor: 'text-white',
        border: ''
    },
    {
        id: 4,
        name: 'YouTube',
        bg: 'bg-youtube',
        iconName: '/src/assets/icons/icon-youtube-color.svg',
        textColor: 'text-white',
        border: ''
    },
] 