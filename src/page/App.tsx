import * as React from 'react';
import '../css/App.css';

class App extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
        <div className="form-main">{this.props.children}</div>
    );
  }
}

export default App;
