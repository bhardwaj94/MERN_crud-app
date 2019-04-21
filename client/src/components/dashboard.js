import React from 'react';
import { connect } from 'react-redux';
import {logoutSuccess} from '../../redux/actions/index'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';
const styles = {
    card: {
      minWidth: 275,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
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
            <Card className={classes.card} centered component>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                User Info -
              </Typography>
              <Typography variant="h5" component="h2">
                {`${user.name} ${user.lastname}`}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                email -
              </Typography>
              <Typography component="p">
                {`${user.email}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{
                    localStorage.removeItem('token');
                    this.props.dispatch(logoutSuccess(true));
                }}>logOut!</Button>
            </CardActions>
          </Card>
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