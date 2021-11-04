        <div class="wrapper">
            <form class="form1" action="http://google.com">
                <div class="formtitle">
                    Enter the password to proceed
                </div>

                <div class="input nobottomborder">
                    <div class="inputtext">
                        Password:
                    </div>

                    <div class="inputcontent">
                        <input type="password" id="password" /><br />
                    </div>
                </div>

                <div class="buttons">
                    <input class="orangebutton" type="button" value="Login" onclick="checkPassword()" />
                </div>
            </form>
        </div>

       <script>
      function checkPassword(){
       if(document.getElementById('password').value == 'hello'){
        alert('Correct Password!'); 
          location.href = "http://google.com";
         } else {
         alert('Wrong Password!');
          return false;
        }
       }
      </script>
