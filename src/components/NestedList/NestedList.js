import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
	<>
		<h2>Material-UI вложенный список</h2>
		<List
		component="nav"
		aria-labelledby="nested-list-subheader"
		subheader={
			<ListSubheader component="div" id="nested-list-subheader">
			Вложенный список
			</ListSubheader>
		}
		className={classes.root}
		>
		<ListItem button>
			<ListItemIcon>
				<SendIcon />
			</ListItemIcon>
			<ListItemText primary="Пункт 1" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SendIcon />
			</ListItemIcon>
			<ListItemText primary="Пункт 2" />
		</ListItem>
		<ListItem button onClick={handleClick}>
			<ListItemIcon>
				<SendIcon />
			</ListItemIcon>
			<ListItemText primary="Пункт 3" />
			{open ? <ExpandLess /> : <ExpandMore />}
		</ListItem>
		<Collapse in={open} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
			<ListItem button className={classes.nested}>
				<ListItemIcon>
					<SendIcon />
				</ListItemIcon>
				<ListItemText primary="Пункт 3-1" />
			</ListItem>
			</List>
		</Collapse>
		</List>
	</>
  );
}
