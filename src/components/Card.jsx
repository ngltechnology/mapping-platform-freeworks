import React from "react"
import { connect } from "react-redux";

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActionArea from "@material-ui/core/CardActionArea"
import Avatar from "@material-ui/core/Avatar"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import Grow from "@material-ui/core/Grow"
import Clear from "@material-ui/icons/Clear"
import IconButton from "@material-ui/core/IconButton"

import {cardOff} from "../actions"


const GrowCard = props => {
  console.log(props)
  return(
    <React.Fragment>
    <Grow
      in={props.checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(props.checked ? { timeout: 1000 } : {})}
    >
      <Card className="InfoCard">
          <CardHeader avatar={
            <IconButton className="shopAvatar">
              <Avatar>L</Avatar>
            </IconButton>
          }
          action={
            <IconButton onClick={props.handleOff}>
              <Clear/>
            </IconButton>
          }
          title={props.name}
          subheader={props.rewards}
          />
        <CardActionArea>
          <CardMedia
            image={props.photoURL}
            style={{height: "15vh"}}
          />
          <CardContent>
          <Typography component="p">
            Time List
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Button size="small" color="primary">
            時間を選ぶ
          </Button>
          <Button size="small" color="primary">
            キャンセル
          </Button>
        </CardActions>
        
      </Card>  
    </Grow>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
	checked: state.card.checked,
  name: state.quest.name,
  rewards: state.quest.reward,
  photoURL: state.quest.photoURL,
})
const mapDispatchToProps = dispatch => ({
	handleOff: () => dispatch(cardOff()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GrowCard);