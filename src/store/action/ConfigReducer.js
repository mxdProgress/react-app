export function addstatus(label, value) {
    return {
        type: 'ADD_STATUS',
        payload: { label, value }
    }
};