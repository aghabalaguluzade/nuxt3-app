<template>
     <div>
          <Head>
               <Title>{{ title }}</Title>
               <Meta name="description" :content="title" />
          </Head>
          <h2>About</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id debitis mollitia quos ut nesciunt itaque quisquam est atque quaerat ipsam!</p>
          <p>{{ data }}</p>
     </div>
</template>

<script setup>
     const title = ref('About');
</script>

<style scoped>

</style>