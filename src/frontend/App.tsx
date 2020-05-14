import * as React from 'react';
import { render } from 'react-dom';

interface AppProps {
    name: string;
}

export class App extends React.Component<AppProps> {
    render() {
        const {name} = this.props;
        return <h1>{name}</h1>;
    }
}

export function start() {
    const rootElem = document.getElementById('main');
    render(<App name="Hello World" />, rootElem);
}
