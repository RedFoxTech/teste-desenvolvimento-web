<template>
  <div
    class="inline-block max-w-xs bg-white bg-opacity-10 rounded-3xl relative"
  >
    <div class="py-2">
      <h1 class="text-white text-center text-4xl font-bold">{{ name }}</h1>
      <h2 class="text-white text-center">{{ primaryType }}</h2>
    </div>

    <div class="bg-white bg-opacity-10 rounded-3xl p-8 h-80">
      <img :src="image" alt="pokemon" />
    </div>

    <p
      class="text-white text-2xl font-bold absolute bottom-0 right-0 pr-4 pb-4"
    >
      {{ pokedexNumber }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    primaryType: {
      type: String,
      required: true,
    },
    pokedexNumber: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
