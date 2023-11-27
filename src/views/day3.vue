<script setup>
import { ref, computed } from 'vue'
const author = ref({
    name: 'zxg',
    books: [
        'vue1',
        'vue2',
        'vue3'
    ]
})

// 计算属性 
const hasPublishBook = computed(() => {
    return author.value.books.length > 0 ? 'Yes' : 'No' 
})

const firstName = ref('Anthony')
const lastName  = ref('Zhao')
const fullName = computed({
    get() {
        return firstName.value + lastName.value
    },
    set(val) {
        [firstName.value, lastName.value] = val.split(' ')
    }
})


const now = function() {
    return Date.now()
}

const changeName = () => {
    fullName.value = 'Change Name'
}

</script>

<template>
    <div>
        <p> Has published books: </p>
        <span> {{ hasPublishBook }} </span>
        <div> Name: {{ fullName }} </div>
        <button @click="changeName">Change</button>
    </div>
</template>