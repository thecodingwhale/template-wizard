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
                            <div className={ styles.description }>
                                <div>Pay Run</div>
                                Sept 30, 2016
                            </div>
                        </div>
                    </div>
                    <div className={ styles.half }>
                        <div className={ styles.content }>
                            <div className={ styles.description }>
                                <div>Pay Period</div>
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
                                    <div>
                                        Juan Dela Cruz
                                    </div>
                                    <div className={ styles.inlineFaded }>
                                        Employee ID
                                        <div>Emp-003</div>
                                    </div>
                                    <div className={ styles.inlineFaded }>
                                        Date Hired
                                        <div>June 20, 2014</div>
                                    </div>
                                </div>
                            </div>
                            <div className={ styles.bordered }>
                                <div className={ styles.content }>
                                    <div>
                                        Employer Contribution
                                    </div>
                                    <div className={ styles.inlineFaded }>
                                        SSS
                                        <div>92.10</div>
                                    </div>
                                    <div className={ styles.inlineFaded }>
                                        HDMF
                                        <div>50.00</div>
                                    </div>
                                    <div className={ styles.inlineFaded }>
                                        PhilHealth
                                        <div>50.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className={ styles.content }>
                                <div>
                                    Year To Date Figures
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Gross Income
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Taxable Income
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Withholding Tax
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Net Pay
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    SSS Employer
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    SSS EC Employer
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Gross Income
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    PhilHealth Employer
                                    <div>92.10</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    HDMF Employer
                                    <div>92.10</div>
                                </div>
                            </div>
                    </div>

                </div>
                <div className={ styles.half }>
                    <div className={ styles.verticalLine } >
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div>
                                    Salary
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Regular (30,000/Month)
                                    <div>15,000.00</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.inline }>
                                    Gross Income
                                    <div>15,000.00</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div>
                                    Mandatory Deduction
                                </div>
                                <div className={ styles.inlineFaded }>
                                    SSS
                                    <div>(50.00)</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    HDMF
                                    <div>(50.00)</div>
                                </div>
                                <div className={ styles.inlineFaded }>
                                    PhilHealth
                                    <div>(50.00)</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.inline }>
                                    Taxable Income
                                    <div>15,000.00</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div>
                                    Tax
                                </div>
                                <div className={ styles.inlineFaded }>
                                    Taxable Income
                                    <div>14,850.00</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.bordered }>
                            <div className={ styles.content }>
                                <div className={ styles.inline }>
                                    Net Pay
                                    <div>12,061.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Payslip;