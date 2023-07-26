<template>
    <div>
        <LoginForm @toggle="toggleForm"  v-if="isLoginIn" />
        <SignupForm @toggle="toggleForm" v-else/>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "../components/Form/LoginForm.vue";
import SignupForm from "../components/Form/SignupForm.vue";

const isLoginIn = ref(true)

const toggleForm = () => {
    isLoginIn.value = !isLoginIn.value 
}

</script>

<style scoped>
</style>