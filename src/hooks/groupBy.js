const sortDesc = (a,b) => {
	return (a > b) ? -1 : (b > a) ? 1 : 0;
};

export const useGroupBy = (arrObj, key, order = "desc") => {

    if(!arrObj) return;
    
    const toc = arrObj.reduce((a,c) => {
        const safeKey = c[key].toLowerCase();
        !!(a[safeKey]) ? a[safeKey] = [...a[safeKey], c] : a[safeKey] = [c];
        return a;
    }, {});

    const tocKeys = Object.keys(toc);
    toc['order'] = (order === "desc") ? tocKeys.sort(sortDesc) : tocKeys.sort();
    
    return toc;
}
