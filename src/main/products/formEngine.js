import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class FormEngine extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="https://forms.ixn.tech/js/forms_engine.widget.js" />);
    }
}

export default FormEngine