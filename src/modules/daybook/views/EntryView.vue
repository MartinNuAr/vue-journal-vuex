<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">

        <div class="entry-title d-flex">
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ month }}</span>
            <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-success mx-2">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="¿Qué sucedió hoy?"
            v-model="entry.text"
        >
        </textarea>
    </div>
    </template>

    <FaButton icon="fa-save"></FaButton>

    <img 
        src="data:image/jpeg;base64,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" 
        alt="Entry picture"
        class="img-thumbnail"
    >

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        FaButton: defineAsyncComponent(() => import('@/modules/daybook/components/FaButton.vue'))
    },
    data() {
        return {
            entry: {
                text: ''
            }
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        },
    },
    methods: {
        loadEntry() {
            const entry = this.getEntryById(this.id)
            if (!entry) return this.$router.push({ name: 'no-entry'})

            this.entry = entry
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>