<template>
    <div>
        <h1 class="text-dark-grey">Welcome to Devlinks share</h1>
        <LabeledInput>
            <template v-slot:icon>
                <EnvelopeIcon /> 
            </template>
        </LabeledInput>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LabeledInput from '../components/Form/LabeledInput.vue'
import EnvelopeIcon from '../components/Icons/EnvelopeIcon.vue'

export default defineComponent({
    components: {
        LabeledInput,
        EnvelopeIcon,
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>
</style>