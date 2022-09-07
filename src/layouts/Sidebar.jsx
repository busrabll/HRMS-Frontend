import React from 'react'
import { Icon, Menu, Container } from "semantic-ui-react";

export default function Sidebar() {
    return (
        <div>
            <Container className="main">
                <Menu inverted icon="labeled" vertical color={"grey"}>
                    <Menu.Item
                        name="bullhorn"
                    >
                        <Icon color="black" name="building outline" />
                        Employer
                    </Menu.Item>

                    <Menu.Item
                        name="user"
                    >
                        <Icon color="black" name="bullhorn" />
                        Job Position
                    </Menu.Item>

                    <Menu.Item
                        name="user"
                    >
                        <Icon color="black" name="list" />
                        Job Advertisement
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    )
}
