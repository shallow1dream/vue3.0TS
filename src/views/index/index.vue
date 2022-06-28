<template>
  <div>{{ count }}</div>
  <button @click="$store.commit('add')">QAQ</button>
</template>

<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, reactive,toRefs ,ComponentInternalInstance, computed} from "vue";
import { key } from '@/store'
import { useStore } from "vuex";
export default defineComponent({
  name: "index",
  setup(props: any, content: any) {
    const store=useStore(key)
    const count=computed(()=>store.state.count)
    const { proxy  }:{proxy:any} = getCurrentInstance() as ComponentInternalInstance;//const { proxy  }:{proxy:any} = getCurrentInstance()!
    const data = reactive({ account: "admin", password: "111111" });
    const dataRef = toRefs(data);
    const sign=(boo:boolean)=>{
      const { account ,password}=data
      proxy.$http({
                        url:"/login",
                        method:"post",
                        data:{
                            account,
                            password
                        }
                    }).then((resolve: any)=>{
                        console.log(resolve)
                    }).catch((err:any) => {
                        console.log(err)
                    })
    }
    return {
      sign,
      ...dataRef,
      count
    };
  },
});
</script>

<style>
</style>