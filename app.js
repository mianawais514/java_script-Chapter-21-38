                            // CHAPTER #21-25

// TASK#1
// var a=prompt("enter first name") + prompt("enter last name");
// document.write(a);

// TASK#2
// var b=prompt("enter string");
// var c=0;
// document.write(b+"<BR>");
// for(i=0;i<b.length;i++)
// {
//  c=c+1;
 
// }
// document.write("length of string: "+c);

// // Task#3

//  var d="pakistani";
//  var a=prompt("enter number");
//  var c=d.indexOf(a);
// document.write(c);

// task#7
// var a="hyderabad";
// document.write(a);
// var a=a.slice(5);
// document.write("<br>After Replacment <br><br>"+"Islam"+a);

// // Task#8
// var message="Ali and Sami are best friends. They play cricket and football together";
// var i=message.indexOf("and");
// var a=message.slice(0,i);
// var rep="&";
// var i_2=message.lastIndexOf("and");
// var b=message.slice(i+4,i_2);
// var rep_2="&";
// var c=message.slice(i_2+4);
// document.write(a+rep+b+rep_2+c);


// Task#9
// var a="23";
// var b= typeof(a);
// document.write("value is "+a+"<br>");
// document.write("Type is "+b+"<br>");
// var c=Number(a);
// var d=typeof(c);
// document.write("value is "+c+"<br>");
// document.write("Type is "+d+"<br>");
// var f=c.toString();
// document.write(typeof(f))

// task#10

// var a="peanuts";
// var b=a.toUpperCase();
// document.write(b)
// Task#11
//  var b="javascript";
//  document.write("user input: "+b+"<br>");
//  var c=b.slice(0,1);
//  var d=c.toUpperCase();
//  var e=b.slice(1);
//  document.write("title case: "+d+e);


// // Task#12

// var a=35.36;
// var x=a.toString();
// document.write("nmber:"+x+"<br>")
// var b=x.slice(0,2);
// var c=x.slice(3,6);
// document.write("result: "+b+c);

// Task#13

// var a=prompt("enter name");
// for(i=0;i<a.length;i++)
// {
//   var b=a.slice(i,i+1);
// if(b=="@"||b=="."||b==","||b=="!")
// {
//     alert("please enter a valid username")
// }
// }


// Task#14

// var a=["cake","apple pie","cooke","chips","patties"];
// var b=prompt("enter item name")
// var c=b.toLowerCase();
// for(i=0;i<a.length;i++)
// {

//   var x=a.slice(i,i+1);
//   if(x==c)
//   {    
//        document.write(a[i]+" item is index no: "+i+"in our bakery");
//   }
    
// }
// Task#15

// var a=prompt("Enter Password");
// for(i=0;i<a.length;i++)
// {
//     var x=a.slice(i,i+1)
//     if(a[0]==)
//     {
//         document.write(a[0]);
//         break;
        
//     }
// }

// Task#16

// var university="university of karachi";
// var a=university.split(" ");
// var b=a[0];
// var c=a[1];
// var d=a[2];
// for(i=0;i<b.length;i++)
// {
//     document.write(b[i]+"<br>")
// }
// document.write("<br>");
// for(i=0;i<c.length;i++)
// {
//     document.write(c[i]+"<br>")
// }
// document.write("<br>");
// for(i=0;i<d.length;i++)
// {
//     document.write(d[i]+"<br>")
// }

// Task#17

//   var a="pakistan";
//   document.write("user input: "+a+"<br>");
//   var b=a.length-1;
//   document.write("Last character: "+a[b])

// // Task#18

// var a="The quick brown fox jumps over the lazy dog.Write a program to count number of occurrences of word the in given string";

// var b=a.split(" ");
// var x=0;

// for(i=0;i<b.length;i++)
//     {
//       var c=b.slice(i,i+1);
      
      
//       if(c=="the")
//       {
//         x=x+1;
          
//       }
      
//     }
//     document.write("there are "+x+" occurrencepf word 'the' ");


                                      // CHAPTER#26-30

// Task#1

// var a=3.45216;
// var b=Math.floor(a);
// var d=Math.round(a)
// var c=Math.ceil(a);
// document.write("Floor value: "=b+"<br>");
// document.write("round value: "=d+"<br>");
// document.write("Ceil value: "=c+"<br>");

// Task#2

// var a=-4;
// var b=Math.abs(a)
// document.write(b)

// Task#3
// var a=Math.random()*9;
// var a=Math.floor(a);
// document.write("random Dice value: "+a);

// Task#5

