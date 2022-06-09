import React from "react";
import Registration from "./components/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from "react-calendar";
import Pagination from "./components/Pagination";
import RowSelection from "./components/RowSelection";

// import { FilteringTable } from "./component/FilteringTable";


function App() {
  return (
    <>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Registration />
             {/* <FilteringTable /> */}
             {/* <Pagination /> */}
             {/* <RowSelection />  */}
          </div>
        </div>
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <LifeCycle />
//     </div>
//   );
// }

export default App;


















// import React, { useEffect, useRef, useState } from 'react';
// import './App.css';
// // import StickyTable from './components/StickyTable';
// // import ColumnHiding from './components/ColumnHiding';
// // import ColumnOrder from './components/ColumnOrder';
// // import FilteringTable from './components/FilteringTable';
// // import  BasicTable  from './components/BasicTable';
// // import SortingTable from './components/SortingTable';
// import PaginationTable from './components/PaginationTable'
// // import RowSelection from './components/RowSelection';

// function App() {
//   const [data, setData, serverData, columns] = React.useState([])
//   const [loading, setLoading] = useState(false)
//   const [pageCount, setPageCount] = useState(0)
//   const fetchIdRef = useRef(0)

//   const fetchData = React.useCallback(({ pageSize, pageIndex }) => {

//     // Give this fetch an ID
//     const fetchId = ++fetchIdRef.current

//     // Set the loading state
//     setLoading(true)

//     // We'll even set a delay to simulate a server here
//     setTimeout(() => {
//       // Only update the data if this is the latest fetch
//       if (fetchId === fetchIdRef.current) {
//         const startRow = pageSize * pageIndex
//         const endRow = startRow + pageSize
//         setData(serverData.slice(startRow, endRow))

//         setPageCount(Math.ceil(serverData.length / pageSize))

//         setLoading(false)
//       }
//     }, 1000)
//   }, [])

//   return (
//   <div>      
//         columns={columns}
//         data={data}
//         fetchData={fetchData}
//         loading={loading}
//         pageCount={pageCount}
//     {/* <BasicTable /> */}
//     {/* <SortingTable /> */}
//     {/* <FilteringTable /> */}
//     <PaginationTable />
//     {/* <RowSelection /> */}
//     {/* <ColumnOrder /> */}
//     {/* <ColumnHiding /> */}
//     {/* <StickyTable /> */}
//   </div>
//   )  
  
// }

// export default App
