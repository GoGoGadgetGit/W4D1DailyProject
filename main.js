function showData(){
  console.log(this.responseText)
  let clearWords = JSON.parse(this.responseText)
  console.log(clearWords)
  let basics = ` <p> Name: ${clearWords.name}</p>
  <p> Github URL: ${clearWords.url}</p>
  <p> Email: ${clearWords.email}</p>
  <p> Company: ${clearWords.company}</p>
  <p> Website: ${clearWords.html_url}</p>`
  let leftSide = document.querySelector(".basics")
  leftSide.innerHTML = leftSide.innerHTML + basics
  let stories = `<p> ${clearWords.bio}</p>
  <img src=${clearWords.avatar_url}>`
  let rightSide = document.querySelector(".story")
  rightSide.innerHTML = rightSide.innerHTML + stories
  let heading = `<h1> ${clearWords.name}</h1>`
  let topSide = document.querySelector(".header")
  topSide.innerHTML = topSide.innerHTML + heading
}




let req = new XMLHttpRequest();
req.open("get", "http://192.168.1.12:8000/octocat")
req.addEventListener("load",showData)
req.send()
