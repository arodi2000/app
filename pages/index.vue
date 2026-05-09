<template>
  <div class="min-h-screen bg-[#0f1115] text-white">
    <header
      class="border-b border-[#1f242d] bg-[#121820]/90 backdrop-blur-sm sticky top-0 z-50"
    >
      <div
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-10 w-10 bg-[#ff6b00] rounded-xl flex items-center justify-center font-black text-black"
          >
            H
          </div>
          <div>
            <span class="text-xl font-black uppercase tracking-tight text-white"
              >Huamelollan</span
            >
            <p class="text-[9px] text-[#5a6475] font-mono tracking-widest">
              ITGAM - TECNM
            </p>
          </div>
        </div>
        <nav
          class="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400"
        >
          <a
            href="#cultura"
            class="hover:text-[#ff6b00] transition-colors duration-200"
            >1. Cultura</a
          >
          <a
            href="#historias"
            class="hover:text-[#ff6b00] transition-colors duration-200"
            >2. Historias</a
          >
          <a
            href="#aprender"
            class="hover:text-[#0052cc] transition-colors duration-200"
            >3. Aprender</a
          >
          <a
            href="#perfil"
            class="hover:text-[#ff6b00] transition-colors duration-200"
            >4. Perfil</a
          >
        </nav>
        <span
          class="text-xs text-[#ff6b00] font-mono uppercase tracking-widest hidden sm:block"
        >
          Halcón Peregrino v2.6
        </span>
      </div>
    </header>

    <main
      class="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
    >
      <div class="lg:col-span-6 flex flex-col justify-center">
        <span
          class="text-[#ff6b00] text-xs font-mono tracking-widest uppercase mb-3"
          >Proyecto Académico - 9° Semestre</span
        >
        <h1
          class="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6"
        >
          Plataforma <br /><span class="text-[#0052cc]">Huamelollan</span>
        </h1>
        <p class="text-zinc-400 text-base leading-relaxed max-w-lg mb-8">
          Sistema interactivo de preservación y aprendizaje cultural diseñado en
          el Instituto Tecnológico de la Gustavo A. Madero.
        </p>

        <div class="grid grid-cols-2 gap-4 max-w-sm">
          <a
            href="#cultura"
            class="p-4 bg-[#161d29] border border-[#232b38] rounded-2xl hover:border-[#ff6b00] transition-all group"
          >
            <div
              class="text-[#ff6b00] font-bold text-base mb-1 group-hover:translate-x-1 transition-transform"
            >
              01 / Cultura
            </div>
            <p class="text-[10px] text-zinc-500">Tradiciones y Danzas</p>
          </a>
          <a
            href="#historias"
            class="p-4 bg-[#161d29] border border-[#232b38] rounded-2xl hover:border-[#0052cc] transition-all group"
          >
            <div
              class="text-[#0052cc] font-bold text-base mb-1 group-hover:translate-x-1 transition-transform"
            >
              02 / Historias
            </div>
            <p class="text-[10px] text-zinc-500">Leyendas y Cuentos</p>
          </a>
        </div>
      </div>

      <div class="lg:col-span-6 flex flex-col justify-center">
        <div
          class="bg-[#161d29] border border-[#232b38] p-8 rounded-3xl shadow-2xl"
        >
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-black uppercase tracking-tight">
              Menú de Navegación
            </h2>
            <span
              class="px-3 py-1 bg-[#ff6b00]/10 text-[#ff6b00] text-[10px] font-bold tracking-widest rounded-full uppercase"
            >
              Activo
            </span>
          </div>

          <div class="space-y-4">
            <NuxtLink
              to="/cultura"
              class="w-full p-4 bg-[#1f2633] hover:bg-[#ff6b00]/10 border border-[#2a3447] hover:border-[#ff6b00] rounded-2xl flex items-center justify-between transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="h-9 w-9 bg-[#ff6b00]/10 text-[#ff6b00] rounded-xl flex items-center justify-center font-black text-sm"
                >
                  01
                </div>
                <div>
                  <div
                    class="font-bold text-white group-hover:text-[#ff6b00] transition-colors"
                  >
                    Sección Cultural
                  </div>
                  <div class="text-[10px] text-zinc-400">
                    Gastronomía, Vestimenta y Tradiciones
                  </div>
                </div>
              </div>
              <span
                class="text-[#ff6b00] group-hover:translate-x-1 transition-transform"
                >&rarr;</span
              >
            </NuxtLink>

            <NuxtLink
              to="/historias"
              class="w-full p-4 bg-[#1f2633] hover:bg-[#0052cc]/10 border border-[#2a3447] hover:border-[#0052cc] rounded-2xl flex items-center justify-between transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="h-9 w-9 bg-[#0052cc]/10 text-[#0052cc] rounded-xl flex items-center justify-center font-black text-sm"
                >
                  02
                </div>
                <div>
                  <div
                    class="font-bold text-white group-hover:text-[#0052cc] transition-colors"
                  >
                    Módulo de Historias
                  </div>
                  <div class="text-[10px] text-zinc-400">
                    Cuentos, Leyendas y Poemas
                  </div>
                </div>
              </div>
              <span
                class="text-[#0052cc] group-hover:translate-x-1 transition-transform"
                >&rarr;</span
              >
            </NuxtLink>

            <NuxtLink
              to="/aprender"
              class="w-full p-4 bg-[#1f2633] hover:bg-[#22c55e]/10 border border-[#2a3447] hover:border-[#22c55e] rounded-2xl flex items-center justify-between transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="h-9 w-9 bg-[#22c55e]/10 text-[#22c55e] rounded-xl flex items-center justify-center font-black text-sm"
                >
                  03
                </div>
                <div>
                  <div
                    class="font-bold text-white group-hover:text-[#22c55e] transition-colors"
                  >
                    Nivel de Aprendizaje
                  </div>
                  <div class="text-[10px] text-zinc-400">
                    Unidades, Actividades y Evaluaciones
                  </div>
                </div>
              </div>
              <span
                class="text-[#22c55e] group-hover:translate-x-1 transition-transform"
                >&rarr;</span
              >
            </NuxtLink>

            <NuxtLink
              to="/perfil"
              class="w-full p-4 bg-[#1f2633] hover:bg-zinc-700/50 border border-[#2a3447] hover:border-zinc-500 rounded-2xl flex items-center justify-between transition-all group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="h-9 w-9 bg-zinc-800 text-zinc-400 rounded-xl flex items-center justify-center font-black text-sm"
                >
                  04
                </div>
                <div>
                  <div
                    class="font-bold text-white group-hover:text-zinc-300 transition-colors"
                  >
                    Perfil y Logros
                  </div>
                  <div class="text-[10px] text-zinc-400">
                    Progreso general y puntajes obtenidos
                  </div>
                </div>
              </div>
              <span
                class="text-zinc-400 group-hover:translate-x-1 transition-transform"
                >&rarr;</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
