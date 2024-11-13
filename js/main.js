document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('authButton').addEventListener('click', function() {
      if (!localStorage.getItem('username')) {
        document.getElementById('authModal').style.display = 'block';
      }
    });
  
    
    document.getElementById('closeAuth').addEventListener('click', function() {
      document.getElementById('authModal').style.display = 'none';
    });
  
  
    document.getElementById('logInForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
  
      if (!username) {
        document.getElementById('username').classList.add('input-error');
        alert('Будь ласка, введіть логін!');
        return;
      }
  
      localStorage.setItem('username', username);
  

      document.getElementById('authButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
      document.getElementById('userLogin').style.display = 'block';
      document.getElementById('loginName').textContent = username;
  
      
      document.getElementById('authModal').style.display = 'none';
    });
  
  
    document.getElementById('logoutButton').addEventListener('click', function() {
     
      localStorage.removeItem('username');
  
 
      document.getElementById('authButton').style.display = 'block';
      document.getElementById('logoutButton').style.display = 'none';
      document.getElementById('userLogin').style.display = 'none';
    });
  
  
    const username = localStorage.getItem('username');
    if (username) {
      document.getElementById('authButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'block';
      document.getElementById('userLogin').style.display = 'block';
      document.getElementById('loginName').textContent = username;
    }
  });
  
