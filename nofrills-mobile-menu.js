document.getElementById('nofrills-toggle').onclick = function() {
  var nf = document.getElementById('nofrills-items');

  // Show and hide menu items when toggle is clicked
  if(nf.style.display==='none') {
    nf.style.display = 'flex';
  }
  else {
    nf.style.display = 'none';
  }
};