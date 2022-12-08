<template>
    <ContentWrapper>
       <map-component></map-component>
    </ContentWrapper>
</template>

<script>
export default {
     components: {
        MapComponent: () => import('../components/MapComponent.vue')
    },
}
</script>
