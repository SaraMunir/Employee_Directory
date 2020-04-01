import React,{useState , useEffect} from 'react';
import Jumbotron from './components/Jumbotron';
import EmployeeResultList from './components/EmployeeResultList.js';
import EmployeeSearchForm from './components/EmployeeSearchForm.js'
import Moment from 'react-moment';
function App() {

  const aboutStyle= {
    height: '50vh',
    color: 'white',
    backgroundImage: 'linear-gradient(45deg,  #6d2ab922  ,#0026ff22 ), linear-gradient( #00000055,  #00000055), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);',
    backgroundSize: 'cover',
    backgroundPostition: 'center' 
}

  const [ searchInput, setSearchInput] = useState("");
  const [ showList, setShowList] = useState([]);
  const [ employeeList, setEmployeeList] = useState([]);
  const [ employeeInfo, setEmployeeInfo] = useState({});

  console.log(`fetching dog list`);
  function handleInputChange(e){
    const newInput = e.target.value;
    setSearchInput(newInput);
    // adjusting our employee list
    // console.log('employeeList: ', employeeList)
    // const newList = employeeList.filter( employee=>employee.indexOf(newInput)==0 )
    // setShowList( newList);
    // console.log(showList);
    if( newInput.length >0){
        const newList = employeeList.filter(employee=> employee.user.name.first.indexOf(newInput)==0)
        setShowList( newList);
    } else {
        setShowList(employeeList );
    }
}

  async function loadBreedList(){
    console.log(`***loading employeelist `);

      const employeeListResult = await fetch('https://randomuser.me/api/0.8/?results=25').then(result=>result.json());     
      setEmployeeList( employeeListResult.results );
      setShowList( employeeListResult.results );

      // employeeList.forEach(employee=>{
      //     // moment(employee.user.dob).format('LL');
      //     // const dateOfB =moment(employee.user.dob).format('LL');
  
      //     const dateOfB = new Date(employee.user.dob) ;
      //     const empAddress = employee.user.location.street + ", " + employee.user.location.city  + ", " + employee.user.location.state  + ", " + employee.user.location.zip
  
      //     const employeeObj = {
      //       name: employee.user.name.first + " " + employee.user.name.last,
      //       gender: employee.user.gender,
      //       email:  employee.user.email,
      //       dob: dateOfB, 
      //       phone:  employee.user.phone,
      //       cell:  employee.user.cell,
      //       address: empAddress,
      //       img: employee.user.picture.large
      //     }
      //     setEmployeeInfo( employeeObj )
  
      //     console.log(employee.user.name.first)
      //     console.log(employeeObj.name)

      // })
      // setShowList( employeeListResult.message )
      console.log(`*** saved dog List`);
      // setShowList( newList);
  }

  function sortListByFirstName(){
    employeeList.sort((a, b) => (a.user.name.first > b.user.name.first) ? 1 : -1)
    console.log('is the sorting working: newSortList ', employeeList)
    setShowList([...employeeList])
  };
  function sortListByDob(){
    employeeList.sort((a, b) => (a.user.dob > b.user.dob) ? 1 : -1)
    console.log('is the sorting working: newSortList ', employeeList)
    setShowList([...employeeList])
  };
  function sortListByLastName(){
    employeeList.sort((a, b) => (a.user.name.last > b.user.name.last) ? 1 : -1)
    console.log('is the sorting working: newSortList ', employeeList)
    setShowList([...employeeList])
  };

  function viewInfo(registeredId){

    employeeList.forEach(employee=>{
      if (employee.user.registered == registeredId){
        // moment(employee.user.dob).format('LL');
        // const dateOfB =moment(employee.user.dob).format('LL');

        const dateOfB = new Date(employee.user.dob) ;
        const empAddress = employee.user.location.street + ", " + employee.user.location.city  + ", " + employee.user.location.state  + ", " + employee.user.location.zip

        const employeeObj = {
          name: employee.user.name.first + " " + employee.user.name.last,
          gender: employee.user.gender,
          email:  employee.user.email,
          dob: dateOfB, 
          phone:  employee.user.phone,
          cell:  employee.user.cell,
          address: empAddress,
          img: employee.user.picture.large
        }
        setEmployeeInfo( employeeObj )

        console.log(employee.user.name.first)
        console.log(employeeObj.name)
      }
    })
  }


  console.log('employeeList: ', employeeList)
  useEffect( function(){
      loadBreedList()  
  }, []);

  const myObject ={
    handleInputChange: handleInputChange,
    searchInput: searchInput,
    employeeList: employeeList,
    setEmployeeList: setEmployeeList, 
    showList: showList,
    setShowList: setShowList, 
  }

  const myShowResult ={
    sortListByFirstName: sortListByFirstName,
    sortListByDob: sortListByDob,
    sortListByLastName: sortListByLastName,
    viewInfo: viewInfo, 
    employeeInfo: employeeInfo
  }


  return (
    <div>
      <div class="jumbotron jumbotron-fluid" style={aboutStyle}>
          <div class="container text-center">
              <h1 class="display-4">Meet Our Team</h1>
              <p class="lead">They're the Good Boys and Girls</p>
              <EmployeeSearchForm {...myObject}/>
          </div>
      </div>
      <div class="album py-5 bg-light">
        <EmployeeResultList showList={showList} {...myShowResult}/>
      </div>
    </div>
      // const [ showList, setShowList] = useState([]);

  );
}

export default App;