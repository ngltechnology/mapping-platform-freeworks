import React from 'react';
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
import { DialogContainer } from "../containers/DialogContainer.js"
import { StepFirst, StepSecond, StepThird } from "./Form"

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100vh'
  },
  button: {
    marginTop: theme.spacing(),
    marginRight: theme.spacing(),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
});

function getSteps() {
  return ['基本情報', '詳細情報', '支払い情報'];
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

class StartStepper extends React.Component {
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
                  <TableCell>お名前</TableCell>
                  <TableCell>{infomations.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>電話番号</TableCell>
                  <TableCell>{infomations.number}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>住所１</TableCell>
                  <TableCell>{infomations.address1}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>住所２</TableCell>
                  <TableCell>{infomations.address2}</TableCell>
                </TableRow>
                <p>詳細入力</p>
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
              onClick={this.props.OpenPolicy1}
              >
              プライバシーポリシー
            </Button>
            <Button
              color="primary"
              onClick={this.props.OpenPolicy2}
              >
              利用規約
            </Button>
            <div>
            <Button
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={push}
              className={classes.button}
            >
              ポリシーに同意し次へ
            </Button>
            </div>
          </Paper>
        )}
        <DialogContainer />
      </div>
    );
  }
}

StartStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StartStepper)
