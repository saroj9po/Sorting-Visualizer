//Javascipt is asyncronous so you can't pause/block code execution
//You can delay doing something with setTimeout

//Implement sleep function
//   function sleep(milliseconds)
//      {
//          return new Promise((resolve) => {
//             setTimeout(resolve, milliseconds); // resolve is a function
//          });
//      }
//  to call this : await sleep(1000 ms)


function creatbar(){
 var height = document.getElementById("visual").offsetHeight;
 document.getElementById("bar0").style.height=height-20+"px";
 var w = document.getElementById("visual").offsetWidth;
    for(var i=1;i<w/10;i++) // Responsiveness of the website
    {
        var bar= document.getElementById("bar0").cloneNode(true);
        bar.id = "bar"+i;
        bar.style.height = String(Math.floor(Math.random()*(height-20)))+"px";
        document.getElementById("visual").appendChild(bar)
    }     
}

creatbar()

function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}

async function recolour(n){
    for(var i=0;i<n;i++){
        document.getElementById("bar"+i).style.backgroundColor="rgb(3, 144, 130)";
        await sleep(50);
    }
}

function deactivate(n){
    if(n==1){
    document.getElementById("controls").style.opacity= "0";
    document.getElementById("controls").style.visibility= "hidden";
}
else{
    document.getElementById("controles").style.visibility= "visible";
    document.getElementById("controles").style.opacity= "1";
}
}

async function selection_sort()
{
    deactivate(1)
    var array = document.getElementById("visual")
    var n=array.childElementCount;

    for(var i=0;i<n-1;i++)
    {
        var min_idx = i;
        var hi=document.getElementById("bar"+min_idx).offsetHeight;
        var min_height=hi;
        for(var j=i+1;j<n;j++)
        {
            document.getElementById("bar"+i).style.backgroundColor="red";
            document.getElementById("bar"+j).style.backgroundColor="violet";
            var h2=document.getElementById("bar"+j).offsetHeight;

            await sleep(50)

            if(h2 < min_height)
            {
                document.getElementById("bar"+min_idx).style.backgroundColor="rebeccapurple";
                document.getElementById("bar"+j).style.backgroundColor="pink";
                min_height=h2
                min_idx=j
            }
            else document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
        }
        document.getElementById("bar"+i).style.height=min_height+"px"
        document.getElementById("bar"+min_idx).style.height=hi+"px"
        document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
        document.getElementById("bar"+min_idx).style.backgroundColor="rebeccapurple";
    }
    recolour(n)
    deactivate(0)
}

async function bubble_sort()
{
    deactivate(1)
    var array = document.getElementById("visual")
    var n=array.childElementCount;
    
    for(var i=0;i<n-1;i++)
    {
        console.log(2)
        await sleep(50)
        for(var j=0;j<(n-i-1); j++)
        {
            console.log(3)
            await sleep(50)
            var h1=document.getElementById("bar"+j).offsetHeight;
            var h2=document.getElementById("bar"+String(j+1)).offsetHeight;
            document.getElementById("bar"+j).style.backgroundColor="red"
            document.getElementById("bar"+String(j+1)).style.backgroundColor="red"
            if(h1 > h2)
            {
                await sleep(50)
                console.log(4)
                document.getElementById("bar"+j).style.height=h2+"px"
                document.getElementById("bar"+String(j+1)).style.height=h1+"px"
            }
            document.getElementById("bar"+j).style.backgroundColor="rebeccapurple"
            document.getElementById("bar"+String(j+1)).style.backgroundColor="rebeccapurple"
        }
    }
    recolour(n)
    deactivate(0)
}

async function insertion_Sort(){
    deactivate(1);
    //getting numver of bars
    var array = document.getElementById("visual")
    var n= array.childElementCount

    //sorting logic
    for (let i = 1; i < n; i++) {
        let j = i - 1
        let temp = document.getElementById("bar"+i).offsetHeight;
        document.getElementById("bar"+i).style.backgroundColor="red";
        while (j >= 0 && document.getElementById("bar"+j).offsetHeight > temp) {
            document.getElementById("bar"+j).style.backgroundColor="green";
            await sleep(50);
            document.getElementById("bar"+String(j+1)).style.height = document.getElementById("bar"+j).offsetHeight+"px";
            document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
          j--
        }
        document.getElementById("bar"+String(j+1)).style.height = temp+"px"

        document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
        document.getElementById("bar"+String(j+1)).style.backgroundColor="rebeccapurple";
      }

      recolour(n);
    deactivate(0);
}