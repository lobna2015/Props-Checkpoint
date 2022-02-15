import logo from './logo.svg';
import './App.css';
import Student from './Components/Student'

function App() {

let StudentAge = ["27", "31"] 
let StudentArray = ["lobna", "sami"]



const getData = (data)=>{
  console.log("data::::::::",data)
  alert(data)
}


  return (
    <div className="App">
     
     <Student getData={getData} StudentAge={StudentAge} StudentArray={StudentArray}><div> <br/><br/><br/> <h1>LIST OF FILM</h1> <img src="https://fr.web.img4.acsta.net/pictures/20/08/19/15/28/4281186.jpg" width="200px" height="350px"></img> <img src="https://fr.web.img4.acsta.net/pictures/19/11/11/21/24/0201907.jpg" width="200px" height="350px"></img><img src="https://senegal.dayfr.com/content/uploads/2022/02/15/13a7bb8167.jpg" width="200px" height="350px"></img></div></Student>

    </div>
  );
}

export default App;
