<template>
  <ul class="nav nav-pills">
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <!-- exact is to make sure path is "/" not any started with "/" -->
  <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
</ul>
</template>


