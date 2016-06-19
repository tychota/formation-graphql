import React from 'react';
import {
  AppBar,
  IconButton,
  Layout,
  NavDrawer,
  Panel,
  Sidebar,
  MenuItem,
  MenuDivider
} from 'react-toolbox';
import MenuItemLink from '../../components/MenuItemLink'

import theme from './AppLayout.scss';

class AppLayout extends React.Component {
  state = {
    drawerActive: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  render() {
    return (
      <Layout theme={theme}>
        <NavDrawer active={this.state.drawerActive}
                   onOverlayClick={ this.toggleDrawerActive }
                   theme={theme}>
          <div style={{justifyContent: 'flex-start'}}>
            <MenuItem value='books_list' icon='library_books' caption='Liste des livres' onclick={() => console.log('test')} />
            <MenuItemLink value='add_book' icon='library_add' caption='Ajouter un livre' linkTo="/add" />
            <MenuDivider />
            <MenuItemLink value='signout' icon='exit_to_app' caption='Se déconnecter' linkTo="/logout"/>
          </div>
        </NavDrawer>
        <Panel>
          <AppBar theme={theme}>
            <IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/>
            Chooz le Book du mois avec GraphQL
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            {this.props.children}
          </div>
        </Panel>
      </Layout>
    );
  }
}

export default AppLayout;
