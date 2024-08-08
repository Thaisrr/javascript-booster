function getMaxV1(tab)  {
    tab.sort((a, b) => b - a);
    return tab[0];
}

function getMaxV2(tab) {
    let max = tab[0];
    for(let el of tab) {
        if(el > max) {
            max = el;
        }
    }
    return max;
}