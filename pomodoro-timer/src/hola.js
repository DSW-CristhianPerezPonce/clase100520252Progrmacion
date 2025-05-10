export const buildStyles = (options) => {
    return {
        backgroundColor: options.backgroundColor || '#f3f3f3',
        textColor: options.textColor || '#333',
        fontSize: options.fontSize || '16px',
        borderRadius: options.borderRadius || '5px',
        padding: options.padding || '10px',
    };
};