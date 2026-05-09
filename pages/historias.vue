<template>
  <div class="min-h-screen bg-[#0f1115] text-white p-10">
    <header
      class="flex justify-between items-center mb-12 border-b border-[#1f242d] pb-6"
    >
      <div>
        <h1 class="text-3xl font-black uppercase tracking-tighter">
          02. Historias y Leyendas
        </h1>
        <p class="text-xs text-zinc-500 uppercase tracking-widest mt-1">
          Conoce la memoria ancestral del pueblo
        </p>
      </div>
      <NuxtLink
        to="/"
        class="px-4 py-2 bg-[#0052cc] text-white text-xs font-bold rounded-xl hover:bg-blue-600"
      >
        Inicio
      </NuxtLink>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(historia, index) in tiposHistorias"
        :key="index"
        class="bg-[#161d29] p-6 rounded-2xl border border-[#232b38] hover:border-[#0052cc] transition-all group"
      >
        <div class="text-[#0052cc] text-2xl mb-4 font-mono font-black">
          0{{ index + 1 }}
        </div>
        <h3 class="text-lg font-bold mb-2 text-white">{{ historia.tipo }}</h3>
        <p class="text-xs text-zinc-400 mb-6">{{ historia.desc }}</p>

        <div class="space-y-2">
          <button
            v-for="categoria in historia.categorias"
            :key="categoria"
            @click="seleccionarCategoria(categoria)"
            class="w-full text-left px-4 py-2 text-xs rounded-lg border border-[#2a3447] text-zinc-300 hover:text-[#0052cc] hover:border-[#0052cc] transition-all"
          >
            &bull; {{ categoria }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tiposHistorias = ref([
  {
    tipo: 'Leyendas',
    desc: 'Narrativas sobre el origen y sucesos sobrenaturales.',
    categorias: [
      'Leyendas de la Naturaleza',
      'Leyendas Ancestrales',
      'Leyendas de Animales'
    ]
  },
  {
    tipo: 'Cuentos',
    desc: 'Relatos de transmisión oral y moralejas.',
    categorias: [
      'Cuentos Tradicionales',
      'Cuentos Infantiles',
      'Cuentos Morales'
    ]
  },
  {
    tipo: 'Poemas',
    desc: 'Expresión poética y lírica de la región.',
    categorias: [
      'Poemas Ancestrales',
      'Poemas de la Naturaleza',
      'Poemas de Amor'
    ]
  }
])

const seleccionarCategoria = cat => {
  alert(
    'Se ha seleccionado la categoría: ' +
      cat +
      '. Cargando contenido de la base de datos...'
  )
}
</script>
