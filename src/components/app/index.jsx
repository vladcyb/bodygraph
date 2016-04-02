import React     from 'react';
import {Link}    from 'react-router';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import {
  AppBar,
  DropDownMenu,
  MenuItem,
  IconMenu,
  IconButton,
  FontIcon,
  FloatingActionButton
} from 'material-ui';

const App = (p) => {
  const icon = <IconButton>
    <FontIcon className="fa fa-ellipsis-v" color="white" />
  </IconButton>

  const menuLeft = <IconMenu
    iconButtonElement={icon}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    style={{marginLeft: 20}}>
    <MenuItem primaryText="Sign Out" onClick={() =>{p.signOut()}}/>
  </IconMenu>

  const actionButton = <FloatingActionButton
    mini={true}
    secondary={true}
    linkButton={true}
    href="/body-data/new"
    style={{marginRight: 20}}>
    <ContentAdd />
  </FloatingActionButton>

  return <div>
    <AppBar
      title="BodyData"
      iconElementLeft={menuLeft}
      iconElementRight={actionButton}
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
    {p.children}
  </div>
}

export default App;
