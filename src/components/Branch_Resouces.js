import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import {Card, MenuList, MenuItem, Menu} from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//   root: {
//     position: 'relative',
//   },
//   paper: {
//     position: 'absolute',
//     backgroundColor: 'light grey',
//     top: 36,
//     right: 0,
//     left: 0,
//   },
//   fake: {
//     position: 'absolute',
//     height: theme.spacing(1),
//     margin: theme.spacing(2),
//     // Selects every two elements among any group of siblings.
//     '&:nth-child(2n)': {
//       marginRight: theme.spacing(3),
//     },
//   },
// }));

export default function ClickAway() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    // const classes = useStyles();

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    
    function handleClickE2(event) {
        setAnchorE2(event.currentTarget);
      }
    function handleClose() {
      setAnchorEl(null);
    }
    function handleCloseE2(){
        setAnchorE2(null);
    }

  return (
    <div>
        <Card>
            <h2>Branch recources</h2>
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Financial Advisor
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                 <MenuList id='1'>
                  <MenuItem>
                  Investing
                  </MenuItem>
                  <MenuItem>
                  Mortgage
                  </MenuItem>
                  <MenuItem>
                  Loans
                  </MenuItem>
                  <MenuItem>
                  Credit
                  </MenuItem>
                  <MenuItem>
                  Debit
                  </MenuItem>
                  </MenuList>
            </Menu>
            </div>
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickE2}>
                Customer Service
            </Button>
            <Menu
                id="simple-menu"
                anchorE2={anchorE2}
                keepMounted
                open={Boolean(anchorE2)}
                onClose={handleCloseE2}
            >
                  <MenuList id='2'>
                  <MenuItem>
                  Day-to-Day
                  </MenuItem>
                  <MenuItem>
                  Forms
                  </MenuItem>
                  <MenuItem>
                  Reports
                  </MenuItem>
                  <MenuItem>
                  Procedures
                  </MenuItem>
                </MenuList>
            </Menu>
            </div>
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true">
                General
            </Button>
            </div>
            



      </Card>
    </div>
  );
}