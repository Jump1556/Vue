<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link 
      tag="button" 
      :to="link"  
      class="btn btn-primary">Edit User</router-link>
    <!-- additional parameter to :to after id, can be query: { locale:'en', q:100 }-->
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      link: { 
        name: 'userEdit',
        params: { id: this.$route.params.id},
        query: { locale:'en', q:100 },
        hash: '#data'
      }
    }
  },
  // in special case you need to use:
  // beforeRouteEnter(to, from, next) { 
  //   if (true) to check authentication or so on {
  //     next(vm => { vm.link});
  //  } else {
  //      next(false);
  //  }
  //}
}
</script>
