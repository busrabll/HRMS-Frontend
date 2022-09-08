import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQEWXTww8klE5w/profile-displayphoto-shrink_800_800/0/1658088863571?e=1668038400&v=beta&t=nPwh_vVuynMxk8VHGu1BDQ1h2sSvpiXp9RAV3OkuWmY" />
        <Dropdown pointing="top left" text="Busra">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
