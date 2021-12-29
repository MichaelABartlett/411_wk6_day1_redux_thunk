import React from 'react'
import { Button } from "@material-ui/core"
import { CustomTable } from './Table'

const Import = (props) => {
    // console.log('props in import comp: ', props)
    // fill out this component

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => props.fetchMakes()}>
                Import
            </Button>
            {/* below I am proving that props.deleteMake function is getting here */}
            {/* <Button  variant="contained" color="primary" onClick={() => console.log(props.deleteMake)}>
                {`using button to check different props: ${props.makes.length}`}
            </Button> */}
            <h2>Count: {props.makes.length}</h2>
            <CustomTable makes={props.makes} deleteMake={props.deleteMake}/>
        </div>

    )
}

export default Import