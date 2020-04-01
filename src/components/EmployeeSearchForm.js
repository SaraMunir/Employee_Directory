import React, {useEffect, useState}  from 'react'

function EmployeeSearchForm(props) {
    console.log('lets see what props does', props)
    const myInput={
        borderTopLeftRadius: '20px',
        borderRadius: '20px',
        borderBottomLeftRadius: '20px'
    }
    const myBtnRgt={
        width: '100px',
        backgroundColor: '#ed145b',
        borderRadius: '20px',
        marginLeft: '20px'
    }   
    const myForm={
        width: '70%',
        margin: '0 auto'
    }
    const fontClr={
        color: 'black',
        // margin: '0 auto'
    }
    return (
        <div>
            <div class="input-group mb-3 text-center" style={myForm}>
                <input onChange={props.handleInputChange} value={props.searchInput} type="text" class="form-control text-center" style={myInput} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                
            </div>
            <div class="mb-3">
            </div>
        </div>
    )
}
export default EmployeeSearchForm