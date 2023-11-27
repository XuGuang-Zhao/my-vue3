<script setup>
import {ref} from 'vue'
const msg = ref('')
const checkNames = ref([])
const name = ref('')
</script>
<template>
    <div>
        <!-- 文本vModel绑定 -->
        <p> Message is {{ msg }}</p>
        <el-input v-model="msg" style="margin: 10px 0;"></el-input>
        <!-- 文本框vModel绑定 -->
        <textarea v-model="msg" style="margin: 10px 0;"></textarea>
        <!-- 多选框vModel绑定 -->
        <div> CheckName is: {{ checkNames }} </div>
        <label for="jack">Jack</label>
        <input type="checkbox" id="jack" value="jack" v-model="checkNames">
        <label for="john">John</label>
        <input type="checkbox" id="john" value="john" v-model="checkNames">
        <label for="mike">Mike</label>
        <input type="checkbox" id="mike" value="mike" v-model="checkNames">
        <!-- vModel lazy: 在change事件后更新 -->
        <div>
            <div>Name: {{ name }}</div>
            <input type="text" v-model.lazy="name" placeholder="测试名称">
        </div>
    </div>
</template>
