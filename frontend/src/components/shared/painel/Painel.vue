<template>

         <div class="painel">
            <h2 class="Card-Name">{{ Nome }} #{{ Pokedex }}</h2>
            <div class="Card-Img">
              <slot>
            </slot>
           </div>
          </div>

</template>

<script>

export default {

  props: ['Nome', 'Pokedex']

}
</script>

<style scoped>
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .Card-Name {
    text-align: center;
    border: solid 1px;
    background: rgb(232, 193, 194);
    margin: 0 0 10px 0;
    padding: 3px;
  }
</style>
