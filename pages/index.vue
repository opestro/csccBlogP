<template>
    <div>
<add-p-section></add-p-section>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>