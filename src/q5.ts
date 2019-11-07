// 請完成checkId function裡面的內容
// 題目說明: 這是一個測試id是否合法的程式，輸入的id可以透過一套演算法驗證是否合法，演算法說明如下
// 一串長度為6的數字，透過(第一位數*10，第二位數*9，第三位數*8相加後，如果MOD 5等於0為合法
// 輸入說明: 輸入長度為3，開頭不為0的字串，轉換數字請自行處理
// 輸出說明: 請直接console.log出是否合法

let checkId = function (id: string) {
    var a = (parseInt(id.charAt(0)) * 10 + parseInt(id.charAt(1)) * 9 + parseInt(id.charAt(2)) * 8);
    if (a % 5 == 0) {
        console.log(id, '合法')
        a = 0;
    }
    console.log(id, '不合法')
    a = 0;
}


checkId('425') // 不合法
checkId('355') // 合法
checkId('754') // 不合法
checkId('100') // 合法