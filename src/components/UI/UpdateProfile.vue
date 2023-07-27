<template>
    <div class="bg-white rounded-2xl" :style="previewBg">
      <div class="flex flex-col gap-8 px-8 py-12">
        <div>
          <h1 class="text-darkgrey text-3xl font-bold">Profile Details</h1>
          <p class="text-grey text-base py-3">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <!-- <div
          class="bg-white border border-purple w-full rounded-lg p-2 hover:shadow-light-purple hover:bg-light-purple"
        >
          <p class="text-purple text-center font-semibold text-sm cursor-pointer">
            + Add new link
          </p>
        </div> -->
        <!-- <EmptyLink /> -->
        <div class="bg-light-grey rounded-2xl flex items-center h-auto p-5 gap-12">
            <p class="text-grey text-base font-normal whitespace-nowrap mr-12" >Profile picture</p>
            <ImageUploader />
            <p class="text-xs text-grey">Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>
        <div class="bg-light-grey rounded-2xl flex flex-col items-center h-auto p-5 gap-2">
            <div class="grid grid-cols-2-4 w-[100%] items-center">
                <p class="text-base font-normal text-grey">First name*</p>
                <LabeledInput :is-error="false" errorMsg="Can’t be empty" placeholder="e.g. Optimus" class="" type="text" label="" id="firstName" />
            </div>
            <div class="grid grid-cols-2-4 w-[100%] items-center">
                <p class="text-base font-normal text-grey">Last name*</p>
                <LabeledInput :is-error="false" errorMsg="Can’t be empty" placeholder="e.g. Prime" class="" type="text" label="" id="lastName" />
            </div>
            <div class="grid grid-cols-2-4 w-[100%] items-center">
                <p class="text-base font-normal text-grey">Email</p>
                <LabeledInput :is-error="false" errorMsg="Can’t be empty" placeholder="e.g. https://www.github.com/seybel" class="" type="email" label="" id="email" />
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
  import ImageUploader from "../Form/ImageUploader.vue";
  import LabeledInput from "../Form/LabeledInput.vue";
  
  const previewBg = { width: "46rem", height: "53rem" };
  </script>
  
  <style scoped>
  </style>