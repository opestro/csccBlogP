<template>
  <div>
    <add-p-section></add-p-section>
    <create-new-content></create-new-content>
    <contents></contents>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  middleware: ["auth","get-user-data"]
});
onMounted(async () => {

})
</script>