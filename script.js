function highlightWord() {
    const textArea = document.getElementById('textArea');
    const text = textArea.value;
    const wordToHighlight = 'special';
    
    const regex = new RegExp(`(${wordToHighlight})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
    
    textArea.innerHTML = highlightedText;
}