<template>
<div>{{data}}</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name:'Home',
  setup(){
    const data=ref(1)
        return{
          data
        }
    }
})
</script>

<style>
</style>