<template>
 <div class="tabbar-item" @click="itemClick">
   <div v-if="isActive">
     <slot name="item-icon"></slot>
     </div>
   <div v-else>
     <slot name="item-active"></slot>
   </div>
   <div :style="activeStyle">
     <slot name="item-text"></slot>
     </div>
 </div>
</template>

<script>
export default {
  name:"TabbarItem",
  props:{
   path:String,
   activeColor:{
     type:String,
     default:'red'
   }
  },
  data(){
    return{
      // isActive:false
    }
  },
  methods:{
    itemClick(){
     this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  }
}
</script>
<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
   height: 49px;
   vertical-align: middle;
}
.tabbar-item img{
  width: 20px;
}

</style>