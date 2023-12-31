import {
    githubIcon,
    twitterIcon,
    linkendInIcon,
    youtubeIcon,
    facebookIcon,
    twitchIcon,
    devtoIcon,
    codewarsIcon,
    codepenIcon,
    freecodecampIcon,
    gitlabIcon,
    hashnodeIcon,
    stackoverflowIcon,
    frontEndMentorIcon,
  } from "./components/Icons/DropdownIcons";
import { 
    codepenIconLight,
    codewarsIconLight,
    devtoIconLight,
    facebookIconLight,
    freecodecampIconLight,
    frontEndMentorIconLight,
    githubIconLight,
    gitlabIconLight,
    hashnodeIconLight,
    linkendInIconLight,
    stackoverflowIconLight,
    twitchIconLight,
    twitterIconLight,
    youtubeIconLight
  } from "./components/Icons/PreviewIcons";
export interface PreviewBtn {
    id?: number,
    name?: string,
    bg?: string,
    iconName?: string, 
    textColor?: string,
    border?: string,
    link?: string
    avatar?: string
}

export const AllPreviewBtn: PreviewBtn[] = [
    {
        id: 1,
        name: 'GitHub',
        bg: 'bg-github',
        iconName: githubIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 2,
        name: 'Twitter',
        bg: 'bg-twitter',
        iconName: twitterIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 3,
        name: 'LinkedIn',
        bg: 'bg-linkedin',
        iconName: linkendInIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 4,
        name: 'YouTube',
        bg: 'bg-youtube',
        iconName: youtubeIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 5,
        name: 'Facebook',
        bg: 'bg-facebook',
        iconName: facebookIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 6,
        name: 'Twitch',
        bg: 'bg-twitch',
        iconName: twitchIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 7,
        name: 'Dev.to',
        bg: 'bg-devto',
        iconName: devtoIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 8,
        name: 'Codewars',
        bg: 'bg-codewars',
        iconName: codewarsIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 9,
        name: 'Codepen',
        bg: 'bg-dark-grey',
        iconName: codepenIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 10,
        name: 'freeCodeCamp',
        bg: 'bg-freecodecamp',
        iconName: freecodecampIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 11,
        name: 'Gitlab',
        bg: 'bg-gitlab',
        iconName: gitlabIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 12,
        name: 'Hashnode',
        bg: 'bg-hashnode',
        iconName: hashnodeIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 13,
        name: 'Stack Overflow',
        bg: 'bg-stack-overflow',
        iconName: stackoverflowIconLight,
        textColor: 'text-white',
        border: ''
    },
    {
        id: 14,
        name: 'Frontend Mentor',
        bg: 'bg-frontend-mentor',
        iconName: frontEndMentorIconLight,
        textColor: 'text-dark-grey',
        border: 'border-border border'
    },
] 

export const platform = [
    {
      id: 1,
      name: "GitHub",
      avatar: githubIcon,
    },
    {
      id: 2,
      name: "Twitter",
      avatar: twitterIcon,
    },
    {
      id: 3,
      name: "LinkedIn",
      avatar: linkendInIcon,
    },
    {
      id: 4,
      name: "YouTube",
      avatar: youtubeIcon,
    },
    {
      id: 5,
      name: "Facebook",
      avatar: facebookIcon,
    },
    {
      id: 6,
      name: "Twitch",
      avatar: twitchIcon,
    },
    {
      id: 7,
      name: "Dev.to",
      avatar: devtoIcon,
    },
    {
      id: 8,
      name: "Codewars",
      avatar: codewarsIcon,
    },
    {
      id: 9,
      name: "Codepen",
      avatar: codepenIcon,
    },
    {
      id: 10,
      name: "freeCodeCamp",
      avatar: freecodecampIcon,
    },
    {
      id: 11,
      name: "Gitlab",
      avatar: gitlabIcon,
    },
    {
      id: 12,
      name: "Hashnode",
      avatar: hashnodeIcon,
    },
    {
      id: 13,
      name: "Stack Overflow",
      avatar: stackoverflowIcon,
    },
    {
      id: 14,
      name: "Frontend Mentor",
      avatar: frontEndMentorIcon,
    },
  ];