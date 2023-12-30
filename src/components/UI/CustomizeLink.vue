<template>
  <div class="bg-white rounded-2xl flex-col flex" :style="previewBg">
    <div class="flex flex-col gap-8 px-8 py-12 pb-4">
      <div>
        <h1 class="text-darkgrey text-3xl font-bold">Customize your links</h1>
        <p class="text-grey text-base py-3">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div
        @click="addNewLink"
        class="bg-white border border-purple w-full rounded-lg p-2 hover:shadow-light-purple hover:bg-light-purple"
      >
        <p class="text-purple text-center font-semibold text-sm cursor-pointer">
          + Add new link
        </p>
      </div>
      <EmptyLink v-if="!allLinks.length" />
      <div class="overflow-y-auto max-h-[63vh]" v-else>
        <Link
          v-for="(link, index) in allLinks"
          :key="link.id"
          :idx="index"
          :linkItem="link"
          :currentLinkId="currentLinkId"
          @remove-link="removeLink(index)"
          @update-platform="updatePlatform($event, index)"
          @dev-link="updateDevLink"
        />
      </div>
    </div>
      <div class="flex justify-end mt-[auto] px-8 py-3 border-t-2 border-light-grey">
        <Button
          customClass="bg-purple text-white text-base font-semibold py-3 px-7"
          content="Save"
        />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "../Elements/Button.vue";
import EmptyLink from "../UI/EmptyLink.vue";
import Link from "./Link.vue";
import { store } from "../../store";
import { AllPreviewBtn, PreviewBtn, platform } from "../../mock";

const previewBg = { width: "46rem", height: "53rem" };
const nextLinkId = ref<number>(0);
const currentLinkId = ref<number>(0)

let allLinks = ref<PreviewBtn[]>([]);

onMounted(() => {
  generateNextId()
  if (store.links?.length) {
    allLinks.value = store.links
    currentLinkId.value = nextLinkId.value
  }
})

const addNewLink = () => {
  if(store.links?.length > 14) return
  currentLinkId.value = nextLinkId.value
  const next = platform.filter(elem => elem.id == nextLinkId.value)[0]
  const newLink = {
    link: "",
    ...next,
  };
  allLinks.value.push(newLink);
  store.addLink(newLink);
  generateNextId()
};

const generateNextId = () => {
  let selectedPlatformIds = store.links.map(link => link.id)
  let allPlatformIds = AllPreviewBtn.map(btn => btn.id)
  let unSelectedPlatformIds = allPlatformIds.filter(id => !selectedPlatformIds.includes(id))
  nextLinkId.value = unSelectedPlatformIds[0]
}

const removeLink = (idx: number) => {
  allLinks.value.splice(idx, 1);
  store.removeLink(idx)
  generateNextId()
};

const updatePlatform = (val: PreviewBtn, idx: number) => {
  allLinks.value[idx] = val
  store.updateLink(val, idx);
  generateNextId()
};

const updateDevLink = () => {};
</script>

<style scoped></style>
