import React, { useMemo, useState } from 'react'
import { useTable, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './table.css'
import { Checkbox } from './Checkbox'


const RowSelection = () => {
    const [first, setfirst] = useState("second")
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
    }, 
    useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps}) => (
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                ),
                Cell: ({ row }) =>  <Checkbox {...row.getToggleRowSelectedProps()} />,
                
                },
                ...columns
            ]
        })
    }
    )

      const {
          getTableProps, 
          getTableBodyProps, 
          headerGroups,
          footerGroups, 
          rows, 
          prepareRow,
          selectedFlatRows
         } = tableInstance
           
         const firstPageRows = rows.slice(0,10)
  return (
      <>
    <table {...getTableProps()}>
       <thead>
           {
               headerGroups.map((headerGroup,i) => (      
        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column,i) => (
               <th {...column.getHeaderProps()} key={i}>{column.render('Header')}</th>
            ))}
        </tr>
            ))}
       </thead>
       <tbody {...getTableBodyProps()}>
           {firstPageRows.map((row,i) => {
               prepareRow(row)
               return(
                <tr {...row.getRowProps()} key={i}>
                    {row.cells.map((cell,i) => {
                        return <td {...cell.getCellProps()} key={i}>{cell.render('Cell')}</td>;
                    })}
              
            </tr>
               )
           })}
          
       </tbody> 
       
    </table>
    <pre>
               <code>
                   {JSON.stringify(
                       {
                           selectedFlatRows: selectedFlatRows.map((row) => row.original),
                       },
                       null,
                       2
                   )}
               </code>
           </pre>
    </>
  )     
}

export default RowSelection;