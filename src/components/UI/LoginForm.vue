<template>
    <div class="flex flex-col gap-y-12 justify-center align-center w-[100vw] h-[100vh]">
        <div class="flex align-center justify-center">
            <img src="../../assets/img/logo-devlinks-large.svg" alt="devlinks-logo">
        </div>
        <!-- <h1 class="text-dark-grey">Welcome to Devlinks share</h1> -->
        <div class="bg-white p-14 rounded flex align-center justify-start self-center flex-col gap-y-2 w-[fit-content] ">
            <h1 class="text-[2em] font-bold">Login</h1>
            <p class="text-base font-normal text-grey mb-8">Add your details below to get back into the app</p>
            <LabeledInput :is-error="false" errorMsg="Can’t be empty" placeholder="e.g. alex@email.com" class="mb-6" type="text" label="Email address" id="email">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-email.svg" alt="email">
                </template>
            </LabeledInput>
            <LabeledInput :is-error="true" errorMsg="Please check again" placeholder="Enter your password" class="mb-3" type="password" label="Password" id="password">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-password.svg" alt="password">
                </template>
            </LabeledInput>
            <Button content="Login" 
                custom-class="mb-3 flex align-center justify-center bg-purple text-white py-[11px] px-[27px] w-100 border-none rounded-md hover:shadow-light-purple hover:bg-purple-hover"
                custom-style="" 
            />
            <p class="text-base text-center font-normal text-grey">Don’t have an account? <span @click="emit('toggle')" class="text-purple cursor-pointer">Create account</span></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../Elements/Button.vue';
import LabeledInput from '../Form/LabeledInput.vue';

const emit = defineEmits(['toggle'])

</script>

<style scoped>

</style>