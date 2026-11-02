function startAnimation() {
    let elem = document.getElementById("animate-box");
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 200) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
