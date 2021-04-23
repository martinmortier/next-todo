import React from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import Checkbox from '@material-ui/core/Checkbox';


const PostGrid = ({listPost}) => {
    const columns = []
    const rows = []
    const listsField = Object.keys(listPost[0])

    const exchangeElem = () => {
        let temp = listsField[2]
        listsField[2] = listsField[3]
        listsField[3] = temp
    }
    exchangeElem()

    listsField.map( lf => {
        columns.push({field: lf, headerName: lf.charAt(0).toUpperCase() + lf.slice(1), width:150})
    })
    listPost.map(lp => {
        rows.push({ id: lp.id, name: lp.name, done: <Checkbox defaultChecked />, author: lp.author})
    })
    
    return (
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid columns={columns} rows={rows}
                components={{
                    Toolbar: GridToolbar,
                }}
                checkboxSelection
            />
        </div>
    )
}

export default PostGrid
