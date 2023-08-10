<template>
  <div>
    <div class="bg-light-grey rounded-2xl flex flex-col h-auto p-5 gap-12">
      <div class="flex justify-between">
        <div class="flex font-bold text-base text-grey space-x-2 cursor-grab">
          <img src="../../assets/icons/icon-drag-and-drop.svg" alt="" />
          <p>Link #{{ props.linkItem.id  }}</p>
        </div>
        <p @click="removeLinkHandler" class="text-grey text-base cursor-pointer">Remove</p>
      </div>
      <div>
        <!-- Dropdown -->
        <Dropdown />
      </div>
      <div>
        <LabeledInput
          placeholder="e.g. https://www.github.com/seybel"
          class="mb-6 w-full"
          type="url"
          label="Link"
          id="link"
          @value-change="customLinkHandler"
        >
          <template v-slot:icon>
            <img src="../../assets/icons/icon-link.svg" alt="email" />
          </template>
        </LabeledInput>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import LabeledInput from "../Form/LabeledInput.vue";
import Dropdown from "../Elements/Dropdown.vue";

interface LinkItem {
  id: number,
  platform: string,
  linkId: string,
  link: string
}

const props = defineProps<{
    linkItem: LinkItem
}>();

let customLink = ref("");

const removeLinkHandler = () => {

}

const customLinkHandler = (val: string) => {
    customLink.value = val;
}
</script>

<style scoped></style>
