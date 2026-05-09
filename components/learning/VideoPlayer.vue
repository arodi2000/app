<template>
  <div class="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <video controls class="w-full rounded-lg shadow-lg">
      <source :src="videoUrl" type="video/mp4">
      Tu navegador no soporta videos.
    </video>
    <div class="mt-4">
      <h3 class="text-xl font-bold text-green-400">{{ title }}</h3>
      <p class="text-zinc-400 text-sm">Nivel requerido: {{ level }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoUrl: String,
  title: String,
  level: Number
})
</script>