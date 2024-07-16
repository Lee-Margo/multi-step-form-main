<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const form = reactive({
  name: "",
  email_address: "",
  phone_num: "",
})

const router = useRouter()
function next() {
  if (!form.name) {
    document.querySelector("label[for='Name']").classList.add('a');
    document.getElementById("Name").classList.add('border-red');
  } else {
    document.querySelector("label[for='Name']").classList.remove('a');
    document.getElementById("Name").classList.remove('border-red');
  }
  if (!form.email_address) {
    document.querySelector("label[for='email']").classList.add('a');
    document.getElementById("email").classList.add('border-red');
  } else {
    document.querySelector("label[for='email']").classList.remove('a');
    document.getElementById("email").classList.remove('border-red');
  }
  if (!form.phone_num) {
    document.querySelector("label[for='phone']").classList.add('a');
    document.getElementById("phone").classList.add('border-red');
  } else {
    document.querySelector("label[for='phone']").classList.remove('a');
    document.getElementById("phone").classList.remove('border-red');
  }
  if (form.email_address && form.phone_num && form.name) {
    router.push('/select-plan')
  }
  // router.push('/select-plan')
  // let labels = document.querySelectorAll('label');
  // if(!form.name || !form.email_address || form.phone_num) {
  //   labels.forEach( label => {
  //     console.log(label)
  //     if(!label) {
  //       label.classList.add('a');
  //       console.log('adda', label)
  //     } else {
  //       label.classList.remove('a');
  //       console.log('addb', label)
  //     }
  //   })
  // }
}
</script>
<template>
  <section>
    <div class="font-bold text-[34px]">Personal info</div>
    <div>Please provide your name, email, address, and phone number.</div>
  </section>
  <section class="font-medium">
    <div class="flex flex-col">
      <label for="Name">Name</label>
      <input v-model="form.name" id="Name" type="text"
        class="focus:outline-[#58559d] border rounded-lg w-[450px] h-[50px] px-3">
    </div>
    <div class="flex flex-col">
      <label for="email" class="mt-2">Email Address</label>
      <input v-model="form.email_address" id="email" type="text"
        class="focus:outline-[#58559d] border rounded-lg w-[450px] h-[50px] px-3">
    </div>
    <div class="flex flex-col">
      <label for="phone" class="mt-2">Phone Number</label>
      <input v-model="form.phone_num" id="phone" type="text"
        class="focus:outline-[#58559d] border rounded-lg w-[450px] h-[50px] px-3">
    </div>
  </section>
  <section class="flex justify-end">
    <button @click="next()" class="bg-[#052859] text-white py-3 px-5 rounded-lg font-medium">Next Step</button>
  </section>
</template>

<style scoped>
.a::after {
  content: "This field is required";
  float: right;
  color: #de7583;
}

.border-red {
  border-color: #de7583
}

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