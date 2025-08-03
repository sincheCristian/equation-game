        function dinausores() {
            const img = document.getElementById('dinausores');
            const classeSol = document.querySelector('.solution1').offsetWidth;
            const largIm = img.offsetWidth;
            img.style.transition = 'left 5s linear';
            img.style.left = (classeSol - largIm) + 'px';
        }

        function aigle() {
            const img = document.getElementById('aigle');
            const aigle = document.querySelector('.solution2').offsetWidth;
            const largIm = img.offsetWidth;
            img.style.transition = 'right 5s linear';
            img.style.right = (aigle- largIm) + 'px';
        }
        
function resoudreEquation() {
    var a = parseFloat(document.getElementById('nbre1').value);
    var b = parseFloat(document.getElementById('nbre2').value);
    var c = parseFloat(document.getElementById('nbre3').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Veuillez entrer des valeurs valides pour a, b, et c.");
        return;
    }
    var discriminant = (b * b) - (4 * a * c);
    if (discriminant>=0) {
        alert("reel   "+discriminant);
        dinausores();
        window.onload = dinausores;
    } else {
        alert("immaginaire  "+discriminant);
        aigle();
        window.onload = aigle;
    }
      
    
}
