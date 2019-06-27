import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export class BlockingComponent extends React.Component<{readyToLoad: boolean}> {
    render() {
        if (this.props.readyToLoad) {
            return this.props.children;
        } else {
            return (<LoadingSpinner />);
        }
    }
}