import * as React from "react"
import ReactTable from 'react-table';
import * as _ from 'lodash';

class Grid extends React.Component<GridProps, State> {
    bounced: any;
    constructor(props: GridProps) {
        super(props);
        this.state = {
            loading: false,
            data: this.props.data,
            pages: 0,
            pageSize: 1
        }

        this.bounced = _.debounce(this.onFetchData, 300).bind(this);
    }

    onFetchData = async (state: any, instance: any) => {
        this.setState({
            loading: true
        });

        const data = await this.props.onFetchData(state.page, state.pageSize, state.sorted, state.filtered);

        this.setState({
            data,
            pages: this.props.pages,
            loading: false,
            pageSize: state.pageSize
        });
    }

    render() {
        const { data } = this.state;
        return <ReactTable
            className="r-grid -striped -highlight"
            columns={this.props.columns}
            data={data}
            defaultPageSize={this.props.defaultPageSize}
            minRows={this.state.pageSize}
            pageSizeOptions={this.props.pageSizeOptions}
            defaultSorted={this.props.defaultSorted}
            filterable={this.props.filterable}
            manual={this.props.manual}
            getTrProps={this.props.rowClick}
            pages={this.state.pages}
            onFetchData={this.bounced}
            loading={this.state.loading}
            />
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
    onFetchData?(page: number, pageSize: number, sorted: any, filtered: any): Promise<State>;
}

interface State {
    loading: boolean,
    data: any,
    pages: number,
    pageSize: number
}

export { Grid };