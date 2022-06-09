import React, { useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './table.css'



const Pagination = () => {
    const [first, setfirst] = useState("second")
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])
     console.log(MOCK_DATA);
    const tableInstance = useTable({
        columns,
        data,
        
        // initialState: { pageIndex : 2}
    },
    usePagination
    )
   
   
     const {
          getTableProps, 
          getTableBodyProps, 
          headerGroups,
          page, 
          nextPage,
          previousPage,
          canNextPage,
          canPreviousPage,
          pageOptions,
          gotoPage,
          pageCount,
          setPageSize,
          state,
          prepareRow,
         } = tableInstance
    
         const { pageIndex, pageSize } = state
      
         
         
      
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
           {page.map((row,i) => {
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
    <div>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong> {' '}
        </span>

        <span>
            | Go to Page:{' '}
            <input type='number' 
            defaultValue={pageIndex + 1}
            onChange={(e) => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }}
            style={{ width: '50px' }} />
        </span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}> 
         {
             [10,20,30,40,50].map(pageSize => (
            <option  key={pageSize} value={pageSize}>
                show {pageSize} 
                  </option>
             ))
         }
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </>
  )     
}

export default Pagination;