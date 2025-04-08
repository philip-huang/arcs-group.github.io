document.querySelectorAll('.bibtex-content pre').forEach(pre => {
  const button = document.createElement('button');
  button.className = 'btn btn-sm btn-outline-secondary copy-btn';
  button.innerHTML = '<i class="far fa-copy"></i> Copy';
  button.onclick = () => {
    navigator.clipboard.writeText(pre.innerText);
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      button.innerHTML = '<i class="far fa-copy"></i> Copy';
    }, 2000);
  };
  pre.parentNode.insertBefore(button, pre);
});
