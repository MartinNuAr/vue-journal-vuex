<template>
    <NavBar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList></EntryList>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('@/modules/daybook/components/NavBar.vue')),
        EntryList: defineAsyncComponent(() => import('@/modules/daybook/components/EntryList.vue'))
    }
}
</script>