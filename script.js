  function myFunction() {
        var x = document.getElementById("fnumber").value;
        var y = document.getElementById("snumber").value;
        var z = document.getElementById("tnumber").value;
        if(parseInt(y)<=parseInt(x) && parseInt(z)<=parseInt(x)){
        document.getElementById("demo").innerHTML = x;
        	if(parseInt(y)>=parseInt(z))
        	{
        		document.getElementById("demo2").innerHTML = y;
        		document.getElementById("demo3").innerHTML = z;
        		
        	}
        	else
        	{
        		document.getElementById("demo2").innerHTML = z;
        		document.getElementById("demo3").innerHTML = y;
        	}
        }
        else if(parseInt(y)>=parseInt(z))
        {
        document.getElementById("demo").innerHTML = y;
        	if(parseInt(x)>=parseInt(z))
        	{
        		document.getElementById("demo2").innerHTML = x;
        		document.getElementById("demo3").innerHTML = z;
        	}
        	else
        	{
        		document.getElementById("demo2").innerHTML = z;
        		document.getElementById("demo3").innerHTML = x;
        	}
        }
        else
        {
        document.getElementById("demo").innerHTML = z;
        if(parseInt(x)>=parseInt(y))
        	{
        		document.getElementById("demo2").innerHTML = x;
        		document.getElementById("demo3").innerHTML = y;
        	}
        	else
        	{
        		document.getElementById("demo2").innerHTML = y;
        		document.getElementById("demo3").innerHTML = x;
        	}	
        }
       }