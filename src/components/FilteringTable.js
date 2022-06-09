import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'


const FilteringTable = () => {
    const [first, setfirst] = useState("second")
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])
   console.log(first);
    const tableInstance = useTable({
        columns,
        data,
    },
    useFilters, 
    useGlobalFilter
    )

      const {
          getTableProps, 
          getTableBodyProps, 
          headerGroups,
          footerGroups, 
          rows, 
          prepareRow,
          state,
          setGlobalFilter,
         } = tableInstance

         const { globalFilter } = state

  return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
       <thead>
           {
               headerGroups.map((headerGroup,i) => (      
        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column,i) => (
               <th {...column.getHeaderProps()} key={i}>{column.render('Header')}
               <div>{column.canFilter ? column.render('Filter') : null}</div>
               </th>
            ))}
        </tr>
            ))}
       </thead>
       <tbody {...getTableBodyProps()}>
           {rows?.map((row,i) => {
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
       <tfoot>
           {
               footerGroups.map((footerGroup,i) => (
                   <tr {...footerGroup.getFooterGroupProps} key={i}>
                       {
                           footerGroup.headers.map((column,i) => (
                               <td {...column.getFooterProps} key={i}>
                                   {
                                       column.render('Footer')
                                   }

                               </td>
                           ))
                       }

                   </tr>
               ))
           }
       </tfoot>
    </table>
    </>
  )     
}

export default FilteringTable;