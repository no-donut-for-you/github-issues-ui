import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {withRouter} from 'react-router-dom';

class MainAppBar extends React.PureComponent {
  render() {
    return (
      <>
        <AppBar position="static" color="primary" className="main-app-bar">
          <Toolbar>
            <Typography type="title" variant="h1" color="inherit" className="flex">
              Github
            </Typography>

            <div className="main-app-bar__actions">
              <Link
                variant="h5"
                className="main-app-bar__actions-action"
                href="/issues"
              >
               Issues
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withRouter(MainAppBar);
