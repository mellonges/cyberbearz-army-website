import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "rgb(29,29,31)",
        color: "white",
        fontSize: 15
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
        color: "white",
    },

    title1: {
        textAlign: "center"
    }

}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}><b>Низкие комиссии</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root}>
                        <p style={{fontSize: 15}}>Binance Smart Chain предоставляет минимальная комиссия при покупке 1
                            gwei равен 10^(-9) или
                            0.000000001 BNB. При средней цене на газ в 20 gwei отправка 0.1 BNB стоимостью около ???
                            долларов будет стоить вам примерно 0.01 доллара. Посетите Ethereum Gas Tracker, чтобы узнать
                            текущие цены на газ.</p>
                        <p style={{fontSize: 15}}>Небольшой интервал между блоками делает обработку транзакций быстрой —
                            около 3 секунд. Более
                            высокий по сравнению с Ethereum лимит газа также положительно сказывается на пропускной
                            способности, позволяя включать в блоки большее число транзакций.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}><b>Алгоритм генерации</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root}>
                        <p style={{fontSize: 15}}>NFT CyberBearz Army генерируются используя алгоритм итерации по
                            4х-мерному массиву из 7
                            случайных слоёв (Более 120 предметов). Медведи не повторяются и всегда имеют уникальный
                            набор слоёв. Разные слои могут иметь различную степень редкости. Карту редкости можно
                            посмотреть здесь.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}><b>Как купить и хранить Cyberbearz</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root}>
                        <p style={{fontSize: 15}}>
                            Покупка и хранение NFT Cyberbearz осуществляется через кошельки крипто валют Metamask и
                            Trust Wallet (подключение MetaMask к Binance Smart Chain).
                        </p>
                        <p style={{fontSize: 15}}>Для покупки используется монета BNB</p>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}><b>Продажа и обмен</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root}>
                        <p style={{fontSize: 15}}>
                            Вы всегда можете подарить или обменять своего медведя напрямую через кошельки крипто валют,
                            а также выставить его на продажу в маркетплейсах бинанс НФТ, Бинанс НФТкей.
                        </p>
                        <p style={{fontSize: 15}}>Для покупки используется монета BNB</p>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}><b>Смарт-контракт</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root}>
                        <p>
                            CyberBearz Army создаются на основе смарт-контракта Binance Smart Chain. Подлинность смарт
                            контракта вы можете посмотреть здесь.
                        </p>


                    </Typography>
                </AccordionDetails>
            </Accordion>

        </>
    );
}
