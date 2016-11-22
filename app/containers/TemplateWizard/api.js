const API_DOMAIN = 'http://api.salarium-react.local';
const API_FETCH_LAYOUTS = `${API_DOMAIN}/api/payslip-wizard/layouts`;
const API_FETCH_TEMPLATES = `${API_DOMAIN}/api/payslip-wizard/templates`;

/**
* fetchPayslipLayout()
*/
export function fetchPayslipLayout() {
    return fetch( API_FETCH_LAYOUTS ).then( ( response ) => { // eslint-disable-line arrow-body-style
        return response.json().then( ( json ) => { // eslint-disable-line arrow-body-style
            return json.data;
        });
    });
}

/**
* fetchPayslipTemplate()
*/
export function fetchPayslipTemplate() {
    return fetch( API_FETCH_TEMPLATES ).then( ( response ) => { // eslint-disable-line arrow-body-style
        return response.json().then( ( json ) => { // eslint-disable-line arrow-body-style
            return json.data;
        });
    });
}
