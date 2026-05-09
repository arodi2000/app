<template>
  <div class="max-w-2xl mx-auto bg-zinc-900 p-6 rounded-2xl border-2 border-zinc-800">
    <div v-if="!finished">
      <h2 class="text-2xl font-bold mb-6 text-center">{{ questions[currentStep].text }}</h2>
      <div class="grid grid-cols-2 gap-4">
        <button 
          v-for="(option, index) in questions[currentStep].options" 
          :key="index"
          @click="checkAnswer(index)"
          class="p-4 rounded-xl font-bold text-lg transition-all active:scale-95 bg-zinc-800 hover:bg-green-600 border border-zinc-700"
        >
          {{ option }}
        </button>
      </div>
    </div>
    
    <div v-else class="text-center">
      <h2 class="text-4xl font-bold text-green-500 mb-4">¡Completado!</h2>
      <p class="text-xl text-zinc-300">Puntaje final: {{ score }} pts</p>
      <BaseButton @click="reset" class="mt-6">Reintentar</BaseButton>
    </div>
  </div>
</template>

<script setup>
const currentStep = ref(0)
const score = ref(0)
const finished = ref(false)

const questions = [
  { text: "¿Cuál es la capital de la tecnología?", options: ["Silicon Valley", "Tokio", "CDMX", "Berlín"], correct: 0 },
  { text: "¿Qué significa UX?", options: ["User Xylophone", "User Experience", "Unit X", "User Xperiment"], correct: 1 }
]

const checkAnswer = (index) => {
  if (index === questions[currentStep.value].correct) score.value += 100
  
  if (currentStep.value < questions.length - 1) {
    currentStep.value++
  } else {
    finished.value = true
  }
}

const reset = () => {
  currentStep.value = 0
  score.value = 0
  finished.value = false
}
</script>