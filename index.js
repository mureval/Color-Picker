document.getElementById('colorInput').addEventListener('input', (e) => {
    let selectedColor = e.target.value

    document.getElementById('colorCode').textContent = selectedColor

    document.getElementById('colorDisplay').style.backgroundColor = selectedColor
})