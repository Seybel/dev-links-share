<template>
  <div>
    <div class="bg-light-grey rounded-2xl flex flex-col h-auto p-5 gap-4 mb-6">
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
        <Dropdown :idx="idx" :currentLinkId="currentLinkId" @change-platform="changePlatformHandler" />
      </div>
      <div>
        <LabeledInput
          placeholder="e.g. https://www.github.com/seybel"
          class="mb-6 w-full"
          type="url"
          label="Link"
          id="link"
          :value="linkItem.link"
          @value-change="updateDevLink"
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
import { PreviewBtn } from "../../mock";

const props = defineProps<{
  idx: number;
  linkItem: PreviewBtn;
  currentLinkId: number;
}>();

const emit = defineEmits<{
  (event: "removeLink", id: number): void;
  (event: "updatePlatform", platform: PreviewBtn): void;
  (event: "devLink", devLink: string): void;
}>();

const customLinkInput = ref("");
let link: PreviewBtn = {}

watch(
  () => props.linkItem,
  (newVal) => {
    link = { ...link, ...newVal };
  },
  { immediate: true, deep: true }
);

const removeLinkHandler = (val: any) => {
  if (!isNumber(val)) return;
  emit("removeLink", val);
};

const changePlatformHandler = (val: PreviewBtn) => {
  link = { ...link, ...val}
  emit("updatePlatform", val);
}

const updateDevLink = (val: string) => {
  link.link = val;
  emit('updatePlatform', link)
};
</script>

<style scoped></style>
