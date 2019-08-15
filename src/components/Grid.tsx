import * as React from "react"
import ReactTable from 'react-table';

interface GridProps {
    columns: any[],
    data?: any,
    defaultPageSize?: number,
    defaultSorted?: any[],
    filterable?: boolean
    manual?: boolean
    pages?: any,
    rowClick?: any,
    pageSizeOptions?: number[]
}

const Grid:React.SFC<GridProps> = props => {
    return <ReactTable
        className="r-grid -striped -highlight"
        columns={props.columns}
        data={props.data}
        defaultPageSize={props.defaultPageSize}
        minRows={1}
        pageSizeOptions={props.pageSizeOptions}
        defaultSorted={props.defaultSorted}
        filterable={props.filterable}
        manual={props.manual}
        getTrProps={props.rowClick}
        pages={props.pages}/>
}

Grid.defaultProps = {
    defaultPageSize: 20,
    filterable: true,
    manual: false,
    pageSizeOptions: [10, 15, 20, 25, 50, 100]
}

export { Grid };