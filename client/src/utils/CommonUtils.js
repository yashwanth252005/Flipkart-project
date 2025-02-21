



export const Addellipsis = (str) => {
    if (str.length > 35) {
        return str.substring(0, 35) + '...';
    }
    return str;
}