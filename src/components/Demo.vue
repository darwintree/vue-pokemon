<template>
  <div>
    <el-select v-model="pokemonName" placeholder="请选择" size="mini" filterable>
      <el-option
         v-for="(pmData, pmName) in pokedex"
         :label="pmName"
         :key="pmName"
         :value="pmName"
        >
      </el-option>
    </el-select>
    <pokemon :pokemonName="pokemonName" :pokemonData="pokemonData"></pokemon>
  </div>
</template>
<script>
import Pokemon from './Pokemon'
import { dex } from '../data/pokedex.js'
export default {
  components: {
    Pokemon
  },
  data: function () {
    return {
      pokedex: null,
      pokemonName: 'Whimsicott'
    }
  },
  created: function () {
    this.pokedex = dex
  },
  computed: {
    pokemonData: function () {
      return this.pokedex[this.pokemonName]
    }
  }
}
</script>
<style scoped>

</style>
