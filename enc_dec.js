// AES encryption/decryption functions
function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "ThisIsASecretKey123"; // Replace with your secret key
    var encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var key = "ThisIsASecretKey123"; // Replace with your secret key
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("outputText").value = decryptedText;
}
