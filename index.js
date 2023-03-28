function validateHTMlform()
{
  let form = document.StudenSignupForm;
   if( form.textnames.value == "" )
   {
     alert( "Enter Your Name!" );
     form.textnames.focus() ;
     return;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your year passed!" );
     form.textnames.focus() ;
     return;
   }
  
  
  if( form.department.value == "-1" )
  {
    alert( "Enter Your department!" );
   
    return;
  }  
  

var email = form.emailid.value;
 atpos = email.indexOf("@");
 dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
    alert("Enter your correct email ID")
    form.emailid.focus() ;
    return;
}

 if( form.mobileno.value == "" ||
          isNaN( form.mobileno.value) ||
          form.mobileno.value.length != 10 )
  {
    alert( "Enter your Mobile No. in the format 123." );
    form.mobileno.focus() ;
    return;
  }
  return( true );
}
