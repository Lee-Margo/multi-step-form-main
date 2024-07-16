<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>


<template>
  <main class="w-[940px] h-[605px] flex bg-white rounded-xl p-[18px]">
    <article class="relative">
      <img src="./images/bg-sidebar-desktop.svg" alt="">
      <section class="px-[32px] text-[14px] py-[20px] hello text-white flex flex-col">
        <div class="flex items-center pb-[36px]">
          <div v-if="route.name==='home'" class="standard active">1</div>
          <div v-else class="standard">1</div>
          <div class="flex flex-col title">
            <span class="  font-regular">STEP 1</span>
            <span>YOUR INFO</span>
          </div>
        </div>
        <div class="flex items-center pb-[36px]">
          <div v-if="route.name==='select-plan'" class="standard active">2</div>
          <div v-else class="standard">2</div>
          <div class="flex flex-col title">
            <span class="  font-regular">STEP 2</span>
            <span>SELECT PLAN</span>
          </div>
        </div>
        <div class="flex items-center pb-[36px]">
          <div v-if="route.name==='add-ons'" class="standard active">3</div>
          <div v-else class="standard">2</div>
          <div class="flex flex-col title">
            <span class="  font-regular">STEP 3</span>
            <span>ADD-ONS</span>
          </div>
        </div>
        <div class="flex items-center pb-[36px]">
          <div v-if="route.name==='finish' || route.name==='thanks'" class="standard active">4</div>
          <div v-else class="standard">2</div>
          <div class="flex flex-col title">
            <span class="  font-regular">STEP 4</span>
            <span>SUMMARY</span>
          </div>
        </div>
      </section>
    </article>
    <article class="ml-[90px] flex flex-col justify-evenly">
      <RouterView />
    </article>
  </main>
</template>

<style scoped>
@font-face {
  font-family: ubuntuBold;
  src: url('@/fonts/Ubuntu-Bold.ttf');
}

@font-face {
  font-family: ubuntuRegular;
  src: url('@/fonts/Ubuntu-Regular.ttf');
}

@font-face {
  font-family: ubuntuMedium;
  src: url('@/fonts/Ubuntu-Medium.ttf');
}

.font-medium {
  font-family: ubuntuMedium;
}

.font-regular {
  font-family: ubuntuRegular;
}

.hello {
  position: absolute;
  top: 0;
  font-family: ubuntuBold;
}

.standard {
  @apply w-[33px] h-[33px] border rounded-full flex justify-center leading-[30px] mr-[12px]
}

.active {
  @apply border-[#bfe1fd] bg-[#bfe1fd] text-black
}
</style>