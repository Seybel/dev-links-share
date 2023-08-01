<template>
    <div>
        <div class="h-[40vh] w-[100%] bg-purple rounded-b-[2em] py-4 px-4" >
            <div class="flex items-center justify-between bg-white py-4 px-6 rounded-xl" >
                <div @click.prevent="() => router.push({name: 'Devlinks.Links'})" class="cursor-pointer">
                    <Button content="Back to Editor" 
                        :custom-class="`
                            flex items-center justify-center text-purple text-center h-[2.85em] min-w-[122px] rounded-lg border-purple bg-white font-semibold
                        `"
                    ></Button>
                </div>
                <div class="">
                    <Button content="Share Link" 
                        :custom-class="`
                            flex items-center justify-center text-white text-center h-[2.85em] min-w-[122px] rounded-lg border-none bg-purple font-semibold
                        `"
                    ></Button>
                </div>
            </div>
        </div>
        <div class="flex justify-center transform translate-y-[-150px]">
            <div class="px-12 py-12 bg-white shadow-light-shadow min-h-[260px] w-[349px] rounded-3xl">
                <div class="flex flex-col gap-y-3 items-center justify-center">
                    <img class="border-purple rounded-full w-[104px] h-[104px] border-4" src="../assets/control_man.png" alt="">
                    <h1 class="text-3xl font-bold text-dark-grey" >Aiden Pearce</h1>
                    <p class="tetx-base text-grey">aiden@example.com</p>
                    <div class="w-[100%] mt-10 max-h-[250px] flex flex-col gap-y-5 pr-2.5 overflow-y-auto">
                        <PreviewLinkButton v-for="(item, idx) in AllPreviewBtn" :key="idx" :border="item.border" :bg="item.bg" :link-name="item.name" :text-color="item.textColor">
                            <template v-slot:icon>
                                <img :src="item.iconName" :alt="item.name">
                            </template>
                        </PreviewLinkButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../components/Elements/Button.vue';
import PreviewLinkButton from '../components/Elements/PreviewLinkButton.vue';
import { AllPreviewBtn } from "../mock";
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<style scoped>

</style>