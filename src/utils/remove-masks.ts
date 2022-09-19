const removeMasks = (text: string): string => text.replace(/[^a-z0-9]/g, '').replace(/\D+/g, '');

export default removeMasks;
