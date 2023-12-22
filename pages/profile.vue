<template>
    <div>
   <profile-edite-section></profile-edite-section>
     
    </div>
  </template>
  <script setup lang="ts">
  
  definePageMeta({
    middleware: ["auth","get-user-data"]
  });
  </script>