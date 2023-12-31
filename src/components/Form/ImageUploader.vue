<template>
    <div>
        <label :style="previewStyle" for="avatar" class="cursor-pointer flex flex-col gap-y-3 items-center bg-light-purple rounded-md py-12 px-8">            
                <img v-if="imageValue" class="w-[40px]" src="../../assets/icons/icon-upload-image-white.svg" alt="upload image">
                <img class="w-[40px]" src="../../assets/icons/icon-upload-image.svg" alt="upload image" v-else>

                <p :class="`cursor-pointer text-base font-semibold whitespace-nowrap
                    ${imageValue ? 'text-white' : 'text-purple'}
                `"
                >{{ imageValue ? 'Change Image' : '+ Upload Image'}}</p>
        </label>
        <input @input="handleInput" type="file" class="hidden" name="profilePic" id="avatar">
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { store } from '../../store';

const previewStyle = computed(() => {
  const style: Record<string, string> = {};
    if (imageValue.value) {
      style.backgroundImage = `url(${imageValue.value})`;
      style.backgroundRepeat= 'no-repeat';
      style.backgroundOverlay = 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)';
      style.backgroundPosition = '50%';
      style.backgroundBlendMode = 'overlay'
      style.backgroundColor = '#EFEBFF';
      style.backgroundSize = 'cover';
    }
    return style;
})


const imageValue = ref<string>('') 

const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageValue.value = e.target?.result as string;
            store.setAvatar(imageValue.value)
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        imageValue.value = '';
      }
    
}

watch(
  () => store.avatarUrl,
  val => imageValue.value = val,
  { immediate: true }
)

</script>

<style scoped>

</style>