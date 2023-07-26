<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-dark-grey"
      >Platform</ListboxLabel
    >
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <img
            :src="selected.avatar"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <img src="../../assets/icons/icon-chevron-down.svg" alt="" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="item in platform"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="item.avatar"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                  >{{ item.name }}</span
                >
              </div>

              <!-- <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span> -->
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
// import { CheckIcon } from "@heroicons/vue/20/solid";
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
} from "../Icons/DropdownIcons.ts";

const platform = [
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
    name: "Youtube",
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
];

const selected = ref(platform[3]);
</script>
