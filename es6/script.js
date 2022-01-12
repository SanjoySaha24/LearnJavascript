const promiseObject = fetch('/data.json')

promiseObject.then(response =>{
   
  const pro =  response.json()
  pro.then(data =>{
     console.log(data)
  })
})



















