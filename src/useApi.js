async function getData (url){
  let data = [];
   await fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.push(...json)
    })
    // console.log(data,"data in api")
  return data;
}

export default getData;
