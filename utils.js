
function createResponse(error, data) {
    const result = { status: 'success' };
    if (error) {
        result['status'] = 'error';
        result['error'] = error;
    } else {
        result['data'] = data;
    }

    return result;
}

module.exports = {
    createResponse: createResponse
};
