import React from 'react';
import styles from './styles.css';
import TitleHeader from '../TitleHeader';

function Payslip() {
    return (
        <div className={ styles.base }>
            <div className={ styles.bordered }>
                <div className={ styles.block }>
                    <div className={ styles.half }>
                        <TitleHeader
                            type="h4"
                            style={{
                                textTransform: 'uppercase',
                                lineHeight: '50px',
                                marginTop: '0px',
                                marginBottom: '0px'
                            }}
                        >
                            Payslip
                        </TitleHeader>
                    </div>
                    <div className={ styles.half }>
                        <div className={ styles.avatar } />
                    </div>
                </div>
            </div>
            <div className={ styles.block }>
                <div className={ styles.bordered }>
                    <div className={ styles.half }>
                        <div className={ styles.content }>
                            <div
                                style={{
                                    textTransform: 'uppercase'
                                }}
                                className={ styles.smallTitle }
                            >
                                Pay Run
                            </div>
                            <div className={ styles.contentTitle }>
                                Sept 30, 2016
                            </div>
                        </div>
                    </div>
                    <div className={ styles.half }>
                        <div className={ styles.content }>
                            <div
                                style={{
                                    textTransform: 'uppercase'
                                }}
                                className={ styles.smallTitle }
                            >
                                Pay Period
                            </div>
                            <div className={ styles.contentTitle }>
                                Sept 16 - Sept 30, 2016
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles.block }>
                <div className={ styles.half }>
                    <div style={{
                        paddingRight: '10px'
                    }}>
                        <div className={ styles.bordered }>
                                <div className={ styles.content }>
                                    <div className={ styles.contentTitle }>
                                        Juan Dela Cruz
                                    </div>
                                    <ul className={ styles.listUnstyled }>
                                        <li>
                                            <span className={ styles.contentTitle }>Employee ID</span>
                                            <span className={ styles.listDescription }>Emp-003</span>
                                        </li>
                                        <li>
                                            <span className={ styles.contentTitle }>Date Hired</span>
                                            <span className={ styles.listDescription }>June 20, 2014</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles.bordered }>
                                <div className={ styles.content }>
                                    <div className={ styles.contentTitle }>
                                        Employer Contribution
                                    </div>
                                    <ul className={ styles.listUnstyled }>
                                        <li>
                                            <span className={ styles.contentTitle }>
                                                SSS
                                            </span>
                                            <span className={ styles.listDescription }>
                                                92.10
                                            </span>
                                        </li>
                                        <li>
                                            <span className={ styles.contentTitle }>
                                                HDMF
                                            </span>
                                            <span className={ styles.listDescription }>
                                                50.00
                                            </span>
                                        </li>
                                        <li>
                                            <span className={ styles.contentTitle }>
                                                PhilHealth
                                            </span>
                                            <span className={ styles.listDescription }>
                                                50.00
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles.content }>
                                <div className={ styles.contentTitle }>
                                    Year To Date Figures
                                </div>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Gross Incone
                                        </span>
                                        <span className={ styles.listDescription }>
                                            92.10
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Taxable Incone
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Withholding Tax
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Net Pay
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            SSS Employer
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            SSS EC Employer
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Gross Income
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            PhilHealth Employer
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            HDMF Employer
                                        </span>
                                        <span className={ styles.listDescription }>
                                            50.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                    </div>

                </div>
                <div className={ styles.half }>
                    <div className={ styles.verticalLine } >
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.contentTitle }>
                                    Salary
                                </div>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>Regular (30,000/Month)</span>
                                        <span className={ styles.listDescription }>15,000.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Gross Income
                                        </span>
                                        <span className={ styles.listDescription }>
                                            15,000.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.contentTitle }>
                                    Mandatory Deduction
                                </div>
                            <ul className={ styles.listUnstyled }>
                                <li>
                                    <span className={ styles.contentTitle }>
                                        SSS
                                    </span>
                                    <span className={ styles.listDescription }>
                                        (50.00)
                                    </span>
                                </li>
                                <li>
                                    <span className={ styles.contentTitle }>
                                        HDMF
                                    </span>
                                    <span className={ styles.listDescription }>
                                        (50.00)
                                    </span>
                                </li>
                                <li>
                                    <span className={ styles.contentTitle }>
                                        PhilHealth
                                    </span>
                                    <span className={ styles.listDescription }>
                                        (50.00)
                                    </span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Taxable Income
                                        </span>
                                        <span className={ styles.listDescription }>
                                            15,000.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.contentTitle }>
                                    Tax
                                </div>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Taxable Income
                                        </span>
                                        <span className={ styles.listDescription }>
                                            14,850.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <ul className={ styles.listUnstyled }>
                                    <li>
                                        <span className={ styles.contentTitle }>
                                            Net Pay
                                        </span>
                                        <span className={ styles.listDescription }>
                                            12,061.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Payslip;
