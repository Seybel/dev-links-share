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
        name: 'Frontend Mentor',
        bg: 'bg-white',
        iconName: '/src/assets/icons/icon-front-end-mentors.svg',
        textColor: 'text-dark-grey',
        border: 'border border-border'
    },
    {
        id: 3,
        name: 'Facebook',
        bg: 'bg-facebook',
        iconName: '/src/assets/icons/icon-facebook-color.svg',
        textColor: 'text-white',
        border: ''
    },
    {
        id: 4,
        name: 'Twitter',
        bg: 'bg-twitter',
        iconName: '/src/assets/icons/icon-twitter-color.svg',
        textColor: 'text-white',
        border: ''
    },
    {
        id: 5,
        name: 'YouTube',
        bg: 'bg-youtube',
        iconName: '/src/assets/icons/icon-youtube-color.svg',
        textColor: 'text-white',
        border: ''
    },
] 