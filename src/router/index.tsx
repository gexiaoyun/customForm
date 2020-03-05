import * as React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import App from '../page/App'
import EditModal from '../page/edit'
import DivMove from '../page/divMove'

class Router extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact={true} path="/" component={EditModal} />
                        <Route path="/divMove" component={DivMove}/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router