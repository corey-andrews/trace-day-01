
// filterWrapper(string)(predicate)(value)
// predicate must be curried
const intFilterWrapper = str => {
    var parsed = parseInt(str)
    if (isNaN(parsed))
        return _ => _ => true;
    return pred => pred(parsed);
}

const comparisonSwitch = str => {
    switch(str) {
        case "<":
            return a => b => a > b;
        case "<=":
            return a => b => a >= b;
        case "=":
            return a => b => a == b;
        case ">":
            return a => b => a < b;
        case ">=":
            return a => b => a <= b;
    }
}

export {intFilterWrapper as IntFilterWrapper, comparisonSwitch as ComparisonSwitch}
