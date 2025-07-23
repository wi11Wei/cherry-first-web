function myInfo() {
    document.getElementById('informationButton').addEventListener('click', function() {
        var card = document.getElementById('card');
        var quote = document.getElementById('quote-container');
        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block';
            quote.style.display = 'none';
            this.textContent = 'Hide Information';
        } else {
            card.style.display = 'none';
            quote.style.display = 'block';
            this.textContent = 'my Information';
        }
    });
}