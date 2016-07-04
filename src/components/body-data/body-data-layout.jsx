import React      from 'react';
import { Link }   from 'react-router'
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  AppBar,
  DropDownMenu,
  MenuItem,
  IconMenu,
  IconButton,
  FontIcon,
  FloatingActionButton
} from 'material-ui';

export default function BodyDataLayout({children, signOut}) {
  return <div>
    <AppBar title="BodyData"
      iconElementLeft={<Menu signOut={signOut}/>}
      iconElementRight={<ActionButton/>}
    />
    <div style={{textAlign: 'right'}}>
      <DropDownMenu style={{marginRight: 20}} onChange={() => {}}>
        <MenuItem label="Chart">
          <Link label="Chart" to="/body-data">Chart</Link>
        </MenuItem>
        <MenuItem label="Table">
          <Link label="Table" to="/body-data/table">Table</Link>
        </MenuItem>
      </DropDownMenu>
    </div>
    {children}
  </div>
}

function Menu({signOut}) {
  const icon = <IconButton>
    <FontIcon className="fa fa-ellipsis-v" color="white" />
  </IconButton>

  const props = {
    iconButtonElement : icon,
    anchorOrigin      : {horizontal: 'left', vertical: 'top'},
    targetOrigin      : {horizontal: 'left', vertical: 'top'},
    style             : {marginLeft: 20}
  };

  return <IconMenu {...props}>
    <MenuItem primaryText="Sign Out" onClick={signOut}/>
  </IconMenu>
}

function ActionButton() {
  const props = {
    mini       : true,
    secondary  : true,
    linkButton : true,
    href       : "/body-data/new",
    style      : {marginRight: 20}
  };
  return <FloatingActionButton {...props}>
    <ContentAdd />
  </FloatingActionButton>
}
