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
            <Button  variant="contained" color="primary" onClick={() => console.log(props.makes)}>
                Making props.makes in Import components easy to see
            </Button>
            <CustomTable makes={props.makes}/>
        </div>

    )
}

export default Import