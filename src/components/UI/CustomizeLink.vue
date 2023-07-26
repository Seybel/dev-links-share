<template>
  <div class="bg-white rounded-2xl" :style="previewBg">
    <div class="flex flex-col gap-8 px-8 py-12">
      <div>
        <h1 class="text-darkgrey text-3xl font-bold">Customize your links</h1>
        <p class="text-grey text-base py-3">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div
        class="bg-white border border-purple w-full rounded-lg p-2 hover:shadow-light-purple hover:bg-light-purple"
      >
        <p class="text-purple text-center font-semibold text-sm cursor-pointer">
          + Add new link
        </p>
      </div>
      <!-- <EmptyLink /> -->
      <div class="bg-light-grey rounded-2xl flex flex-col h-auto p-5 gap-12">
        <div class="flex justify-between">
          <div class="flex font-bold text-base text-grey space-x-2 cursor-grab">
              <img src="../../assets/icons/icon-drag-and-drop.svg" alt="">
              <p>Link #1</p>
          </div>
          <p class="text-grey text-base cursor-pointer">Remove</p>
        </div>
        <div>
          <!-- Dropdown -->
          <Dropdown />
        </div>
        <div>
          <LabeledInput placeholder="e.g. https://www.github.com/seybel" class="mb-6 w-full" type="url" label="Link" id="link">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-link.svg" alt="email">
                </template>
            </LabeledInput>
        </div>
      </div>
      <div class="flex justify-end mt-20">
        <Button
          customClass="bg-purple text-white text-base font-semibold py-3 px-7"
          content="Save"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../Elements/Button.vue";
import EmptyLink from "../UI/EmptyLink.vue";
import LabeledInput from "../Form/LabeledInput.vue";
import Dropdown from "../Elements/Dropdown.vue";

const previewBg = { width: "46rem", height: "53rem" };
</script>

<style scoped>
</style>