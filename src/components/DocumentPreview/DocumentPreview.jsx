import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Grow from '@material-ui/core/Grow';
import styles from './DocumentPreview.module.scss'

const DocumentPreview = () => {

    const [documentDialogVisible, setDocumentDialogVisible] = useState(false);

    const handleDocumentDialogClick = () => {
        setDocumentDialogVisible(!documentDialogVisible);
    };

    const handleRemove = () => {
        alert("Oh my God you've killed Kenny, bustard!!!!")
        handleDocumentDialogClick();
    };

    return (
        <div className={styles.document}>
            <Grow in timeout={500 * (1)} >
                <Card >
                    <CardContent className={styles.documentCard}>
                        <Typography variant="title">Паспорт РФ</Typography>
                        <Typography variant="subheading">7111 722222</Typography>
                        <Typography variant="subheading">Иванов Иван Иванович</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton size="small" color="secondary" >
                            <Edit />
                        </IconButton>
                        <IconButton size="small" onClick={handleDocumentDialogClick}>
                            <Delete />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grow>

            <Dialog
                open={documentDialogVisible}
                onClose={handleDocumentDialogClick}
            >
                <DialogTitle id="alert-dialog-title">Внимание</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Вы уверены, что хотите удалить документ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDocumentDialogClick} color="secondary">
                        Отмена
                    </Button>
                    <Button onClick={handleRemove} color="secondary">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DocumentPreview;
