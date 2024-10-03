function solution(my_strings, parts) {
    let result = "";  
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        let s = part[0];
        let e = part[1];
        let my_stringSlice = my_strings[i].slice(s, e + 1);
        result += my_stringSlice; 
    }
    return result;  
}
