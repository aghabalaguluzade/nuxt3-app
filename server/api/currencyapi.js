export default defineEventHandler(async (event) => {
     const { data } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=TkorE9w8dfUOBD4zuHbsxNbFRXLuKufkvFoDGMCA");   
     
     return data;
});