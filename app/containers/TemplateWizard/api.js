const API_DOMAIN = 'http://api.salarium-react.local';

export const fetchPayslipLayout = () => {
    return fetch(API_DOMAIN + '/api/payslip-wizard/layouts').then((response) => {
        return response.json().then((json) => {
            return json.data;
        });
    });
}

export const fetchPayslipTemplate = () => {
    return fetch(API_DOMAIN + '/api/payslip-wizard/templates').then((response) => {
        return response.json().then((json) => {
            return json.data;
        });
    });
}