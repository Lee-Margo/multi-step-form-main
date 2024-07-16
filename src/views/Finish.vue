<script setup>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { switchPageStore } from '@/stores/SwitchPage.js';

const switchStore = switchPageStore();
const { pickPlan } = storeToRefs(switchStore);
const { addPlans } = switchStore;

const planPrice = computed(() => {
  if (pickPlan.value.time === 'month') {
    if (pickPlan.value.plan === 'Arcade') {
      return 9
    } else if (pickPlan.value.plan === 'Advanced') {
      return 12
    } else if (pickPlan.value.plan === 'Pro') {
      return 15
    }
  } else if (pickPlan.value.time === 'year') {
    if (pickPlan.value.plan === 'Arcade') {
      return 90
    } else if (pickPlan.value.plan === 'Advanced') {
      return 120
    } else if (pickPlan.value.plan === 'Pro') {
      return 150
    }
  }
})

const online = computed(() => {
  return pickPlan.value.time === 'year' ? 10 : 1 
})
const larger = computed(() => {
  return pickPlan.value.time === 'year' ? 20 : 2 
})
const customize = computed(() => {
  return pickPlan.value.time === 'year' ? 20 : 2 
})
// const online = ref(0);
const total = computed(() => {
  let addPrice = 0;
  if(pickPlan.value.addOns.online) {
    addPrice += online.value
  }
  if(pickPlan.value.addOns.larger) {
    addPrice += larger.value
  }
  if(pickPlan.value.addOns.customize) {
    addPrice += customize.value
  }
  return addPrice += planPrice.value
})

const timeUnit = computed(() => {
  return pickPlan.value.time === 'year' ? '/yr' : '/mo' 
})

const router = useRouter()
function next() {
  router.push('/thanks')
}
</script>
<template>
  <section>
    <div class="font-bold text-[34px] text-[#082a5e]">Finishing up</div>
    <div>Double-check everything looks OK before confirming.</div>
  </section>
  <section>
    <div class="font-medium w-[450px] rounded-lg bg-[#f8f9fe] grid grid-cols-2 gap-3 px-6 py-5">
      <div class="flex flex-col">
        <div>
          <span class="font-medium">{{ pickPlan.plan }}&nbsp;</span>
          <span class="font-medium">{{ pickPlan.time === 'year' ? '(Yearly)' : '(Monthly)' }}</span>
        </div>
        <router-link to="/select-plan" class="text-gray-400 underline hover:text-[#5349c6]">Change</router-link>
      </div>
      <div class="flex justify-end">
        <span class="font-bold text-[20px]">${{ planPrice }}</span>
        <span class="font-bold text-[20px]">{{ timeUnit }}</span>
      </div>
      <hr class="col-span-2">
      <div v-if="pickPlan.addOns.online" class="grid grid-cols-subgrid gap-3 col-span-2">
        <span class="font-medium text-gray-400">Online service</span>
        <div class="flex justify-end">
          <span class="font-bold">${{ online }}</span>
          <span class="font-bold">{{ timeUnit }}</span>
        </div>
      </div>
      <div v-if="pickPlan.addOns.larger" class="grid grid-cols-subgrid gap-3 col-span-2">
        <span class="font-medium text-gray-400">Larger storage</span>
        <div class="flex justify-end">
          <span class="font-bold">${{ larger }}</span>
          <span class="font-bold">{{ timeUnit }}</span>
        </div>
      </div>
      <div v-if="pickPlan.addOns.customize" class="grid grid-cols-subgrid gap-3 col-span-2">
        <span class="font-medium text-gray-400">Customizable profile</span>
        <div class="flex justify-end">
          <span class="font-bold">${{ customize }}</span>
          <span class="font-bold">{{ timeUnit }}</span>
        </div>
      </div>
    </div>



    <div class="flex justify-between items-center pt-2 px-6">
      <div>
        <span class="font-regular">Total&nbsp;</span>
        <span class="font-regular">(per {{ pickPlan.time === 'year' ? 'year' : 'month' }})</span>
      </div>
      <div>
        <span class="font-bold text-[22px] text-[#5349c6]">+${{ total }}</span>
        <span class="font-bold text-[22px] text-[#5349c6]">{{ timeUnit }}</span>
      </div>
    </div>
  </section>

  <section class="flex justify-between">
    <router-link class="text-gray-400 py-3 px-5 rounded-lg font-medium" to="/add-ons" tag="button">Go Back</router-link>
    <button @click="next()" class="bg-[#483efc] text-white py-3 px-5 rounded-lg font-medium" tag="button">Confirm</button>
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