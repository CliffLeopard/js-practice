<template>
  <div>
    <button class="btn1">{{str_btn1}}</button>
    <button class="btn2">{{str_btn2}}</button>
    <div id="card1" class="card">
      <p>This is Card_1</p>
    </div>
    <div id="card2" class="card">
      <p>This is Card_2</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ploy",
  props: {},
  data() {
    return {
      str_btn1: "cliff",
      str_btn2: "leopard"
    };
  },
  methods:{


  },
  mounted(){

    function Animation(){}
    Animation.prototype.hide = function(){
      this.style.display = 'none'
    }

    let btn1 = document.querySelector('.btn1')
    console.dir(btn1)
    Animation.prototype.hide.call(btn1)
  }
};
</script>


<style scoped lang="less">
button {
  width: 50px;
  height: 30px;
}
.card {
  border: 1px solid black;
  width: 200px;
  height: 100px;
  background-color: yellow;
  text-align: center;
}
</style>
