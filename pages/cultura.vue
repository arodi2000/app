<template>
  <div class="min-h-screen bg-[#0f1115] text-white p-10">
    <header
      class="flex justify-between items-center mb-12 border-b border-[#1f242d] pb-6"
    >
      <div>
        <h1 class="text-3xl font-black uppercase tracking-tighter">
          01. Cultura - Huamelollan
        </h1>
        <p class="text-xs text-zinc-500 uppercase tracking-widest mt-1">
          Módulo de conocimiento tradicional
        </p>
      </div>
      <NuxtLink
        to="/"
        class="px-4 py-2 bg-[#ff6b00] text-black text-xs font-bold rounded-xl hover:bg-[#ff8533]"
      >
        Inicio
      </NuxtLink>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="(cat, index) in categorias"
        :key="index"
        class="bg-[#161d29] p-6 rounded-2xl border border-[#232b38] hover:border-[#ff6b00] transition-colors group"
      >
        <div class="text-[#ff6b00] text-2xl mb-4 font-mono font-black">
          0{{ index + 1 }}
        </div>
        <h3 class="text-lg font-bold mb-2 text-white">{{ cat.nombre }}</h3>
        <p class="text-xs text-zinc-400 mb-6">{{ cat.desc }}</p>
        <button
          @click="verContenido(cat.nombre)"
          class="w-full py-2 bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold rounded-lg hover:bg-[#ff6b00] hover:text-black transition-colors"
        >
          Ver Contenido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const categorias = ref([
  {
    nombre: 'Gastronomía',
    desc: 'Conoce los alimentos y platos tradicionales de Huamelollan.'
  },
  {
    nombre: 'Tradiciones',
    desc: 'Un acercamiento a las celebraciones ancestrales.'
  },
  { nombre: 'Danzas', desc: 'El ritmo y movimiento de nuestra gente.' },
  { nombre: 'Vestimenta', desc: 'El significado de los bordados y prendas.' }
])
const verContenido = nom =>
  alert('Módulo de ' + nom + ' cargado correctamente.')
</script>
