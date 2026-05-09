<template>
  <div class="min-h-screen bg-[#0f1115] text-white p-10">
    <header
      class="flex justify-between items-center mb-12 border-b border-[#1f242d] pb-6"
    >
      <div>
        <h1 class="text-3xl font-black uppercase tracking-tighter">
          04. Perfil - Halcón Peregrino
        </h1>
        <p class="text-xs text-zinc-500 uppercase tracking-widest mt-1">
          Progreso y logros acumulados
        </p>
      </div>
      <NuxtLink
        to="/"
        class="px-4 py-2 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-xl hover:bg-zinc-700"
      >
        Inicio
      </NuxtLink>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[#161d29] p-8 rounded-3xl border border-[#232b38]">
        <div class="text-xs text-zinc-500 uppercase tracking-widest mb-1">
          Puntaje Total
        </div>
        <div class="text-4xl font-black text-green-500 mb-6">
          {{ userStore.points }} XP
        </div>

        <div class="text-xs text-zinc-500 uppercase tracking-widest mb-1">
          Nivel Actual
        </div>
        <div class="text-2xl font-black text-white">
          0{{ userStore.currentLevel }}
        </div>
      </div>

      <div class="bg-[#161d29] p-8 rounded-3xl border border-[#232b38]">
        <h3 class="text-sm font-bold mb-4 uppercase">Logros e Insignias</h3>
        <ul class="space-y-3">
          <li
            v-for="logro in userStore.achievements"
            :key="logro"
            class="px-4 py-2 bg-[#1f2633] text-xs font-semibold rounded-lg text-[#ff6b00] border border-[#ff6b00]/10"
          >
            &starf; {{ logro }}
          </li>
        </ul>
      </div>

      <div class="bg-[#161d29] p-8 rounded-3xl border border-[#232b38]">
        <h3 class="text-sm font-bold mb-4 uppercase">Módulos Completados</h3>
        <ul class="space-y-3">
          <li
            v-for="unidad in userStore.completedUnits"
            :key="unidad"
            class="px-4 py-2 bg-[#1f2633] text-xs font-semibold rounded-lg text-[#3b82f6] border border-[#3b82f6]/10"
          >
            &check; {{ unidad }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
</script>
