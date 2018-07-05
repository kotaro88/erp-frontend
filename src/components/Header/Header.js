import React from "react";
import { Navbar, NavbarGroup, NavbarHeading, Button, Alignment } from "@blueprintjs/core";

import logo from '../../assets/images/logo.png';

export default function (props) {
    return (
        <Navbar fixedToTop>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading><img src={logo} alt="logo" /></NavbarHeading>
                <NavbarHeading style={{ width: '125px' }}><strong>PHALE PLASTIC</strong></NavbarHeading>
                <Button className="pt-minimal" icon="menu" style={{ height: '50px', width: '50px', marginRight: '10px' }} onClick={() => this.toggleMenu()} />
                <div class="pt-input-group" >
                    <span class="pt-icon pt-icon-search"></span>
                    <input class="pt-input" type="search" placeholder="Search input" dir="auto" />
                </div>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className="pt-minimal" icon="notifications" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
                <Button className="pt-minimal" icon="user" style={{ height: '50px', width: '50px', marginRight: '10px' }} />
                <Button className="pt-minimal" icon="log-out" style={{ height: '50px', width: '50px', marginRight: '10px' }}  />
            </NavbarGroup>
        </Navbar>
    )
}