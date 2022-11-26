<template>
     <div>

          <Head>
               <Title>{{ title }}</Title>
          </Head>
          
          <h4>{{ data }}</h4>

     </div>
</template>

<script setup>
     const title = ref("Currency");
     const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>

</style>