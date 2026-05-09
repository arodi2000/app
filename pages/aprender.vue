<template>
  <div class="min-h-screen bg-[#0f1115] text-white p-10">
    <header
      class="flex justify-between items-center mb-12 border-b border-[#1f242d] pb-6"
    >
      <div>
        <h1 class="text-3xl font-black uppercase tracking-tighter">
          03. Aprender
        </h1>
        <p class="text-xs text-zinc-500 uppercase tracking-widest mt-1">
          Selección de nivel de aprendizaje
        </p>
      </div>
      <NuxtLink
        to="/"
        class="px-4 py-2 bg-[#22c55e] text-black text-xs font-bold rounded-xl hover:bg-[#16a34a]"
      >
        Inicio
      </NuxtLink>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        class="bg-[#161d29] border border-[#232b38] p-6 rounded-3xl group hover:border-[#22c55e] transition-all"
      >
        <span
          class="px-3 py-1 bg-green-500/10 text-[#22c55e] text-[10px] font-bold tracking-widest rounded-full uppercase"
          >Básico</span
        >
        <h2 class="text-xl font-bold mt-4 mb-2">Unidad 1</h2>
        <p class="text-zinc-500 text-xs leading-relaxed mb-6">
          Contenido introductorio sobre tradiciones locales y comprensión básica
          del entorno.
        </p>
        <button
          @click="irAUnidad('Básico')"
          class="w-full py-3 bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold rounded-xl hover:bg-[#22c55e] hover:text-black transition-colors"
        >
          Comenzar Unidad
        </button>
      </div>

      <div
        class="bg-[#161d29] border border-[#232b38] p-6 rounded-3xl group hover:border-[#22c55e] transition-all"
      >
        <span
          class="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-widest rounded-full uppercase"
          >Intermedio</span
        >
        <h2 class="text-xl font-bold mt-4 mb-2">Unidad 2</h2>
        <p class="text-zinc-500 text-xs leading-relaxed mb-6">
          Lectura de cuentos populares y análisis de leyendas de los
          antepasados.
        </p>
        <button
          @click="irAUnidad('Intermedio')"
          class="w-full py-3 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-xl hover:bg-yellow-500 hover:text-black transition-colors"
        >
          Comenzar Unidad
        </button>
      </div>

      <div
        class="bg-[#161d29] border border-[#232b38] p-6 rounded-3xl group hover:border-[#22c55e] transition-all"
      >
        <span
          class="px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] text-[10px] font-bold tracking-widest rounded-full uppercase"
          >Avanzado</span
        >
        <h2 class="text-xl font-bold mt-4 mb-2">Unidad 3</h2>
        <p class="text-zinc-500 text-xs leading-relaxed mb-6">
          Evaluación integral del módulo, resolución de cuestionario y registro
          de notas.
        </p>
        <button
          @click="irAEvaluacion()"
          class="w-full py-3 bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold rounded-xl hover:bg-[#ff6b00] hover:text-black transition-colors"
        >
          Ir a Evaluación
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const irAUnidad = nivel => {
  alert('Unidad de aprendizaje nivel: ' + nivel + ' seleccionada.')
}
const irAEvaluacion = () => {
  alert('Abriendo evaluación del sistema Huamelollan...')
}
</script>
