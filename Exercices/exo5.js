function sort(tab) {
    const sortedTab = [];
    for(let el of tab) {
        if(sortedTab.length === 0) {
            sortedTab.push(el)
        } else {
            let i = 0;
            while (i < sortedTab.length && el > sortedTab[i]) {
                i++;
            }
            sortedTab.splice(i, 0, el);
        }
    }
    return sortedTab;
}