let defaultData = 1;

try {
  if(localStorage.defaultData){
    defaultData = parseInt(localStorage.defaultData);
  }
} catch (e) {
  console.log(e);
}

export default {
  defaultData
}