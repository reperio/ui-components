import React from 'react';

interface PanelProps {
    cancel(): void;
    onClick(): void;
    submit(): void;
    active: boolean;
    children: JSX.Element;
    permissionToEdit?: boolean;
}

const EditablePanelOverlay = () => <div className="r-editable-panel-overlay"></div>

const EditablePanel: React.SFC<PanelProps> = props => (
    <fieldset disabled={!props.active} className={`${props.active ? 'r-wrapper-editable-panel-open' : props.permissionToEdit ? 'r-wrapper-editable-panel' : 'r-wrapper-editable-panel-disabled'} row`} 
        style={props.active ? {zIndex: 10} : {}}
        onClick={props.permissionToEdit ? props.onClick : null}>
            {props.active ?                                     
                <div className="r-editable-panel-controls">
                    <i className="r-editable-panel-control-item fa fa-ban fa-lg" onClick={() => props.cancel()}></i>
                    <i className="r-editable-panel-control-item fa fa-check fa-lg" onClick={() => props.submit()}></i>
                </div> 
            : null }
            {!props.active && props.permissionToEdit ? 
                <div className="r-editable-panel-controls">
                    <i className="r-editable-panel-control-item fa fa-pencil fa-lg"></i>
                </div>
            : null}
            {props.children}
    </fieldset>
)

export { EditablePanel, EditablePanelOverlay };