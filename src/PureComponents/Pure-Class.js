import React from "react";

class PureClass extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: "PureComponenets",
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: "red",color:"white" }}>
                Pure Component
            </div>
        )
    }
}

export default PureClass;