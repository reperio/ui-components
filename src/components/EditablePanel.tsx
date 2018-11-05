import React from 'react';

interface PanelProps {
    active: boolean;
    onClick(): void;
    submit(): void;
    cancel(): void;
    children: JSX.Element;
}

const EditablePanelOverlay = () => <div className="r-editable-panel-overlay"></div>

const EditablePanel: React.SFC<PanelProps> = props => (
    <div className={`${props.active ? 'r-wrapper-editable-panel-open' : 'r-wrapper-editable-panel'} row`} 
        style={props.active ? {zIndex: 10} : {}}
        onClick={props.onClick}>
            {props.active ?                                     
                <div className="r-editable-panel-controls">
                    <i className="r-editable-panel-control-item fa fa-ban fa-lg" onClick={() => props.cancel()}></i>
                    <i className="r-editable-panel-control-item fa fa-check fa-lg" onClick={() => props.submit()}></i>
                </div> 
            : 
                <div className="r-editable-panel-controls">
                    <i className="r-editable-panel-control-item fa fa-pencil fa-lg"></i>
                </div> }
            {props.children}
    </div>
)

export { EditablePanel, EditablePanelOverlay };