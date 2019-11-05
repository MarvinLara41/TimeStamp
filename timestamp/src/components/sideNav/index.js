import React from "react";

import "./index.css"

// import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'


import { Sidenav, Nav, Icon, Dropdown} from 'rsuite';


function SideNavs () {
    return (
        <div className="side">
        <div style={{ width: 240 }}>
        <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                User Group
              </Nav.Item>
              <Dropdown eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
                <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="4"
                title="Settings"
                icon={<Icon icon="gear-circle" />}
              >
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Item eventKey="3-3">Versions</Dropdown.Item>
               
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>

              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        </div>

        </div>
)
}

export default SideNavs;
