<template>
     <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
        </Head>
         <h2>Products</h2>
         <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
                <ProductCard :product="product" />
            </div>
         </div> 
     </div>
</template>

<script setup>
    definePageMeta({
        layout : "products"
    });

    const title = ref('Products');

    const { data : products } = await useFetch(`https://fakestoreapi.com/products`);
    
</script>

<style scoped>

</style>