export const actions = {
  list(ctx, { page = 1, limit = 10 }) {
    return this.$axios.$get(`/pokemons?page=${page}&limit=${limit}`)
  },
  show(ctx, pokemonId) {
    return this.$axios.$get(`/pokemons/${pokemonId}`)
  },
  create(ctx, pokemon) {
    return this.$axios.$post(`/pokemons`, pokemon)
  },
  update(ctx, { pokemonId, fields }) {
    return this.$axios.$put(`/pokemons/${pokemonId}`, fields)
  },
  delete(ctx, pokemonId) {
    return this.$axios.$delete(`/pokemons/${pokemonId}`)
  },
  changeImage(ctx, { pokemonId, formData }) {
    return this.$axios.$post(`/pokemons/${pokemonId}/image`, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        Accept: '*/*',
      },
    })
  },
}
