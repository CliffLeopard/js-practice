import * as m_math from "./js/math_util"
console.log(m_math.add(100, 200))
console.log(m_math.sub(400, 200))
console.log(m_math.mul(10, 30))
m_math.print()

export function helloworld() {
  console.log("Hello World")
}

// 依赖css,以方便引入
require("./css/common")
require("./css/special")

import Vue from "vue"
import dm_cpt from "./vue/dm_cpt"
const vm = new Vue({
  el: '#vm',
  template: `
    <dm_cpt></dm_cpt>
  `,
  components: {
    dm_cpt
  }
})