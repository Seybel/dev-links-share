<template>
    <svg width="308" height="632" viewBox="0 0 308 632" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z" stroke="#737373"/>
        <path d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z" fill="white" stroke="#737373"/>
        <foreignObject v-if="store.avatarUrl.length" x="101.5" y="60.5" width="104" height="104" r="48">
          <img class="border-purple rounded-full w-[104px] h-[104px] border-4" :src="store.avatarUrl" alt="">
        </foreignObject>
        <circle v-else cx="153.5" cy="112" r="48" fill="#EEEEEE"/>

        <foreignObject v-if="true" x="0" y="28%" width="100%" height="25" rx="8">
          <h1 class="text-lg text-center font-bold text-dark-grey" >{{ `${store.firstName} ${store.lastName}` }}</h1>
        </foreignObject>
        <rect v-else x="73.5" y="185" width="160" height="16" rx="8" fill="#EEEEEE"/>

        <foreignObject v-if="true" x="0" y="32.7%" width="100%" height="25" rx="8" >
          <p class="text-sm text-center text-grey">{{ store.email }}</p>
        </foreignObject>
        <rect v-else x="117.5" y="214" width="72" height="8" rx="4" fill="#EEEEEE"/>

        <foreignObject x="35" y="44%" width="247" height="49%">
          <div class="flex flex-col gap-y-5 overflow-y-auto h-[100%] pr-2.5">
            <foreignObject v-for="(item, idx) in previewBtnObj" :key="idx">
                <PreviewLinkButton :isPlaceholder="false" :height="`h-[44px]`" :border="item.border" :bg="item.bg" :link-name="item.name" :text-color="item.textColor">
                    <template v-slot:icon>
                        <img :src="item.iconName" :alt="item.name">
                    </template>
                </PreviewLinkButton>
            </foreignObject>
           <foreignObject v-for="amount in dummyAmount" :key="amount" >
              <PreviewLinkButton :isPlaceholder="true" />
           </foreignObject>
          </div>
        </foreignObject>
      </svg>
</template>

<script setup lang="ts">
import PreviewLinkButton from '../Elements/PreviewLinkButton.vue';
import { PreviewBtn, AllPreviewBtn } from "../../mock"
import { computed, ref, watch } from 'vue';
import { store } from "../../store"


const previewBtnObj = ref<PreviewBtn[]>([])

const filterPreviewObj = (ids: PreviewBtn[]) => {
  let linkIds = ids.map(elem => elem.id)
  return AllPreviewBtn.filter(btn => linkIds.includes(btn.id))
}

const dummyAmount = computed(() => {
  return previewBtnObj.value.length > 5 ? 0 : Array.from({ length: 5 - previewBtnObj.value.length }, (_, index) => index + 1)
})

watch(
  () => store.links,
  (val) => {
    previewBtnObj.value = filterPreviewObj(val)
  },
  { immediate: true, deep: true }
)

</script>

<style scoped>

</style>