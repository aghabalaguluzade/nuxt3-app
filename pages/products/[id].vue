<template>
     <div>
          <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
        </Head>
          <p>Product details for {{ id }}</p>          
     </div>
</template>

<script setup>

     const { id } = useRoute().params
     const title = ref(id);

     definePageMeta({
        layout : "products"
    });

</script>

<style scoped>

</style>