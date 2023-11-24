# Javascript Recruitment Task

I was told to perfrom a mini-project which had to deal with visualising stocks with some provided back-end information.

I was able to perfrom the tasks which were requiered to perform:

## Mission objectives

* I was able to make the spinner rotate using CSS3.
* I was able to query the backend for list of available stocks.
* I was able to query the backend for data about each stock.
* I made sure to hide the spinner after all data is loaded.
* I logged the informations result stock data in a structured way.
* I was also able to fix backend (app.js) to return a meaningful error message and stop the website from hanging when the back end was not able to fetch the stock data.

## Additional Things which I perfromed
* I was also able to provide an appropriate visualisation (line chart) withe the use of **Chart.js**.
* I created different buttons with animations to make it look presenatable

## Detailed explanation

- I started off making sure that the spinner which was given at the beginning template of the code was animated to rotate <br />
**GIF**: <br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/loading.gif)
<br />
**CSS**:
  
```
.spinner{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.75s, visibility 0.75s;
  
}

.spinner-hidden{
  opacity: 0;
  visibility: hidden;
}

.spinner::after {
  content: '◌';
  display: flex;
  justify-content: center;
  font-size: 300px;
  color: crimson;
  animation: load 2s ease infinite;
}

@keyframes load {
  0%{ transform: rotate(0deg); color: transparent;}
  50%{ transform: rotate(180deg); color: red;}
  100%{ transform: rotate(3060deg); color: crimson;}
}
```
- Then I started to work on querying the back end to fetch the list of available stocks. in this section I began by writing an inline script in the HTML file which gets information from the **stocks.js** code which was provided. The piece of code which I wrote below helped in making sure that the information was selected from the backend then displayed into an input tag (it will only be activated if the **GET** button is pressed): <br />
**GIF:** <br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/fetchstocklist.gif)
<br />


```
async function getInfo(e){
    showSpin()
    e.preventDefault()
    const res  =  await fetch(baseurl + 'stocks',
    {
        method : 'GET'
    }) 
    console.log(res)
    const data = await res.json()
    stockInput.value = data.stockSymbols.join(', ');
    setTimeout(hideSpin,250)
}       
```
- After quering the back-end previously, I was able to alter the previous method to query the backend for data about each stock (as long as a stock button is pressed)information of the current backend would be fetched:<br />
**GIF:** <br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/fetchallstocks.gif)
<br />

```
async function msftInfo(e){
    e.preventDefault()
    await getStocks('MSFT')
}
async function aaplInfo(e){
    e.preventDefault()
    await getStocks('AAPL')
}
async function fbInfo(e){
    e.preventDefault()
    await getStocks('FB')
}
async function eaInfo(e){
    e.preventDefault()
    await getStocks('EA')
}
async function ibmInfo(e){
    e.preventDefault()
    await getStocks('IBM')
}
async function getStocks(symbol){
    showSpin()
    const res  =  await fetch(`${baseurl}stocks/${symbol}`,
    {
        method : 'GET'
    })
    setTimeout(hideSpin,250)
    console.log(res);
    const data = await res.json()
    const formattedData = data.map(entry => `${entry.value} (${new Date(entry.timestamp)})`)
    dataInput.value = formattedData.join(', ');

    const timestamps = data.map(entry => entry.timestamp);
    const values = data.map(entry => entry.value);
    draw(timestamps,values)

    console.log(timestamps)
    console.log(values)
}
```
- In order to hide the spinner after it loads, a CSS piece was made to hide the content. In addition, some methods are made in order to show and hide the spinner at appropriate times:<br />
**GIF:** <br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/lodingfinished.gif)
<br />

```
const loading = document.querySelector(".spinner");
function showSpin(){
    loading.classList.remove("spinner-hidden");
}
function hideSpin(){
    loading.classList.add("spinner-hidden");
}
```
- Log to the console the result stock data in a structured way. Everytime a button is pressed the information is sent into the terminal to output the values and timestamps in the terminal.<br />
**GIF:**<br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/terminaloutput.gif)
<br />

- I was also able to fix backend (app.js) to return a meaningful error message and stop the website from hanging when the back end was not able to fetch the stock data.

- I was also able to provide an appropriate visualisation (line chart) withe the use of **Chart.js**.<br />
**Chart**:<br />
![](https://github.com/SamsonOlajide/lilly-test/blob/main/assets/showgraph.gif)
<br />

## Things I could have done better
Although I was able to perfrom majority of the objectives requiered, i believe that if i had more time, I wouldve been able to make sure that things where properly laid out.
## Conclusion
Overall, this was a good side-project as i was able to test my skills in  web development, i still need to have more practice to iron out my javascript skills as i had to perform some internet research to get some sections completed.
