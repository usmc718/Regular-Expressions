function FindCount(target, searchstr) {
    const regex = new RegExp(searchstr, 'g');
    const matches = target.match(regex);
    return matches ? matches.length : 0;
}
function FindReplace(target, find, replacement) {
    const regex = new RegExp(find, 'g');
    return target.replace(regex, replacement);
}
function ReplaceDouble(target, replacement) {
    const regex = /\b(\w+)\s+\1\b/g;
    return target.replace(regex, replacement);
}
function StartCap(target) {
    const regex = /(?<=\.\s)\w/g;
    return target.replace(regex, match => match.toUpperCase());
}
function UsefulFunction(target) {
    const regex = /^(.*?)$\s*^((?=\1$\s*^)(.|\s))*?(?:\n|\r)?/gim;
    return target.replace(regex, '$1\n');
}
