import React from 'react';
import { withRouter } from 'react-router'
import { MenuItem } from 'react-toolbox';

const MenuItemLink = ({linkTo, router, ...props}) => {
  return <MenuItem {...props} onCLick={() => router.push(linkTo)} />
};

MenuItemLink.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired,
  linkTo: React.PropTypes.string.isRequired
};

export default withRouter(MenuItemLink);
