function createCustomScrollbar() {
    const scrollbarStyle = document.createElement('style');
    scrollbarStyle.textContent = `
      ::-webkit-scrollbar {
        width: 12px;
      }
  
      ::-webkit-scrollbar-track {
        background-color: #d0a1e3;
      }
  
      ::-webkit-scrollbar-thumb {
        background-color: #150432;
      }
  
      ::-webkit-scrollbar-thumb:hover {
        background-color: #391681;
      }
    `;
    document.head.appendChild(scrollbarStyle);
  }
  
  window.addEventListener('load', createCustomScrollbar);
  