<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entrada" />
        </div>

        <div class="entry-scrollarea">
            <h2 v-for="item in 100" :key="item">
                <EntryItem></EntryItem>
            </h2>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {

    components: {
        EntryItem: defineAsyncComponent(() => import('@/modules/daybook/components/EntryItem.vue'))
    }
}
</script>

<style lang="scss" scoped>
    input {
        height: 25px;
    }

    .entry-list-container {
        border-right: 1px solid #2C3E50;
        height: calc(100vh - 56px);
    }

    .entry-scrollarea {
        height: calc(100vh - 110px);
        overflow: scroll;
    }
</style>