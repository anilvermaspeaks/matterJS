import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import SimpleObs from './components/simple-obs';
import Styles from './app.css'

export default function router() {
    return (
        <main> <Sidebar />
            <div className={Styles.contentSec}>
                <Switch>
                    <Route exact path='/' component={SimpleObs} />
                    <Route path='/simple' component={SimpleObs} />
                    <Route path='*' component={SimpleObs} />
                </Switch>
            </div>
        </main>

    )
}
