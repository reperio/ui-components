import * as React from "react"
import ReactTable from 'react-table';
import * as _ from 'lodash';

class Grid extends React.Component<GridProps, State> {
    bounced: any;
    constructor(props: GridProps) {
        super(props);
        this.state = {
            loading: false,
            pageSize: 1
        }

        this.bounced = _.debounce(this.onFetchData, 300).bind(this);
    }

    onFetchData = async (state: any, instance: any) => {
        this.setState({
            loading: true
        });

        await this.props.onFetchData(state.page, state.pageSize, state.sorted, state.filtered);

        this.setState({loading: false});
    }

    render() {
        return <ReactTable
            className="r-grid -striped -highlight"
            columns={this.props.columns}
            data={this.props.data}
            defaultPageSize={this.props.defaultPageSize}
            minRows={this.state.pageSize}
            pageSizeOptions={this.props.pageSizeOptions}
            defaultSorted={this.props.defaultSorted}
            filterable={this.props.filterable}
            manual={this.props.manual}
            getTrProps={this.props.rowClick}
            pages={this.props.pages}
            onFetchData={this.bounced}
            loading={this.state.loading || this.props.loading}
            />
    }
}

interface GridProps {
    columns: any[],
    data: any,
    defaultPageSize?: number,
    defaultSorted?: any[],
    filterable?: boolean
    manual?: boolean
    pages: number,
    rowClick?: any,
    pageSizeOptions?: number[]
    onFetchData?(page: number, pageSize: number, sorted: any, filtered: any): Promise<State>;
    loading?: boolean;
}

interface State {
    loading: boolean,
    pageSize: number
}

export { Grid };