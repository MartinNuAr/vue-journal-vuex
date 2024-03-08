<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.pusj({ name: 'entry', params: 10})"
    >
        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">5</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2024, martes</span>
        </div>

        <div class="entry-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2C3E50;
        transition: 0.2s all ease-in;

        &:hover {
            transition: 0.2s all ease-in;
            background-color: lighten(grey, 45%);
        }

        .entry-description {
            font-size: 12px;
        }

        .entry-title {
            font-size: 12px;
        }
    }
</style>