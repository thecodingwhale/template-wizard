import React from 'react';
import styles from './styles.css';
import TitleHeader from '../TitleHeader';
import cx from 'classnames';

/**
* Payslip()
*/
function Payslip( props ) {
    const className = cx( styles.base, {
        [ styles.fullWidth ]: props.layout === 'full-width'
    });

    return (
        <div className={ className }>
            <div className={ styles.bordered }>
                <div className={ styles.block }>
                    <div className={ styles.half }>
                        <TitleHeader
                            type="h4"
                            style={ {
                                textTransform: 'uppercase',
                                lineHeight: '50px',
                                marginTop: '0px',
                                marginBottom: '0px'
                            } }
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
            <div style={{ position: 'relative' }} className={ styles.block }>
                <div className={ styles.verticalLine }></div>
                <div className={ styles.section }>
                    <div className={ styles.verticalPaddingRight }>
                        {props.options.map((option, optionIndex) => {
                            let removeLastBorder = {};
                            let settings = option.settings;
                            let notingSelected = settings.every(setting => {
                                return !setting.selected;
                            });

                            if (props.options.length == optionIndex + 1) {
                                removeLastBorder = {
                                    borderBottom: 'transparent'
                                };
                            }

                            if (notingSelected) {
                                return;
                            }
                            return (
                                <div style={ removeLastBorder } key={ optionIndex } className={ styles.bordered }>
                                    <div className={ styles.content }>
                                        <div>
                                            { option.name }
                                        </div>
                                        {settings.map((setting, settingIndex) => {
                                            if (setting.name == 'Photo') {
                                                return;
                                            }
                                            let styleHide = {};
                                            if (!setting.selected) {
                                                styleHide = {
                                                    display: 'none'
                                                };
                                            }
                                            return (
                                                <div
                                                    style={ styleHide }
                                                    key={ settingIndex }
                                                    className={ styles.inlineFaded }>
                                                    { setting.name }
                                                    <div>{ setting.value }</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={ styles.section }>
                    <div className={ styles.verticalPaddingLeft } >
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

Payslip.propTypes = {
    layout: React.PropTypes.oneOf([
        'full-width', 'two-column'
    ])
};

Payslip.defaultProps = {
    layout: 'two-column'
};

export default Payslip;
