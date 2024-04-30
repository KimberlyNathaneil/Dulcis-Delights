const profileLink = document.getElementById('profileLink');
const logoutModal = document.getElementById('logoutModal');
const closeModal = document.getElementsByClassName('close')[0];
const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');

profileLink.onclick = function() {
  logoutModal.style.display = 'block';
}

closeModal.onclick = function() {
  logoutModal.style.display = 'none';
}

cancelLogoutBtn.onclick = function() {
  logoutModal.style.display = 'none';
}

confirmLogoutBtn.onclick = function() {
  // Di sini Anda bisa tambahkan logika untuk proses logout, misalnya redirect ke halaman logout
  console.log('Logout berhasil');
  // Setelah logout, Anda bisa mengarahkan pengguna ke halaman logout atau ke halaman lainnya
  // window.location.href = 'halaman_logout.html';
}
