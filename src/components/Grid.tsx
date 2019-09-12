import * as React from "react"
import ReactTable from 'react-table';

class Grid extends React.Component<GridProps, State> {

    constructor(props: GridProps) {
        super(props);
        this.state = {
            loading: false,
            data: this.props.data,
            pages: 0
        }
    }
    
    onFetchData = async (state: any, instance: any) => {
        this.setState({
            loading: true
        });

        let users = await this.props.onFetchData(state.page, state.pageSize, state.sorted, state.filtered);
        console.log(this.props.pages);
        this.setState({
            data: users,
            pages: this.props.pages,
            loading: false
        });
    }
    render() {
        const { data } = this.state;
        return <ReactTable
            className="r-grid -striped -highlight"
            columns={this.props.columns}
            data={data}
            defaultPageSize={this.props.defaultPageSize}
            minRows={1}
            pageSizeOptions={this.props.pageSizeOptions}
            defaultSorted={this.props.defaultSorted}
            filterable={this.props.filterable}
            manual={this.props.manual}
            getTrProps={this.props.rowClick}
            pages={this.state.pages}
            onFetchData={this.onFetchData}
            loading={this.state.loading}/>
    }
}

interface GridProps {
    columns: any[],
    data?: any,
    defaultPageSize?: number,
    defaultSorted?: any[],
    filterable?: boolean
    manual?: boolean
    pages?: number,
    rowClick?: any,
    pageSizeOptions?: number[]
    onFetchData?(page: number, pageSize: number, sorted: any, filtered: any): State;
}

interface State {
    loading: boolean,
    data: any,
    pages: number
}

// const Grid:React.SFC<GridProps> = props => {
//     let state = {
//         loading: false,
//         data: props.data,
//         pages: 0
//     };

//     function onFetchData(state: any, instance: any) {
//         props.onFetchData(state)
//     }

//     return <ReactTable
//         className="r-grid -striped -highlight"
//         columns={props.columns}
//         data={props.data}
//         defaultPageSize={props.defaultPageSize}
//         minRows={1}
//         pageSizeOptions={props.pageSizeOptions}
//         defaultSorted={props.defaultSorted}
//         filterable={props.filterable}
//         manual={props.manual}
//         getTrProps={props.rowClick}
//         pages={props.pages}
//         onFetchData={onFetchData}
//         loading={state.loading}/>
// }

// Grid.defaultProps = {
//     defaultPageSize: 20,
//     filterable: true,
//     manual: false,
//     pageSizeOptions: [10, 15, 20, 25, 50, 100]
// }

// Grid.State = {
    
// }

export { Grid };