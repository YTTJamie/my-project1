// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import vdialog from 'vdialog'
import $ from 'jquery'
Vue.use(Vuex)

// 先写个假数据
const state = {
  sortType: true, // true => up
  list: [{
    name: '二哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日完善，过圣诞节需要6个小时'
  },
  {
    name: '三哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日完善，过圣诞节需要6个小时'
  },
  {
    name: '四哲',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日完善，过圣诞节需要6个小时'
  }],
  textList: [
    {context: '点击添加内容'},
    {context: '点击添加内容'},
    {context: '点击添加内容'},
    {context: '点击添加内容'}
  ],
  newTextList: []
}
export default new Vuex.Store({
  state,
  getters: {
    newTextList: state => {
      return state
    }
  },
  mutations: {
    addNewText (state, id) {
      vdialog({
        title: '添加',
        content: `<div>
            <p>内容：<input ref="newTextContent" class="add-text-input" type="text" style="width:200px;border:1px solid #ddd;padding:4px;"/></p>
          </div>`,
        ok () {
          let data = {
            time: Date.parse(new Date()),
            isEdit: false,
            id: id,
            context: $('.add-text-input').val()
          }
          state.newTextList.push(data)
          state.textList.splice(data.id, 1)
          if (state.sortType) {
            state.newTextList.sort((a, b) => {
              return a.time - b.time
            })
          } else {
            state.newTextList.sort((a, b) => {
              return b.time - a.time
            })
          }
        },
        okValue: '保存',
        cancel: true,
        cancelValue: '取消',
        modal: true
      })
    },
    deleteTodoItem (state, index) {
      // 变更状态
      state.list.splice(index, 1)
    },
    editTextItem (state, id) {
      state.newTextList.map(v => {
        if (v.id === id) {
          v.isEdit = true
        } else {
          v.isEdit = false
        }
        return v
      })
    },
    cancelEditItem (state, id) {
      state.newTextList.map(v => {
        if (v.id === id) {
          v.isEdit = false
        }
        return v
      })
    },
    saveEditItem (state, item) {
      state.newTextList.map(v => {
        if (v.id === item.id) {
          v.context = item.context
          v.isEdit = false
          v.time = Date.parse(new Date())
        }
        return v
      })
      
      console.log("state~~~~~~~~~~");
      console.log(state);
      if (state.sortType) {
        state.newTextList.sort((a, b) => {
          return a.time - b.time
        })
      } else {
        state.newTextList.sort((a, b) => {
          return b.time - a.time
        })
      }
    },
    upSortList (state) {
      state.newTextList.sort((a, b) => {
        return a.time - b.time
      })
      state.sortType = true
    },
    downSortList (state) {
      state.newTextList.sort((a, b) => {
        return b.time - a.time
      })
      state.sortType = false
    },
    addTextList (state) {
      let len = state.newTextList.length + state.textList.length;
      if (len === 5 ){
        vdialog.alert('最多只能增加5条数据！');
      } else {
        vdialog({
          title: '添加',
          content: `<div>
              <p>内容：<input ref="newTextContent" class="add-text-input" type="text" style="width:200px;border:1px solid #ddd;padding:4px;"/></p>
            </div>`,
          ok () {
            let data = {
              time: Date.parse(new Date()),
              isEdit: false,
              id: (len+1),
              context: $('.add-text-input').val()
            }
            state.newTextList.push(data)
            state.textList.splice(data.id, 1)
          },
          okValue: '保存',
          cancel: true,
          cancelValue: '取消',
          modal: true
        })
      }
    }
  }
})
