<template>
<div class="search-bar-container">
    <input 
    class="form-control"
    placeholder="Buscar ubicacion..."
    type="text" />
</div>
{{debouncedValued}}
<search-results/>
</template>
<script lang="js" src="./SearchBar.js"/>
<style scoped>
.search-bar-container{
    margin-top: 10px;
    background-color: white;
}

</style>