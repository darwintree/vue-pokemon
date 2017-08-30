<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3"><label> name </label></el-col>
      <el-col :span="4"><el-input v-model="pokemonName" size='mini'></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>属性</label></el-col>
      <el-col :span="4"><el-select v-model="pokemonData.t1" size='mini'></el-select></el-col>
      <el-col :span="4"><el-select v-model="pokemonData.t2" size='mini'></el-select></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>等级</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="level" min=1 max=100 size='mini'></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label></label></el-col>
      <el-col :span="3"><label> 种族值 </label></el-col>
      <el-col :span="3"><label> 个体值 </label></el-col>
      <el-col :span="3"><label> 努力值 </label></el-col>
      <el-col :span="3"><label> 实数值 </label></el-col>
      <el-col :span="3"><label> 能力等级 </label></el-col>
      <el-col :span="3"><label> 性格 </label></el-col>
      <el-col :span="3"><label> ------- </label></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>HP</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.hp }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.hp" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.hp" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("hp") }}</label></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>Atk</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.at }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.at" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.at" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("at") }}</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="statLevel.at" min=-6 max=6 size='mini'></el-input></el-col>
      <el-col :span="3">
        <el-radio-group v-model="factor.at" size="mini">
          <el-radio-button :label="1.1">+</el-radio-button>
          <el-radio-button :label="1">~</el-radio-button>
          <el-radio-button :label="0.9">-</el-radio-button>
        </el-radio-group></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>Def</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.df }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.df" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.df" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("df") }}</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="statLevel.df" min=-6 max=6 size='mini'></el-input></el-col>
      <el-col :span="3">
        <el-radio-group v-model="factor.df" size="mini">
          <el-radio-button :label="1.1">+</el-radio-button>
          <el-radio-button :label="1">~</el-radio-button>
          <el-radio-button :label="0.9">-</el-radio-button>
        </el-radio-group></el-col>  
      </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>Sp.A</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.sa }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.sa" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.sa" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("sa") }}</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="statLevel.sa" min=-6 max=6 size='mini'></el-input></el-col>
      <el-col :span="3">
        <el-radio-group v-model="factor.sa" size="mini">
          <el-radio-button :label="1.1">+</el-radio-button>
          <el-radio-button :label="1">~</el-radio-button>
          <el-radio-button :label="0.9">-</el-radio-button>
        </el-radio-group></el-col>
      </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>Sp.D</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.sd }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.sd" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.sd" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("sd") }}</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="statLevel.sd" min=-6 max=6 size='mini'></el-input></el-col>
      <el-col :span="3">
        <el-radio-group v-model="factor.sd" size="mini">
          <el-radio-button :label="1.1">+</el-radio-button>
          <el-radio-button :label="1">~</el-radio-button>
          <el-radio-button :label="0.9">-</el-radio-button>
        </el-radio-group></el-col>
      </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><label>Speed</label></el-col>
      <el-col :span="3"><label> {{ pokemonData.bs.sp }} </label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="ivs.sp" min=0 max=31 size='mini'></el-input></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="evs.sp" min=0 max=252 step=4 size='mini'></el-input></el-col>
      <el-col :span="3"><label>{{ stat("sp") }}</label></el-col>
      <el-col :span="3"><el-input class="value" type="number" v-model.number="statLevel.sp" min=-6 max=6 size='mini'></el-input></el-col>
      <el-col :span="3">
        <el-radio-group v-model="factor.sp" size="mini">
          <el-radio-button :label="1.1">+</el-radio-button>
          <el-radio-button :label="1">~</el-radio-button>
          <el-radio-button :label="0.9">-</el-radio-button>
        </el-radio-group></el-col>
      </el-row>
  </div>
</template>

<script>
import { hello, getStat } from '../utils/formulas.js'
// import { dex } from '../data/pokedex.js'
export default {
  props: ['pokemonName', 'pokemonData'],
  data () {
    return {
      level: 50,
      evs: {
        'hp': 0,
        'at': 0,
        'df': 0,
        'sa': 0,
        'sd': 0,
        'sp': 0
      },
      ivs: {
        'hp': 31,
        'at': 31,
        'df': 31,
        'sa': 31,
        'sd': 31,
        'sp': 31
      },
      statLevel: {
        'at': 0,
        'df': 0,
        'sa': 0,
        'sd': 0,
        'sp': 0
      },
      factor: {
        'at': 1,
        'df': 1,
        'sa': 1,
        'sd': 1,
        'sp': 1
      },
      dex: {}
    }
  },
  // computed: {
  // },
  created: function () {
    hello()
    // this.pokemonName = 'Chesnaught'
    // this.pokemonData = {
    //   't1': 'Grass',
    //   't2': 'Fighting',
    //   'bs': {
    //     'hp': 88,
    //     'at': 107,
    //     'df': 122,
    //     'sa': 74,
    //     'sd': 75,
    //     'sp': 64
    //   },
    //   'w': 90.0
    // }
    // this.dex = dex
  },
  methods: {
    stat: function (statName) {
      return getStat(this.statArgument(statName))
    },
    statArgument: function (statName) {
      let temp = {
        base: this.pokemonData.bs[statName],
        iv: this.ivs[statName],
        ev: this.evs[statName],
        level: this.level
      }
      if (statName === 'hp') {
        temp['isHp'] = true
      } else {
        temp['factor'] = this.factor[statName]
      }
      return temp
    }
  }
}
</script>

<style scoped>
label {
  display: inline-block;
}
/* 
.el-input {
  width: 160px;
} */
/* 
.el-select {
  width: 160px;
} */

</style>
