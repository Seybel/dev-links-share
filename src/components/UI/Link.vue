<template>
  <div>
    <div class="bg-light-grey rounded-2xl flex flex-col h-auto p-5 gap-12 mb-6">
      <div class="flex justify-between">
        <div class="flex font-bold text-base text-grey space-x-2 cursor-grab">
          <img src="../../assets/icons/icon-drag-and-drop.svg" alt="" />
          <p>Link #{{ idx + 1 }}</p>
        </div>
        <p
          @click="removeLinkHandler(link.id)"
          class="text-grey text-base cursor-pointer"
        >
          Remove
        </p>
      </div>
      <div>
        <!-- Dropdown -->
        <Dropdown @change-platform="changePlatformHandler" />
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
import { ref, reactive, watch } from "vue";
import LabeledInput from "../Form/LabeledInput.vue";
import Dropdown from "../Elements/Dropdown.vue";
import { isNumber } from "../../utils/randomId";

interface LinkItem {
  id?: number;
  platform?: string;
  linkId?: string;
  link?: string;
}

const props = defineProps<{
  idx: number;
  linkItem: LinkItem;
}>();

const emit = defineEmits<{
  (event: "removeLink", id: number): void;
  (event: "addPlaform", platform: string): void;
}>();

const customLinkInput = ref("");
let link: LinkItem = reactive({});

watch(
  props.linkItem,
  (newVal) => {
    link = { ...link, ...newVal };
  },
  { immediate: true }
);

const removeLinkHandler = (val: any) => {
  if (!isNumber(val)) return;
  emit("removeLink", val);
};

const changePlatformHandler = (val: string) => {
    emit("addPlaform", val);
    console.log(val);
}

const customLinkHandler = (val: string) => {
  customLinkInput.value = val;
};
</script>

<style scoped></style>
