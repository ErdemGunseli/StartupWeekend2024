import sendRequest from './api';

export async function fastCompletion(text) {
    const formData = new FormData();
    formData.append('text', text);

    return await sendRequest('/assistant/fast_completion', {
        method: 'POST',
        body: formData
    });
}