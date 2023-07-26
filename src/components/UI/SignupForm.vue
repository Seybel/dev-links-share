<template>
    <div class="flex flex-col gap-y-12 justify-center align-center w-[100vw] h-[100vh]">
        <div class="flex align-center justify-center">
            <img src="../../assets/img/logo-devlinks-large.svg" alt="devlinks-logo">
        </div>
        <!-- <h1 class="text-dark-grey">Welcome to Devlinks share</h1> -->
        <div class="bg-white p-14 rounded flex align-center justify-start self-center flex-col gap-y-2 w-[fit-content] ">
            <h1 class="text-[2em] font-bold">Create account</h1>
            <p class="text-base font-normal text-grey mb-8">Let’s get you started sharing your links!</p>
            <LabeledInput :is-error="false" error-msg="Can’t be empty" placeholder="e.g. alex@email.com" class="mb-6" type="text" label="Email address" id="email">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-email.svg" alt="email">
                </template>
            </LabeledInput>
            <LabeledInput :is-error="false" error-msg="Please check again" placeholder="At least 8 characters" class="mb-3" type="password" label="Create password" id="password">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-password.svg" alt="password">
                </template>
            </LabeledInput>
            <LabeledInput :is-error="false" error-msg="Please check again" placeholder="At least 8 characters" class="mb-3" type="password" label="Confirm password" id="password">
                <template v-slot:icon>
                    <img src="../../assets/icons/icon-password.svg" alt="password">
                </template>
            </LabeledInput>
            <p class="mb-3 text-sm font-normal text-grey">Password must contain at least 8 characters</p>
            <Button content="Create new account" 
                custom-class="mb-3 flex align-center justify-center bg-purple text-white py-[11px] px-[27px] w-100 border-none rounded-md hover:shadow-light-purple hover:bg-purple-hover"
                custom-style="" 
            />
            <p class="text-base text-center font-normal text-grey">Already have an account? <span @click="emit('toggle')" class="text-purple cursor-pointer">Login</span></p>
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