<template>
    <div class="flex items-center justify-between bg-white py-4 px-8 rounded-xl mx-8 mt-6">
        <div class="">
            <img src="../../assets/img/logo-devlinks-large.svg" alt="logo">
        </div>
        <div class="flex items-center gap-x-2">
            <Button
                
                @click="setActiveLink('links')"
                :custom-class="`flex items-center justify-center text-center h-[2.85em] min-w-[122px] border-none rounded-lg text-base font-semibold
                    ${isActiveLink == 'links' ? 'text-purple bg-light-purple' : 'text-grey bg-white'}
                    focus:outline-none hover:bg-white
                `" 
                content="Links">
                <template v-slot:icon>
                    <img v-if="isActiveLink == 'links'" class="mr-2" src="../../assets/icons/icon-link-active.svg" alt="link">
                    <img v-else class="mr-2" src="../../assets/icons/icon-link-copied-to-clipboard.svg" alt="link">
                </template>
            </Button>
            <Button
                @click="setActiveLink('profile')"
                :custom-class="`flex items-center justify-center text-center h-[2.85em] min-w-[122px] border-none rounded-lg text-base font-semibold
                    ${isActiveLink == 'profile' ? 'text-purple bg-light-purple' : 'text-grey bg-white'}
                    focus:outline-none hover:bg-white 
                `" 
                content="Profile Details">
                <template v-slot:icon>
                    <img v-if="isActiveLink == 'profile'" class="mr-2" src="../../assets/icons/icon-profile-details-header-active.svg" alt="link">
                    <img v-else class="mr-2" src="../../assets/icons/icon-profile-details-header.svg" alt="link">
                </template>
            </Button>
        </div>
        <div class="">
            <Button content="Preview" 
                :custom-class="`
                    flex items-center justify-center text-purple text-center h-[2.85em] min-w-[122px] rounded-lg border-purple bg-white font-semibold
                `"
            ></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../Elements/Button.vue';
import router from '../../../router';

const isActiveLink = ref<string>('links');

const setActiveLink = (path: string) => {
    isActiveLink.value = path
    router.push({path})
}
</script>

<style scoped>

</style>