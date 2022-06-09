import { format  } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter,
        // disableFilters: true
        sticky: 'left',
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter,
        sticky: 'left',
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        Filter: ColumnFilter

    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date of birth',
        Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
        Filter: ColumnFilter

    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Email',
                Footer: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Gender',
                Footer: 'Gender',
                accessor: 'gender'
           },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Date of Birth',
                accessor: 'date of birth'
            }
        ]
    },
]