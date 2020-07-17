<template>
  <div>
    <b-button @click="disparaAcao" :variant="estiloBotao" :type="tipo">{{
      rotulo
    }}</b-button>
  </div>
</template>

<script>
export default {
  props: ["tipo", "rotulo", "confirmacao", "estilo"],

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma a operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  },
  computed: {
    estiloBotao() {
      if (this.estilo == "danger") return "danger";
      if (this.estilo == "warning") return "warning";
    }
  }
};
</script>

<style></style>