// var a=Math.random()*2;
// var a=Math.floor(a);
// document.write(a)
// if(a==0)
// {
//   document.write("random coin value: Heads");
// }
// else
// {
//   document.write("random coin value: Tails");
// }

// Task#6
// var a=Math.random()*100;
// var a=Math.floor(a);
// document.write("random number between 1 and 100: "=a);

// Task#7






// Task#8

// var a=Math.random()*10;
// var b=Math.round(a);
// var c=prompt("Enter number between : 1-10 ");
// if(c>=1 && c<=10)
// {
//   document.write("congratulate the user");
// }



                                    //  CHAPTER#31-34

// Task#1

// var a=new Date();
// document.write(a);

// Task#2

// var x=["jaun","feb,","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var a=new Date();
// var b=a.getMonth();
// document.write(x[b])

// Task#5

// var a=new Date();
// var b=a.getDate();
// if(b<16)
// {
// document.write("first fifteen days of month");
// }
// else
// {
//     document.write("Last Days of months")
// }

// Test#6

// var a=new Date();
// var b= a.getTime();
// var c=b/1000*60*60;

// Test#7

// var a=new Date();
// var b=a.getHours();
// if(b<12)
// {
//     alert("its AM")
// }
// else
// {
//     alert("its PM")
// }

// Test#8

// var a=new Date("dec31,2020 12:34");
// document.write(a);


// TAsk#9

// var a=new Date("dec 05, 2015");
// document.write(a+"<br>");
// var b=new Date("jan 01,2015");
// var x=a.getTime();
// var y=b.getTime();
// var f=x-y;
// var h= f/(1000*60)
// document.write(h+"seconds has passed since beginning of 2015");


// Task#11

// var a=new Date();
// document.write("current date is:" +a+"<br>")
// var b=a.setHours("1");
// document.write("After 1 hour ago: "+a)

// Task#13

// var a=new Date();
// var b=a.getTime();
// var x=new Date("sep 25,2000");
// var y=x.getTime();
// var z=b-y;
// var g=Math.floor(z/(1000*60*60*24*30*12));
// document.write("your age is"+g+"<br>you birth year is 2000")


// Task#14

// var a="Awais";
// document.write("Customer name: "+"<th>"+a+"</th><br>");
// var b="Feb";
// document.write("Month "+"<th>"+b+"</th><br>");
// var c=20;
// document.write("Charges per unit: "+"<th>"+c+"</th><br>");
// var d=200;
// document.write("Number of units: "+"<th>"+d+"</th><br>");
// var n=20*200;
// document.write("Net amount pay with due date: "+"<th>"+n+"</th><br>");
// var l=100;
// var g=n+l;
// document.write("Amount pay after due date: "+"<th>"+g+"</th><br>");




                                // CHAPTER#35-38

// TASK#2

// function a()
// {
    
//     var a=prompt("first name");
//     var b=prompt("last name");
//     document.write(a+b);

// }
// a();


// Task#3
// function a()
// {
//     var x=prompt("enter number");
//     var y=prompt("enter number");
//     return (+x)+(+y);
// }
// document.write(a());

// Task#4;

// function b(num1,oper,num2)
// {
//     if(oper=="+")
// {
// var c=(+num1)+(+num2);
// return c;
// }
// if(oper=="-")
// {
// var c=(+num1)-(+num2);
// return c;
// }
// else
// {
//     var c="Error";
// return c;

// }

// }

// document.write(b("3","-","2"));


// Task#5

// function c(a)
// {
//      return(a*a);
// }
// document.write(c(2));


// Task#6

// function a()
// {
//     for(i=1;i>=7;i++)
//     {
//       i=i*0;
//     }
//     document.write(i);
// }


// Task#7

// function v(width=10,height=2)
// {
// var a=width*height;
// return a;

// }
// document.write(v());


// Task#8


// function a()
// {
//     var a=prompt("enter text");
//     var b="";
//     for(i=a.length-1;i>=0;i--)
//     {
//         b=b+a[i];
//     }
//     if(a==b)
//     {
//     document.write("th paildrome wrods");
//     }
// }
// a();

// Task#11

// function a(b="")
// {
//     var x=b.slice(0,1);
//     var x=x.toUpperCase();
//     var y=b.slice(1);
//     var z=x+y;
//     return z;
    
// }
// document.write(a("the quick brown fox"));


// Task#12


// function a(b="svs")
// {
//        for(i=0;i<b.length;i++)
//        {  
//           var x=b.slice(i,i+1);
//           if(x==" ")
//           {
             
//           }

        
//        }
// }
// document.write(a("Web Development Tutorial"))

