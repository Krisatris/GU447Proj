<template>
    <div class="line">
        <svg height="210" width="500">
            <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'PathComponent',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

