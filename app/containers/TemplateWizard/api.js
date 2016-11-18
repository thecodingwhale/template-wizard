const API_DOMAIN = 'http://api.salarium-react.local';
const API_ENDPOINT = API_DOMAIN + '/api/payslip-wizard/templates';

export const fetchPayslipTemplate = () => {
    return fetch(API_ENDPOINT).then((response) => {
        return response.json().then((json) => {
            return json.data;
        });
    });
}