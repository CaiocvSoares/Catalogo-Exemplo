function openModal(imageSrc, title, description) {
    document.getElementById('modalImg').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('gameModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('gameModal').style.display = 'none';
}