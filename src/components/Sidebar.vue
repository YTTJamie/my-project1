<template>
  <div class="text-list">
    <p class="sort-btn">
      <a class="sort" herf="javascript:;" v-on:click="upSort">生序排列</a>
      <a class="sort" herf="javascript:;" v-on:click="downSort">降序排列</a>
      <a class="sort" herf="javascript:;" v-on:click="addTextList">添加＋</a>
    </p>
    <ul>
      <li v-for="(item, index) in textList">
        <div class="item" v-on:click="addNewText(index)">
          {{item.context}}
        </div>
      </li>
    </ul>
    <ul>
      <li v-if="!newTextList.length"></li>
      <li v-else v-for="(item, index) in newTextList">
        <div class="item" v-if="item.isEdit===false" >
          <p class="text-btn">
            <a class="edit" href="javascript:;" v-on:click="editText(item.id, item.context)">编辑</a>
          </p>
          <p>{{item.context}}</p>
          <p>{{new Date(item.time).toLocaleString()}}</p>
        </div>
        <div class="item" v-else>
          <p class="text-btn">
            <a class="save" href="javascript:;" v-on:click="saveEdit(item.id)">保存</a>
            <a class="edit" href="javascript:;" v-on:click="cancelEdit(item.id)">取消</a>
          </p>
          <textarea cols="50" vbind:value="item.context" v-model="editContxt" class="text"></textarea>
          <p>{{new Date(item.time).toLocaleString()}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
  ul,li,p{
    padding:0;
    margin:0;
    list-style:none;
  }
  .text-list li .item{
    min-height:50px;
    cursor:pointer;
    padding:10px 20px;
  }
  .text-list li .item:hover{
    background:#bacffa;
  }
  .text-list .sort-btn{
    background:#fefefe;
  }
  .text-list .sort-btn a{
    padding:4px 10px;
  }
  .text-list li{
    border-bottom:1px dashed #ddd;
  }
  .text-list li .text-btn{
    float:right;
    height:100%;
    margin:2px 10px;
    text-align:center;
  }
  .text-list li .edit{
    padding:4px 6px;
    background:blue;
    color:#fff;
  }
  .text-list li .save{
    padding:4px 6px;
    background:pink;
    color:#fff;
  }
  .text-list li input.text{
    padding:4px;
    border:1px solid #ddd;
  }
</style>
<script>
  import { mapState } from 'vuex'
  export default {
    data: function () {
      return {
        editContxt: ''
      }
    },
    computed: mapState([
      'textList',
      'newTextList'
    ]),
    methods: {
      addNewText (index) {
        let that = this
        that.$store.commit('addNewText', index)
      },
      editText (id, context) {
        this.$store.commit('editTextItem', id)
        this.editContxt = context
      },
      cancelEdit (id) {
        this.$store.commit('cancelEditItem', id)
      },
      saveEdit (id) {
        this.$store.commit('saveEditItem', {
          id: id,
          context: this.editContxt
        })
      },
      upSort () {
        this.$store.commit('upSortList')
      },
      downSort () {
        this.$store.commit('downSortList')
      },
      addTextList () {
        this.$store.commit('addTextList')
      }
    }
  }
</script>
