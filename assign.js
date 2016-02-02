function ValidateForm() {
    var x = document.forms["fname"]["email"].value;
    var y = document.forms["fname"]["LastName"].value;
    var z = document.forms["fname"]["text3"].value;
        
if (x == null || x == "" || y == null || y == "" ||z == null || z == "") 
    {
        alert("please complete the details");
        return false;
    }
 
    var eflag=0;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
		eflag=1;
        return false;
    }
	
	var nflag=0;
	if (!/^[a-zA-Z]*$/g.test(y)) {
        alert("Invalid characters");
		nflag=1;
        return false;
    }
	
	if(eflag==0 && nflag==0 && x != null && x != "" && y != null && y != "" &&z != null && z != "")
	{
	     alert("Your mail has been sent");
        return false;
	}
	
}