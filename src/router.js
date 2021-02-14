import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import SimpleObs from './components/simple-obs';
import Game from './components/game/game';
import Methods from './components/Methods/methods'
import Styles from './app.css'

export default function router() {
    return (
        <main> <Sidebar />
            <div className={Styles.contentSec}>
                <Switch>
                    <Route exact path='/' component={SimpleObs} />
                    <Route path='/simple' component={SimpleObs} />
                    <Route path='/methods' component={Methods} />
                    <Route path='/game' component={Game} />
                    <Route path='*' component={SimpleObs} />
                </Switch>
            </div>
        </main>

    )
}


