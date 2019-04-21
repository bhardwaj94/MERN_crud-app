import React from 'react';
import { connect } from 'react-redux';
import {logoutSuccess} from '../../redux/actions/index'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
//import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 6,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  button:{
    margin:'auto'
  },
});
class Dashboard extends React.Component{

    componentWillReceiveProps(nextprops){
        const logout =nextprops.user&&nextprops.user.logout
            ?nextprops.user.logout
            :false
            console.log(logout)
            if (logout) {
                this.props.history.push('/login')
            }
    }
    render(){
        console.log(this.props)
        const user = this.props.state.authUser
        ?this.props.state.authUser:{}
        console.log(">>>>>>>>>user",user);
        const { classes } = this.props;
        //const bull = <span className={classes.bullet}>•</span>;
        return(
        <main className={classes.main}>
          <Paper className={classes.root} elevation={1}>
          <Grid container justify="center" alignItems="center">
          <Avatar className={classes.greenAvatar}>
          <AssignmentIcon />
          </Avatar>
          </Grid>
          <hr />
          <strong>Name :</strong> {`${user.name} ${user.lastname}`}<br />
          <strong>email :</strong> {`${user.email}`}<br />
          <Button variant="outlined" 
          color="secondary" 
          className={classes.button}
          onClick={()=>{
            localStorage.removeItem('token');
            this.props.dispatch(logoutSuccess(true));
        }}>
          logout
          </Button>
      </Paper>
      </main>
        )
    }  
};

function mapStateToProps(state){
    //console.log("from mapStateToProps",state)
    return {
        state
    };
};
export default connect(mapStateToProps,null)(withStyles(styles)(Dashboard));