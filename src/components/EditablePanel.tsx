import React from 'react';
import ReactDOM from 'react-dom';

interface PanelProps {
    cancel(): void;
    onClick(): void;
    submit(): void;
    active: boolean;
    children: JSX.Element;
    permissionToEdit?: boolean;
}

const EditablePanelOverlay = () => <div className="r-editable-panel-overlay"></div>

class EditablePanel extends React.Component<PanelProps> {

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false);
    }

    handleClick = (e: any) => {
        const node = ReactDOM.findDOMNode(this);
        const target: HTMLElement = e.target;
        if (node.contains(target) && !this.props.active) {
            this.props.onClick();
        }
        else if (!node.contains(target) && this.props.active && target.className == 'r-editable-panel-overlay') {
            this.props.cancel();
        }
    }

    render() {
        return (
            <fieldset disabled={!this.props.active} className={`${this.props.active ? 'r-wrapper-editable-panel-open' : this.props.permissionToEdit ? 'r-wrapper-editable-panel' : 'r-wrapper-editable-panel-disabled'} row`} 
                style={this.props.active ? {zIndex: 10} : {}}
                onClick={(e)=> this.props.permissionToEdit ? this.handleClick(e) : null}>
                    {this.props.active ?                                     
                        <div className="r-editable-panel-controls">
                            <i className="r-editable-panel-control-item fa fa-ban fa-lg" onClick={() => this.props.cancel()}></i>
                            <i className="r-editable-panel-control-item fa fa-check fa-lg" onClick={() => this.props.submit()}></i>
                        </div> 
                    : null }
                    {!this.props.active && this.props.permissionToEdit ? 
                        <div className="r-editable-panel-controls">
                            <i className="r-editable-panel-control-item fa fa-pencil fa-lg"></i>
                        </div>
                    : null}
                    {this.props.children}
            </fieldset>
        )
    }
}

export { EditablePanel, EditablePanelOverlay };