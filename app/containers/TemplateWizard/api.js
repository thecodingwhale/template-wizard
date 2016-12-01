const API_DOMAIN = 'http://api.salarium-react.local';
const API_FETCH_TEMPLATES = `${API_DOMAIN}/api/payslip-wizard/templates`;
const API_SAVE_TEMPLATE = `${API_DOMAIN}/api/payslip-wizard/save`;
const API_SET_ACTIVE_TEMPLATE = `${API_DOMAIN}/api/payslip-wizard/setActiveTemplate`;


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

/**
* postRequestSaveTemplate()
*/
export function postRequestSaveTemplate( template ) {
    let data = new FormData();
    let body = {
        method: 'POST',
        body: JSON.stringify( template )
    }
    return fetch( API_SAVE_TEMPLATE, body ).then( ( response ) => { // eslint-disable-line arrow-body-style
        return response.json().then( ( json ) => { // eslint-disable-line arrow-body-style
            return json.data;
        });
    });
}

/**
* postSetActiveTemplate()
*/
export function postSetActiveTemplate( templateId ) {
    let data = new FormData();
    let body = {
        method: 'POST',
        body: JSON.stringify({ templateId: templateId.payload })
    }
    return fetch( API_SET_ACTIVE_TEMPLATE, body ).then( ( response ) => { // eslint-disable-line arrow-body-style
        return response.json().then( ( json ) => { // eslint-disable-line arrow-body-style
            return json.data;
        });
    });
}