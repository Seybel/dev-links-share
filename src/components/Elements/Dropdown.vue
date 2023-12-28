<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-dark-grey"
      >Platform</ListboxLabel
    >
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-dark-grey shadow-sm ring-1 ring-inset ring-grey-85 focus:outline-none focus:border-purple hover:shadow-light-purple focus:ring-grey-85 sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <img
            :src="selected?.avatar"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span class="ml-3 block truncate">{{ selected?.name }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3"
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
            v-for="item in compPlatforms"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-purple' : 'text-dark-grey',
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
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { store } from "../../store";
import { PreviewBtn, platform } from "../../mock";

const props = defineProps<{
  currentLinkId: number;
  idx: number;
}>();

const emit = defineEmits<{
  (event: "changePlatform", platform: PreviewBtn): void;
}>();

const compPlatforms = ref([])
const selected = ref();

const updatePlatform = () => {
  if(store.links?.length > 0){
    compPlatforms.value = [] 
    let linkIds = store.links.map(link => link?.id)
    platform.forEach(elem => {
      if (!linkIds.includes(elem.id)) {
        compPlatforms.value.push(elem)
      }
    })
  } else {
    compPlatforms.value = platform
  }
}

watch(
  selected,
  (newVal) => {
    emit("changePlatform", newVal);
  },
  // { immediate: true }
);

watch(
  () => store.links,
  () => {
    updatePlatform()
  },
  {immediate: true, deep: true}
)

onMounted(() => {
  if (store.links?.length > 0) {
    selected.value = store.links[props.idx]
  } else {
    selected.value = platform.filter(plat => plat.id == props.currentLinkId)[0]
  }
})
</script>
