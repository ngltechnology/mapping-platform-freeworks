import React from "react"

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
import { withStyles, Chip } from "@material-ui/core"

const GrowCard = ({
  classes,
  checked,
  handleOff,
  name,
  rewards,
  photoURL,
  dialogOn
}) => (
  <React.Fragment>
    <Grow
      in={checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card className="InfoCard">
        <CardHeader 
          className={classes.cardHeader}
          avatar={
            <IconButton className="shopAvatar">
              <Avatar>L</Avatar>
            </IconButton>
          }
          action={
            <IconButton onClick={handleOff}>
              <Clear/>
            </IconButton>
          }
          title={`${name}`}
          subheader={rewards}
          />
        <CardActionArea>
          <CardMedia
            image={photoURL}
            className={classes.media}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              Lizard
            </Typography>
            <div className={classes.chips}>
              <Chip label="friendly" />
              <Chip label="飲食店" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonArea}>
          <Button onClick={dialogOn} size="small" color="primary">
            詳細を見る
          </Button>
          <Button size="small" color="primary">
            この仕事を受ける
          </Button>
        </CardActions> 
      </Card>  
    </Grow>
  </React.Fragment>
)
const styles = {
  cardHeader: {
    height: "5vh"
  },
  media: {
    height: "20vh"
  },
  CardContent: {
    height: "15vh",
  },
  chips: {
    textAlign: "left",
  },
  buttonArea: {
    height: "5vh",
    textAlign: "right",
    bottom: 0,
    margin: 0,
    padding: 0,
  }
}
export default withStyles(styles)(GrowCard);
