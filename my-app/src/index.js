import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Image, Dropdown, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"/>
            </Menu.Item>
            <Menu.Item position={'right'} fitted>Home</Menu.Item>
            <Dropdown item text="About Us" fitted>
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Catering/Private Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menus" fitted>
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted >Bar</Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className={"murphys-background"}>
          <Grid container verticalAlign={"center"} columns={3}>
            <Grid.Column>
              <Image src={"http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"} />
            </Grid.Column>
            <Grid.Column>
              <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>

  )
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
