import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Snackbar from "@material-ui/core/Snackbar";


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: 'green[600]',
    },
    error: {
        backgroundColor: 'red',
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: '#ffc83f',
        color: '#000',
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
        </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}



export const ErrorHandlerSnackbar = ({error}) => {


    switch (error) {
        case 'Ticket non payed': {
            const actions = (
                <Fragment>
                    <Button variant="outline">Вернуться</Button>
                    <Button variant="outline">Оплатить</Button>
                </Fragment>
            );

            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={()=>{}}
                >
                <MySnackbarContentWrapper
                    variant="warning"
                    message="Билет не оплачен. Для перехода на сайт оплаты на кнопку оплатить"
                    action={actions}
                />
                </Snackbar>
            )
        }

        case 'Ticket approval waiting': {
            const actions = (
                <Fragment>
                    <Button variant="outline">Вернуться</Button>
                    <Button variant="outline">Оплатить</Button>
                </Fragment>
            );

            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={()=>{ error = null}}
                >
                    <MySnackbarContentWrapper
                        variant="info"
                        message="Транзакция обрабатывается автовокзалом "
                        action={actions}
                    />
                </Snackbar>
            )
        }

        case 'Return pending': {
            const actions = (
                <Fragment>
                    <Button variant="outline">Вернуться</Button>
                    <Button variant="outline">Оплатить</Button>
                </Fragment>
            );

            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={()=>{ error = null}}
                >
                    <MySnackbarContentWrapper
                        variant="info"
                        message="Возврат обрабатывается автовокзалом. Для получения денежных средств Вам необходимо обратиться на кассу автовокзала г.Тюмени с документом, подтверждающим личность"
                        action={actions}
                    />
                </Snackbar>
            )
        }

        case 'Payment confirmed': {
            const actions = (
                <Fragment>
                    <Button variant="outline">Вернуться</Button>
                    <Button variant="outline">Оплатить</Button>
                </Fragment>
            );

            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={()=>{ error = null}}
                >
                    <MySnackbarContentWrapper
                        variant="info"
                        message="Билет успешно оплачен"
                        action={actions}
                    />
                </Snackbar>
            )
        }

        case 'Unknown error': {
            const actions = (
                <Fragment>
                    <Button variant="outline">Вернуться</Button>
                    <Button variant="outline">Оплатить</Button>
                </Fragment>
            );

            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={()=>{ error = null}}
                >
                    <MySnackbarContentWrapper
                        variant="error"
                        message="Возникла ошибка приложения, пожалуйста перезагрузите страницу и попробуйте снова"
                        action={actions}
                    />
                </Snackbar>
            )
        }

        default: {
            alert("vvv")
        }
    }
}


