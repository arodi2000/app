<template>
  <div
    class="bg-zinc-900/80 p-8 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-sm max-w-md mx-auto"
  >
    <h2 class="text-3xl font-bold mb-6 text-white tracking-tight text-center">
      {{ isRegister ? 'Crear cuenta' : 'Bienvenido de nuevo' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div v-if="isRegister" class="space-y-4 animate-in fade-in duration-300">
        <div class="grid grid-cols-2 gap-4">
          <input
            v-model="form.nombre"
            type="text"
            placeholder="Nombre"
            class="bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-green-500 outline-none w-full"
            required
          />
          <input
            v-model="form.apellido"
            type="text"
            placeholder="Apellido"
            class="bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-green-500 outline-none w-full"
            required
          />
        </div>
        <input
          v-model="form.telefono"
          type="tel"
          placeholder="Teléfono (10 dígitos)"
          class="bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-green-500 outline-none w-full"
          required
        />
      </div>

      <input
        v-model="form.correo"
        type="email"
        placeholder="Correo electrónico"
        class="bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-green-500 outline-none w-full"
        required
      />

      <input
        v-model="form.password"
        type="password"
        placeholder="Contraseña"
        class="bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-green-500 outline-none w-full"
        required
      />

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-green-500 transition-all active:scale-95 disabled:opacity-50 uppercase tracking-widest"
      >
        {{ loading ? 'Procesando...' : isRegister ? 'Registrarme' : 'Entrar' }}
      </button>
    </form>

    <p
      @click="isRegister = !isRegister"
      class="mt-6 text-center text-zinc-500 text-sm cursor-pointer hover:text-white transition-colors"
    >
      {{
        isRegister
          ? '¿Ya tienes cuenta? Inicia sesión'
          : '¿No tienes cuenta? Regístrate'
      }}
    </p>
  </div>
</template>

<script setup>
const isRegister = ref(false)
const loading = ref(false)

const form = ref({
  nombre: '',
  apellido: '',
  telefono: '',
  correo: '',
  password: '' // Campo de contraseña añadido
})

// URL de tu Versión 2 de Google Apps Script
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzX4P3bcmv9gTPzxduYAuJ0Sr7Cu7vVnzXvznUn2G0bBptWNTtbdaHwW21IdeEhmNebqQ/exec'

const handleSubmit = async () => {
  loading.value = true

  try {
    if (isRegister.value) {
      // --- LÓGICA DE REGISTRO (POST) ---
      // Envía todos los datos para que se guarden en la hoja
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form.value)
      })

      alert('¡Registro exitoso! Ya puedes iniciar sesión.')
      isRegister.value = false
      form.value.password = '' // Limpiar contraseña por seguridad
    } else {
      // --- LÓGICA DE LOGIN (GET) ---
      // Consulta si el correo y contraseña existen en la base de datos
      const response = await fetch(
        `${SCRIPT_URL}?correo=${form.value.correo}&password=${form.value.password}`
      )
      const result = await response.json()

      if (result.auth) {
        alert(`¡Bienvenido de nuevo, ${result.user}!`)
        navigateTo('/dashboard') // Redirige al dashboard si los datos coinciden
      } else {
        alert('Correo o contraseña incorrectos. Verifica tus datos.')
      }
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Hubo un problema al conectar con el servidor de ArodiCyber.')
  } finally {
    loading.value = false
  }
}
</script>
