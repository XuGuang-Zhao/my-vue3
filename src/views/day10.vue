<template>
    <div>
       {{ $translate('greetings.hello')  }} 
    </div>
</template>

<script>
export default {
    inject: ['i18n'],
    mounted() {
        console.log(this.i18n)
        console.log('greeting', this.$translate('greetings.hello'))
    }
}

</script>