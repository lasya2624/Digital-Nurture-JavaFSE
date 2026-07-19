import PropTypes from 'prop-types'

function Student(props){
    return(
        <div>
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student :{props.IsStudent? "yes":"no"}</p>
        </div>
    );
}
Student.proptypes={
    name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool,
}
// Student.defaultProps={
//     name:"Guest",
//     age:0,
//     IsStudent:true
// }

Student.defaultProps = {
    name:"Guest",
    age:0,
    IsStudent:false,
}

export default Student
