import { defineStore } from 'pinia'

export const switchPageStore  = defineStore('switchPage',  {
  state: () => {
    return {
      pickPlan:{
        plan: "",
        time: "",
        addOns: {
          online: false,
          larger: false,
          customize: false,
        },
      }
    };
  },
  actions: {
    addPlans(plan, time) {
      this.pickPlan.plan = plan;
      this.pickPlan.time = time;
    },
    addAddOns(addons) {
      this.pickPlan.addOns = addons;
    },
  },
});