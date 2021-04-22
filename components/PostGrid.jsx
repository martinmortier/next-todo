import React from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

const PostGrid = ({listPost}) => {
    const columns = []
    const listsField = Object.keys(listPost[0])
    listsField.map( lf => {
        columns.push({field: lf, headerName: lf.charAt(0).toUpperCase() + lf.slice(1), width:150})
    })

      const rows = [
        { id: 1, name: 'Snow', author: 'Jon' },
        { id: 2, name: 'Lannister', author: 'Cersei' },
        { id: 3, name: 'Lannister', author: 'Jaime' },
        { id: 4, name: 'Stark', author: 'Arya' },
        { id: 5, name: 'Targaryen', author: 'Daenerys' },
        { id: 6, name: 'Melisandre', author: null },
        { id: 7, name: 'Clifford', author: 'Ferrara' },
        { id: 8, name: 'Frances', author: 'Rossini' },
        { id: 9, name: 'Roxie', author: 'Harvey' },
      ];
    return (
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid columns={columns} rows={rows}
  components={{
    Toolbar: GridToolbar,
  }}checkboxSelection/>
        </div>
    )
}

export default PostGrid
