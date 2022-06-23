function generator(){
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var gen1 = Math.floor(Math.random() * arr.length)
    var gen2 = Math.floor(Math.random() * arr.length)
    var gen3 = Math.floor(Math.random() * arr.length)
    var gen4 = Math.floor(Math.random() * arr.length)
    var gen5 = Math.floor(Math.random() * arr.length)
    var gen6 = Math.floor(Math.random() * arr.length)
    var gen7 = Math.floor(Math.random() * arr.length)
    var gen8 = Math.floor(Math.random() * arr.length)
    var result = (arr[gen1] + arr[gen2] + arr[gen3] + arr[gen4] + arr[gen5] + arr[gen6] + arr[gen7] + arr[gen8]);
    document.getElementById("innertext").innerHTML = result;
}
function reset(){
    document.getElementById("innertext").innerHTML = "";

}


