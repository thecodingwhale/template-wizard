const API_DOMAIN = 'http://api.salarium-react.local';
const API_FETCH_LAYOUTS = API_DOMAIN + '/api/payslip-wizard/layouts';
const API_FETCH_TEMPLATES = API_DOMAIN + '/api/payslip-wizard/templates';

export const fetchPayslipLayout = () => {
    return fetch(API_FETCH_LAYOUTS).then((response) => {
        return response.json().then((json) => {
            return json.data;
        });
    });
}

export const fetchPayslipTemplate = () => {
    return fetch(API_FETCH_TEMPLATES).then((response) => {
        return response.json().then((json) => {
            return json.data;
        });
    });
}