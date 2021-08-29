import React, { Component } from 'react';

function WithLogging(Comp) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.displayName = `WithLogging(${Comp.displayName || 'Component'})`;
        }

        componentDidMount() {
            console.log(`Component ${Comp.displayName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${Comp.displayName} is going to unmount`);
        }

        render() {
            return <Comp {...this.props} />
        }
    }
}

export default WithLogging;
