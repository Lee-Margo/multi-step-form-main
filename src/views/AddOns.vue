<script setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { switchPageStore } from '@/stores/SwitchPage.js';
import { useRouter } from 'vue-router';


const router = useRouter()
const switchStore = switchPageStore();
const { pickPlan } = storeToRefs(switchStore);
function next() {
  router.push('/finish');
}

</script>
<template>
  <section>
    <div class="font-bold text-[34px] text-[#082a5e]">Pick add-ons</div>
    <div>Add-ons help enhance your gaming experience.</div>
  </section>
  <section class="font-medium flex flex-col justify-around">
    <label for="online" class="w-[450px] h-[80px] flex items-center rounded-lg justify-between border px-5 hover:border-[#4f4c99] 
    has-[:checked]:border-[#4f4c99] has-[:checked]:bg-[#f8f9fe]">
      <div class="flex items-center">
        <input v-model="pickPlan.addOns.online" id="online" type="checkbox" class="w-5 h-5 has-[:checked]:bg-[#453dd2]">
        <div class="flex flex-col pr-[98px] ml-4">
          <span>Online service</span>
          <span class="font-regular">Access to multiplayer games</span>
        </div>
      </div>
      <span class="font-regular text-[#413797]">{{ pickPlan.time === 'year' ? '+$10/yr' : '+$1/mo' }}</span>
    </label>
    <label for="storage" class="mt-3 w-[450px] h-[80px] flex items-center rounded-lg justify-between border px-5 hover:border-[#4f4c99] 
    has-[:checked]:border-[#4f4c99] has-[:checked]:bg-[#f8f9fe]">
      <div class="flex items-center">
        <input v-model="pickPlan.addOns.larger" id="storage" type="checkbox" class="w-5 h-5">
        <div class="flex flex-col pr-[98px] ml-4">
          <span>Larger storage</span>
          <span class="font-regular">Extra 1TB of cloud save</span>
        </div>
      </div>
      <span class="font-regular text-[#6b60c6]">{{ pickPlan.time === 'year' ? '+$20/yr' : '+$2/mo' }}</span>
    </label>
    <label for="customized" class="mt-3 w-[450px] h-[80px] flex items-center rounded-lg justify-between border px-5 hover:border-[#4f4c99] 
    has-[:checked]:border-[#4f4c99] has-[:checked]:bg-[#f8f9fe]">
      <div class="flex items-center">
        <input v-model="pickPlan.addOns.customize" id="customized" type="checkbox" class="w-5 h-5">
        <div class="flex flex-col pr-[98px] ml-4">
          <span>Customizable profile</span>
          <span class="font-regular">Custom theme on your profile</span>
        </div>
      </div>
      <span class="font-regular text-[#6b60c6]">{{ pickPlan.time === 'year' ? '+$20/yr' : '+$2/mo' }}</span>
    </label>
  </section>
  <section class="flex justify-between">
    <router-link class="text-gray-400 py-3 px-5 rounded-lg font-medium" to="/select-plan" tag="button">Go
      Back</router-link>
    <button @click="next()" class="bg-[#052859] text-white py-3 px-5 rounded-lg font-medium">Next Step</button>
  </section>
</template>

<style scoped>
@font-face {
  font-family: ubuntuBold;
  src: url('@/fonts/Ubuntu-Bold.ttf');
}

@font-face {
  font-family: ubuntuMedium;
  src: url('@/fonts/Ubuntu-Medium.ttf');
}

@font-face {
  font-family: ubuntuRegular;
  src: url('@/fonts/Ubuntu-Regular.ttf');
}

.font-bold {
  font-family: ubuntuBold;
}

.font-medium {
  font-family: ubuntuMedium;
}

.font-regular {
  font-family: ubuntuRegular;
}
</style>