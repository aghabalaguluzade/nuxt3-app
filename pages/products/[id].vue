<template>
     <div>
          <Head>
            <Title>{{ product.title }}</Title>
            <Meta name="description" :content="title" />
        </Head>
        <ProductDetails :product="product" />
     </div>
</template>

<script setup>

     const { id } = useRoute().params
     const url = 'https://fakestoreapi.com/products/' + id

     const { data : product } = await useFetch(url);

     definePageMeta({
        layout : "products"
    });

</script>

<style scoped>

</style>