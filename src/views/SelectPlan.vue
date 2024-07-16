<script setup>
import { ref } from 'vue';
import { switchPageStore } from '@/stores/SwitchPage.js';
import { useRouter } from 'vue-router';

const isSwitch = ref(false);
function switchTime() {
  isSwitch.value = !isSwitch.value;
};

const planPick = ref("Arcade");
function pickRadio(plan) {
  planPick.value = plan;
};

const switchStore = switchPageStore();
const { addPlans } = switchStore;
const router = useRouter()
function addToObj() {
  let time = "";
  if(!isSwitch.value) {
    time = "month";
  } else if(isSwitch.value) {
    time = "year";
  };
  addPlans(planPick.value, time)
  router.push('/add-ons')
}
</script>
<template>
  <section>
    <div class="font-bold text-[34px] text-[#082a5e]">Select your plan</div>
    <div>You have the option of monthly or yearly billing.</div>
  </section>
  <section class="font-medium flex">
    <label for="arcade" class="w-[140px] h-[160px] flex flex-col justify-around border px-2 has-[:checked]:bg-[#f8f9fe] has-[:checked]:border-[#58559d]
      hover:border-[#58559d] rounded-lg">
      <input type="radio" id="arcade" class="hidden" value="arcade" name="plan" @click="pickRadio('Arcade')" checked />
      <img src="../images/icon-arcade.svg" class="w-[42px] h-[42px]" alt="">
      <div class="flex flex-col items-start">
        <span class="text-[#082a5e]">Arcade</span>
        <div v-if="isSwitch" class="flex flex-col items-start">
          <span class="font-regular text-gray-400">$90/yr</span>
          <span class="text-[#082a5e] text-regular">2 months free</span>
        </div>
        <div v-else>
          <span class="font-regular text-gray-400">$9/mo</span>
        </div>
      </div>
    </label>
    <label for="advanced" class="w-[140px] h-[160px] flex flex-col justify-around border px-2 has-[:checked]:bg-[#f8f9fe] has-[:checked]:border-[#58559d] hover:border-[#58559d]
      rounded-lg ml-3">
      <input type="radio" id="advanced" class="hidden" value="advanced" name="plan" @click="pickRadio('Advanced')" />
      <img src="../images/icon-advanced.svg" class="w-[42px] h-[42px]" alt="">
      <div class="flex flex-col items-start">
        <span class="text-[#082a5e]">Advanced</span>
        <div v-if="isSwitch" class="flex flex-col items-start">
          <span class="font-regular text-gray-400">$120/yr</span>
          <span class="text-[#082a5e] text-regular">2 months free</span>
        </div>
        <div v-else>
          <span class="font-regular text-gray-400">$12/mo</span>
        </div>
      </div>
    </label>
    <label for="pro" class="w-[140px] h-[160px] flex flex-col justify-around border px-2 has-[:checked]:bg-[#f8f9fe] has-[:checked]:border-[#58559d]
      hover:border-[#58559d] rounded-lg ml-3">
      <input type="radio" id="pro" class="hidden" value="pro" name="plan"  @click="pickRadio('pro')"  />
      <img src="../images/icon-pro.svg" class="w-[42px] h-[42px]" alt="">
      <div class="flex flex-col items-start">
        <span class="text-[#082a5e]">Pro</span>
        <div v-if="isSwitch" class="flex flex-col items-start">
          <span class="font-regular text-gray-400">$150/yr</span>
          <span class="text-[#082a5e] text-regular">2 months free</span>
        </div>
        <div v-else>
          <span class="font-regular text-gray-400">$15/mo</span>
        </div>
      </div>
    </label>
  </section>
  <section class="bg-[#f8f9fe] py-3 flex justify-center items-center rounded-md">
    <span class="font-medium" :class="isSwitch ? 'text-gray-400' : 'text-[#052859]'">Monthly</span>
    <div>
      <input type="checkbox" @click="switchTime()" class="hidden" id="switch" />
      <label for="switch">
        <div id="test" class="w-[40px] h-[20px] flex flex-start items-center px-1 rounded-xl bg-[#052859] mx-3 switch">
        </div>
      </label>
    </div>
    <span class="font-medium" :class="isSwitch ? 'text-[#052859]' : 'text-gray-400'">Yearly</span>
  </section>
  <section class="flex justify-between">
    <router-link class="text-gray-400 py-3 px-5 rounded-lg font-medium" to="/" tag="button">Go Back</router-link>
    <button @click="addToObj()" class="bg-[#052859] text-white py-3 px-5 rounded-lg font-medium" >Next Step</button>
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

.blue-text {
  @apply text-[#052859]
}

.gray-text {
  @apply text-gray-400
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

.switch {
  @apply before:w-[12px] before:h-[12px] before:content-[''] before:bg-white before:block before:rounded-lg
}

input:checked+label div {
  justify-content: flex-end;
  transition: justify-content 2s ease-out 2s;
}
</style>