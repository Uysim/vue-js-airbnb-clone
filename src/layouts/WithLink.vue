<template>
  <div>
    <slot/>
    <router-link :to="{ name: 'HomePage' }">Home Page</router-link>
    <router-link :to="{ name: 'OtherPage' }">Other Page</router-link>
    <router-link :to="{ name: 'LoginPage' }">Login Page</router-link>
  </div>
</template>
