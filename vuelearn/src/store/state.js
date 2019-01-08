let defaultData = "default";

try {
  if(localStorage.defaultData){
    localStorage = localStorage.defaultData;
  }
} catch (e) {
  console.log(e);
}

export default {
  defaultData
}