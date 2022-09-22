import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SaveSummary from './SaveSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux';

export default function Navi() {

    const { saveItems } = useSelector(state => state.save)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }


    return (
        <div>
            <Menu inverted fixed="top" color="grey">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {saveItems.length > 0 && <SaveSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}