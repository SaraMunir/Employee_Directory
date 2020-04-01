import React from 'react';
import Moment from 'react-moment';

function EmployeeResultList(props) {
    const roundImg={
        height: '30vh',
        width: '30vh',
        borderRadius: '50%',
        margin: '0 auto'
    }
    const myBtnRgt={
        marginTop: "20px",
        height: '40px',
        width: '150px',
        border: 'none',
        backgroundColor: '#ed145b',
        borderRadius: '20px',
    }
    const myBtnRgt2={
        color: "white",
        marginTop: "20px",
        height: '40px',
        margin: '10px ',
        border: 'none',
        backgroundColor: '#ed145b',
        borderRadius: '20px',
    }
    const fullCard={
        width: '100%',
        height: '90vh'
    }
    const thmImg={
        // width: '80%',
        height: '100%',
        objectFit: 'cover'
    }
    const list={
        border: '.5px solid #e6e6e6',
        margin: '10px 0',
        backgroundColor: 'white',
        width: "100%",
        // height: '80px',
        borderRadius: '5px'
    }
    const empName={
        fontSize: "1.2rem",
        textAlign: "center",
        paddingTop: "20px",
        // width: "55%",
        height: '80px'        
    }
    const empThmImg={
        // width: "20%",
        height: '80px'        
    }
    return (
        <div>
            <div class="row container mx-auto justify-content-center">
                <button type="button" style={myBtnRgt2} class="btn" onClick={()=>props.sortListByFirstName()}>Sort By First Name</button>
                <button type="button" style={myBtnRgt2} class="btn" onClick={()=>props.sortListByLastName()}>Sort By Last Name</button>
                <button type="button" style={myBtnRgt2} class="btn" onClick={()=>props.sortListByDob()}>Sort By Date of Birth</button>
            </div>
            <div class="row container mx-auto">
                <div class="col-md-7 mx-auto">
                    {props.showList.map(breed=>
                        <div class="row" style={list}>
                            <div class="col-md-2" style={empThmImg}>
                                <img class="card-img-top" style={thmImg} src={`${breed.user.picture.medium}`} alt="Card image cap"/>
                            </div>
                            <div class="col-md-6" style={empName}>{breed.user.name.first} {breed.user.name.last}</div>
                            <div s>
                            <div class="col-md-4" style={myBtnRgt} class="btn btn-primary" onClick={()=>props.viewInfo(breed.user.registered)}>View Detail</div>
                            </div>
                        </div>
                    )}
                </div>
                <div class="row col-md-5  mx-auto">
                    <div class="card mb-4 box-shadow" style={fullCard}>
                    <img class="card-img-top mt-4" style={roundImg} src={`${props.employeeInfo.img}`} alt="Card image cap"/>
                    <div class="card-body mx-auto" >
                        <ul class="list-group">
                            <li class="list-group-item"><i class="fa fa-user" aria-hidden="true"></i>   {props.employeeInfo.name}</li>
                            <li class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i>   {props.employeeInfo.email}</li>
                            <li class="list-group-item"><i class="fa fa-phone" aria-hidden="true"></i>   {props.employeeInfo.phone}</li>
                            <li class="list-group-item"><i class="fa fa-mobile" aria-hidden="true"></i>   {props.employeeInfo.cell}</li>
                            <li class="list-group-item">Date Of Birth:  <Moment>{props.employeeInfo.dob}</Moment> </li>
                        </ul>                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EmployeeResultList