<template>
  <button 
    class="px-6 py-2 rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50"
    :class="variantClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' }
})

const variantClasses = computed(() => {
  return props.variant === 'primary' 
    ? 'bg-green-500 text-black hover:bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
    : 'bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700'
})
</script>