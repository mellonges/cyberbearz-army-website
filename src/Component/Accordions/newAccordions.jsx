import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
        border: '15px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        fontSize: 15,
        color: "white",
        backgroundColor: "rgb(29,29,31)",


        '&:not(:last-child)': {
            borderBottom: 2,

        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },

    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(30,30,31)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '15px 0',
            color: "yellow",


        },
    },
    expanded: {

    },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function NewAccordions() {
    const [expanded, setExpanded] = React.useState('panel');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);

    };

    // const [buttonValue1, setButtonValue1] = React.useState("+");
    // const changeButtonValue1 = () => {
    //     if (buttonValue1 == "X")  setButtonValue1("+")
    //     else setButtonValue1("X")
    // }
    //
    // const [buttonValue2, setButtonValue2] = React.useState("+");
    // const changeButtonValue2 = () => {
    //     if (buttonValue2 == "X")  setButtonValue2("+")
    //     else setButtonValue2("X")
    // }
    //
    // const [buttonValue3, setButtonValue3] = React.useState("+");
    // const changeButtonValue3 = () => {
    //     if (buttonValue3 == "X")  setButtonValue3("+")
    //     else setButtonValue3("X")
    // }
    //
    // const [buttonValue4, setButtonValue4] = React.useState("+");
    // const changeButtonValue4 = () => {
    //     if (buttonValue4 == "X")  setButtonValue4("+")
    //     else setButtonValue4("X")
    // }
    // const [buttonValue5, setButtonValue5] = React.useState("+");
    // const changeButtonValue5 = () => {
    //     if (buttonValue5 == "X")  setButtonValue5("+")
    //     else setButtonValue5("X")
    // }


    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography><b style={{fontSize: 20}}>Низкие комиссии</b></Typography>
                    <div id="#plus" style={{position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: 30}}  className={expanded === "panel1" ? "stock-title" : "stock-title collapsed"}><span className="icon icon-cross"></span></div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p style={{fontSize: 20}}>Binance Smart Chain предоставляет минимальная комиссия при покупке 1
                            gwei равен 10^(-9) или
                            0.000000001 BNB. При средней цене на газ в 20 gwei отправка 0.1 BNB стоимостью около ???
                            долларов будет стоить вам примерно 0.01 доллара. Посетите Ethereum Gas Tracker, чтобы узнать
                            текущие цены на газ.</p>
                        <p style={{fontSize: 20}}>Небольшой интервал между блоками делает обработку транзакций быстрой —
                            около 3 секунд. Более
                            высокий по сравнению с Ethereum лимит газа также положительно сказывается на пропускной
                            способности, позволяя включать в блоки большее число транзакций.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography><b style={{fontSize: 20}}>Алгоритм генерации</b></Typography>
                    <div style={{position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: 30}} className={expanded === "panel2" ? "stock-title" : "stock-title collapsed"}><span className="icon icon-cross"></span></div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p style={{fontSize: 20}}>
                            NFT CyberBearz Army генерируются используя алгоритм итерации по 4х-мерному массиву из 7
                            случайных слоёв (Более 120 предметов). Медведи не повторяются и всегда имеют уникальный
                            набор слоёв. Разные слои могут иметь различную степень редкости. Карту редкости можно
                            посмотреть здесь.
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography><b style={{fontSize: 20}}>Как купить и хранить</b></Typography>
                    <div style={{position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: 30}} className={expanded === "panel3" ? "stock-title" : "stock-title collapsed"}><span className="icon icon-cross"></span></div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p style={{fontSize: 20}}>Покупка и хранение NFT Cyberbearz осуществляется через кошельки крипто
                            валют Metamask и Trust Wallet (подключение MetaMask к Binance Smart Chain).</p>
                        <p style={{fontSize: 20}}>Для покупки используется монета BNB</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography><b style={{fontSize: 20}}>Продажа и обмен</b></Typography>
                    <div style={{position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: 30}} className={expanded === "panel4" ? "stock-title" : "stock-title collapsed"}><span className="icon icon-cross"></span></div>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p style={{fontSize: 20}}>Вы всегда можете подарить или обменять своего медведя напрямую через
                            кошельки крипто валют, а также выставить его на продажу в маркетплейсах бинанс НФТ, Бинанс
                            НФТкей.</p>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography><b style={{fontSize: 20}}>Смарт контарт</b></Typography>
                   <div style={{position: "absolute",
                       top: 0,
                       right: 0,
                       fontSize: 30}} className={expanded === "panel4" ? "stock-title" : "stock-title collapsed"}><span className="icon icon-cross"></span></div>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p style={{fontSize: 20}}>CyberBearz Army создаются на основе смарт-контракта Binance Smart
                            Chain. Подлинность смарт контракта вы можете посмотреть здесь.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
