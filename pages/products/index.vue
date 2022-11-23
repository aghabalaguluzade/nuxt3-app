<template>
     <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
        </Head>
         <h2>Products</h2> 
     </div>
</template>

<script setup>
    definePageMeta({
        layout : "products"
    });

    const title = ref('Products')
    
</script>

<style scoped>

</style>