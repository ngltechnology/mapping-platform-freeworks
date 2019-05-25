import React from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import FullScreenDialog from "../Dialog"
import { step_increment, step_decrement } from "./AuthenticationState"
import { StepFirst, StepSecond, StepThird } from "./Form"
import { dialog_on } from '../../actions';
import { push } from "connected-react-router"

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100vh'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['基本の情報の入力しよう！', '詳しい情報入力！', '支払い情報'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepFirst />;
    case 1:
      return <StepSecond /> ;
    case 2:
      return <StepThird />;
    default:
      return "error";
  }
}

class VerticalLinearStepper extends React.Component {
  render() {
    const {
      classes,
      activeStep,
      handleBack,
      handleNext,
      infomations,
      push,
    } = this.props;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? '確認画面へ' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>内容確認</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              color="primary"
              onClick={this.props.dialogOn}
              >
              プライバシーポリシー
            </Button>
            <Button
              color="primary"
              onClick={this.props.dialogOn}
              >
              利用規約
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={push}
              className={classes.button}
            >
              ポリシーに同意の上保存
            </Button>
          </Paper>
        )}
        <FullScreenDialog />
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  activeStep: state.authentication.activeStep,
  infomations: state.authentication.form,
})
const mapDispatchToProps = dispatch => ({
  handleNext: () => dispatch(step_increment()),
  handleBack: () => dispatch(step_decrement()),
  dialogOn: () => dispatch(dialog_on()),
  push: () => dispatch(push("/map")),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(VerticalLinearStepper));
