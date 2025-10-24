
function calculate() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount <= 0) {
        document.getElementById('result').innerText = 'Enter a valid amount';
        return;
    }
    const fee = amount * 0.012;
    const net = amount - fee;
    document.getElementById('result').innerText = `Fee: ₱${fee.toFixed(2)} | You Receive: ₱${net.toFixed(2)}`;
}
