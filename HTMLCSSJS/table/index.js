function changecolor()
{
    var userinput = document.getElementById("userinput").value;
    switch(userinput)
    {
        case "1":
            document.getElementById("1").style.backgroundColor="cyan";
            break;
        case "2":
            document.getElementById("2").style.backgroundColor="cyan";
            break;
        case "3":
            document.getElementById("3").style.backgroundColor="cyan";
            break;
        case "4":
            document.getElementById("4").style.backgroundColor="cyan";
            break;
        case "5":
            document.getElementById("5").style.backgroundColor="cyan";
            break;
        case "6":
            document.getElementById("6").style.backgroundColor="cyan";
            break;
        case "7":
            document.getElementById("7").style.backgroundColor="cyan";
            break;
        case "8":
            document.getElementById("8").style.backgroundColor="cyan";
            break;
        case "9":
            document.getElementById("9").style.backgroundColor="cyan";
            break;
    };
};

    function clearcolor()
    {
        document.getElementById("1").style.backgroundColor=null;
        document.getElementById("2").style.backgroundColor=null;
        document.getElementById("3").style.backgroundColor=null;
        document.getElementById("4").style.backgroundColor=null;
        document.getElementById("5").style.backgroundColor=null;
        document.getElementById("6").style.backgroundColor=null;
        document.getElementById("7").style.backgroundColor=null;
        document.getElementById("8").style.backgroundColor=null;
        document.getElementById("9").style.backgroundColor=null;
        
    };