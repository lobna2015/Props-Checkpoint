import React from 'react'

import PropTypes from 'prop-types'

const Student = ({StudentAge, getData, StudentArray, StudentObject, children}) => {




let input = ''
const handleInput = (e) =>{ input = e.target.value }

  return (
    <div>
 

      
 <div> {children} <h1>Search your favorite Film</h1> </div>
 

 <input type="text" placeholder="Enter name of film" onChange={handleInput} />
        <button onClick={()=>getData(input)}>Search</button>


        <h1>{StudentArray.map(student =><h6>I am {student}, I learn in ENISO</h6>)}</h1>

        <p>{StudentAge.map(age =><h3>My age is {age}, I am Happy to learn in ENISO</h3>)}</p>

        <p>I am {StudentObject.fname}, {StudentObject.lname},{StudentObject.age} I learn in ENISO</p>


        
        


    </div>
  )
}
Student.propTypes = {
    StudentAge: PropTypes.array,
    StudentArray: PropTypes.array
    
}

Student.defaultProps = {
  StudentObject: {fname:"lobna", lname:"drissi", age:27}
}
export default Student