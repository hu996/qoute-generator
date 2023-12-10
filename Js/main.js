
var qou=[
    {
        qoute:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        qoute:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:"Oscar WildMarilyn Monroe"
    },
    {
        qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    },
    {
        qoute:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        qoute:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
    },
    {
        qoute:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch"
    },
    {
        qoute:`You've gotta dance like there's nobody watching,Love like you'll never be hurt,
        Sing like there's nobody listening,And live like it's heaven on earth.`,
        author:"William W. Purkey"
    },
    {
        qoute:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss"
    },
    {
        qoute:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    }
];

function genrateqoute(){
    
    rndm=qou[Math.floor(Math.random()*qou.length)]
   document.getElementById('qoute').innerText=rndm.qoute;
   document.getElementById("author").innerHTML=`-- ${rndm.author}`;

}

// ---------------------------------------------------------------------------------------------


// function genrateqoute(){
//     var x=Math.floor(Math.random()*qou.length);
    
//     if(z===x){
//         console.log(`this x from if ${x}`);
//         console.log(`this z from if ${z}`);
//         x=Math.floor(Math.random()*qou.length);
       
//     }
//     else{
//         var rndm=qou[x];
//         console.log(`this x from else ${x}`);
//         console.log(`this z from if ${z}`);
//         document.getElementById('qoute').innerText=rndm.qoute;
//         document.getElementById("author").innerHTML=`-- ${rndm.author}`;
//     }

//    var z=x;

// }

// genrateqoute();




