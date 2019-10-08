import React, {useState} from 'react';
import './App.scss';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import {Loader} from "./components/Loader/Loader";
import {RouteSelector} from "./components/RouteSelector/RouteSelector";
import Ticket from "./components/Ticket/Ticket";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import DocumentPreview from "./components/DocumentPreview/DocumentPreview";
import {Button} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import {PowerSettingsNew} from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import TicketContainer from "./components/Ticket/TicketContainer";
import {ErrorHandlerSnackbar} from "./components/common/ErrorHandlerSnackbar";


const App = () => {
    const [expanded, setExpanded] = React.useState('panelBuy');


    const handlePanelChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };




    return (
        <div className="App">
            <AppBar >
                <Toolbar>
                        <div>
                            <IconButton title="Выйти"  color="inherit">
                                <PowerSettingsNew />
                            </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            <div className="panel top-panel">
                <ExpansionPanel expanded={expanded === 'panelBuy'} onChange={handlePanelChange('panelBuy')}>
                    <ExpansionPanelSummary style={{color: '#001779'}}
                                           expandIcon={<ExpandMoreIcon/>}
                                           aria-controls="panel1bh-content"
                                           id="panel1bh-header"
                    >
                        <Typography className="rollingPanel">Купить билет</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: '#eee'}}>
                        <RouteSelector/>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails style={{backgroundColor: '#eee', flexWrap: 'wrap'}}>
                        <TicketContainer/>
                        <TicketContainer/>
                        <TicketContainer/>
                        <TicketContainer/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

            <div className="panel">
                <ExpansionPanel expanded={expanded === 'panelTickets'} onChange={handlePanelChange('panelTickets')}>
                    <ExpansionPanelSummary style={{color: '#001779'}}
                                           expandIcon={<ExpandMoreIcon/>}
                                           aria-controls="panel1bh-content"
                                           id="panel1bh-header"
                    >
                        <Typography className="rollingPanel">Мои билеты</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: '#eee', flexWrap: 'wrap'}}>
                        <TicketContainer/>
                        <TicketContainer/>
                        <TicketContainer/>
                        <TicketContainer/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

            <div className="panel">
                <ExpansionPanel expanded={expanded === 'panelDocuments'} onChange={handlePanelChange('panelDocuments')}>
                    <ExpansionPanelSummary style={{color: '#001779'}}
                                           expandIcon={<ExpandMoreIcon/>}
                                           aria-controls="panel1bh-content"
                                           id="panel1bh-header"
                    >
                        <Typography className="rollingPanel">Мои документы</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{backgroundColor: '#ddd',
                    flexWrap: 'wrap'}}>
                        <Button variant="outlined">Добавить Документ</Button>
                        <DocumentPreview/>
                        <DocumentPreview/>
                        <DocumentPreview/>
                        <DocumentPreview/>
                        <DocumentPreview/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <Loader/>
            <ErrorHandlerSnackbar error={"Ticket non payed"}/>
            <ErrorHandlerSnackbar error={"Ticket approval waiting"}/>
            <ErrorHandlerSnackbar error={"Return pending"}/>
            <ErrorHandlerSnackbar error={"Payment confirmed"}/>
            <ErrorHandlerSnackbar error={"Unknown error"}/>
        </div>
    );
}

export default App;
