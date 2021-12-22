//1. Write a js program to find length of a string.

function example01() 
{

    var stringPakistan = "I Love Pakistan";

    document.getElementById("resulthead1").innerHTML =`The length of  "${stringPakistan}" is:`;
    document.getElementById("result1").innerHTML =`${stringPakistan.length}`;

    
    

}

//2. Write a js program to copy one string to another string.

function example02() 
{

    var stringPakistan = "I Love Pakistan";
    var copiedString = stringPakistan;

    document.getElementById("resulthead2").innerHTML =`Original String : "${stringPakistan}"`;
    document.getElementById("result2").innerHTML =`coppied string : "${copiedString}"`;

    
    

}

//3. Write a js program to concatenate two strings.
function example03() 
{

    var stringPakistan = "I Love Pakistan";
    var otherString = "I lives in Pakistain";

    document.getElementById("resulthead3").innerHTML =`Concatenate of Strings  "${stringPakistan}" & "${otherString}" is`;
    document.getElementById("result3").innerHTML =` "${stringPakistan} , ${otherString}"`;

}
//4. Write a js program to compare two strings.
function example04() 
{

    var stringPakistan = "I Love Pakistan";
    var otherString = "I lives in Pakistain";
    if (stringPakistan === otherString) 
    {
        document.getElementById("resulthead4").innerHTML =`Compare of Strings : "${stringPakistan}" & "${otherString}" is`;    
        document.getElementById("result4").innerHTML =true;    
    }
    else 
    {
    
        document.getElementById("resulthead4").innerHTML =`Compare of Strings : "${stringPakistan}" & "${otherString}" is`;    
        document.getElementById("result4").innerHTML =false;    
    }

}
//5. Write a js program to convert lowercase string to uppercase.
function example05() 
{

    var stringPakistan = "I Love Pakistan";
     
     
    
        document.getElementById("resulthead5").innerHTML =`Result of Conversion to Uppercase :`;    
        document.getElementById("result5").innerHTML =`${stringPakistan.toUpperCase()}`;    
    

}

// 6. Write a js program to convert uppercase string to lowercase.
function example06() 
{

    var stringPakistan = "I Love Pakistan";
     
     
    
        document.getElementById("resulthead6").innerHTML =`Result of Conversion to Lowercase :`;    
        document.getElementById("result6").innerHTML =`${stringPakistan.toLowerCase()}`;    
    

}
// 7. Write a js program to toggle case of each character of a string.
function example07() 
{

    var stringPakistan = "I Love Pakistan";
    var newString = '';
     
         for (let i = 0; i < stringPakistan.length; i++) {

             if (stringPakistan.charAt(i) === stringPakistan.charAt(i).toLowerCase()) 
             {
                newString = newString + stringPakistan.charAt(i).toUpperCase();
                 
             }
             else if (stringPakistan.charAt(i) === stringPakistan.charAt(i).toUpperCase()) 
             {
                newString = newString + stringPakistan.charAt(i).toLowerCase();
             }
             
         }
    
          document.getElementById("resulthead7").innerHTML =`Toggle case of string : "${stringPakistan}"`;    
          document.getElementById("result7").innerHTML =`${newString}`;    
    

}

//8. Write a js program to find total number of alphabets, digits or special character in a string.

function example08() 
{

    var newString = document.getElementById("text").value;
       var alpha=[] ; var digits = [] ; var spchar = [] ;

      for (let i = 0; i < newString.length; i++) 
      {
           if ( newString.charAt(i)>='0' && newString.charAt(i)<='9') 
           {
            digits.push(newString.charAt(i));
                
               
           }
           else if ((newString.charAt(i)>='a' && newString.charAt(i)<='z') || (newString.charAt(i)>='A' && newString.charAt(i)<='Z') ) 
           {

            alpha.push(newString.charAt(i));
            

               
           }
           else
           {
            spchar.push(newString.charAt(i));
               
           }



          
      }
     
     
      
          document.getElementById("resulthead8").innerHTML =`Result : `;    
          document.getElementById("result8").innerHTML =`Total Number of Alphabets : ${alpha.length} <br/>
           Total Number of Digits : ${digits.length}
           <br/>
           Total Number of special Character : ${spchar.length}`;    
    

}
//9. Write a js program to count total number of vowels and consonants in a string.

function example09() 
{

    var newString = document.getElementById("text9").value;
       var vowels =0;
       var cons = 0;


     for (let i = 0; i < newString.length; i++) 
     {
           if ((newString.charAt(i)>='a' && newString.charAt(i)<='z') || (newString.charAt(i)>='A' && newString.charAt(i)<='Z')) {
               
          
            if (newString.charAt(i)==='a'||newString.charAt(i)==='A') 
            {
                vowels++;    
            }
            else if (newString.charAt(i)==='e'||newString.charAt(i)==='E') 
            {
                vowels++;    
            }
            else if (newString.charAt(i)==='i'||newString.charAt(i)==='I') 
            {
                vowels++;    
            }

            else if (newString.charAt(i)==='o'||newString.charAt(i)==='O') 
            {
                vowels++;    
            }

            else if (newString.charAt(i)==='u'||newString.charAt(i)==='U') 
            {
                vowels++;    
            }
            else {
                cons++;
            }
         
     }
    }
     
      
          document.getElementById("resulthead9").innerHTML =`Result : `;    
          document.getElementById("result9").innerHTML =`Total Vowels : ${vowels} <br/>
           Total Consonants : ${cons}`;    
    

}
//10. Write a js program to count total number of words in a string.
function example10() 
{

    var newString = document.getElementById("text10").value;
    var stringArray = newString.split(" ");
    

      
      
          document.getElementById("resulthead10").innerHTML =`Result : `;    
          document.getElementById("result10").innerHTML =`Total Words : ${stringArray.length}`;    
    

}
//11. Write a js program to find reverse of a string.
function example11() 
{

    var newString = document.getElementById("text11").value;
    var stringArray = [];
     
 
 
        
    for (let i = 0; i < newString.length; i++) 
    {
       
        stringArray.push(newString[i]);
           
        
    }

        if (stringArray.length>0) 
        {
            var reverseArray = stringArray.reverse().toString();
            
            reverseArray = reverseArray.replace(/,/g,'');
            
        }
        
      
      
          document.getElementById("resulthead11").innerHTML =`Result of Reverse String from :"${newString}" `;    
          document.getElementById("result11").innerHTML =`${reverseArray}`;    
          


}
//12. Write a js program to check whether a string is palindrome or not.

function example12() 
{

    var newString = document.getElementById("text12").value;
    var isPalindrome = '';

    var splitArray = newString.split('');
 
    
    if (splitArray.toString().replace(/,/g,'')===splitArray.reverse().toString().replace(/,/g,'')) 
    {
           isPalindrome = 'String is a Palindrome';    
    }
     
    else
     {
        isPalindrome = 'String is not a Palindrome';    
     }
 
      
          document.getElementById("resulthead12").innerHTML =`Result of :"${newString}" `;    
          document.getElementById("result12").innerHTML =`${isPalindrome}`;    
          


}
//13. Write a js program to reverse order of words in a given string
function example13() 
{

    var newString = document.getElementById("text13").value;
    var reverseWords = newString.split(' ').reverse().join(' ');

      
          document.getElementById("resulthead13").innerHTML =`Result of Reverse Words from :"${newString}" `;    
          document.getElementById("result13").innerHTML =`${reverseWords}`;    
          


}

//14. Write a js program to find first occurrence of a character in a given string.

function example14() 
{

    var newString = document.getElementById("text14").value;
     
    var firstChar = document.getElementById("firstChar").value;

      
          document.getElementById("resulthead14").innerHTML =`Result of First Occurence from  :"${newString}" `;    
          document.getElementById("result14").innerHTML =`${newString.indexOf(firstChar)}`;    
          
          

}
//15. Write a js program to find last occurrence of a character in a given string.
function example15() 
{

    var newString = document.getElementById("text15").value;
     
    var lastChar = document.getElementById("lastChar").value;

      
          document.getElementById("resulthead15").innerHTML =`Result of Last Occurence from  :"${newString}" `;    
          document.getElementById("result15").innerHTML =`${newString.lastIndexOf(lastChar)}`;    
          
          

}
//16. Write a js program to search all occurrences of a character in given string.
function example16() 
{

    var newString = document.getElementById("text16").value;
     
    var lastChar = document.getElementById("findChar").value;
    var charIndexArray = [];


    for (let i = 0; i < newString.length; i++) 
    {
        if (newString[i] === lastChar ) 
        {
            charIndexArray.push(i);
            
        }
        
    }






          document.getElementById("resulthead16").innerHTML =`Result of All Occurence from  :"${newString}" `;    
          document.getElementById("result16").innerHTML =`${charIndexArray}`;    
          
          

}
//17. Write a js program to count occurrences of a character in given string.

function example17() 
{

    var newString = document.getElementById("text17").value;
     
    var findChar = document.getElementById("findChar2").value;
    var charIndexArray = [];


    for (let i = 0; i < newString.length; i++) 
    {
        if (newString[i] === findChar ) 
        {
            charIndexArray.push(i);
            
        }
        
    }

          document.getElementById("resulthead17").innerHTML =`Result of count Occurence from  :"${newString}" `;    
          document.getElementById("result17").innerHTML =`${charIndexArray.length}`;    
          
          

}
//18. Write a js program to find highest frequency character in a string.

  function example18 () 
  {
    var newString = document.getElementById("text18").value;

       var max = 0,
        maxChar = '';
        
        newString.split('').forEach( function(char)
        {
               
            
       if(newString.split(char).length > max) 
       {
           max = newString.split(char).length;
           maxChar  = char;
        }
     });
  

     document.getElementById("resulthead18").innerHTML =`Result Highest Frequency of  :"${newString}" `;    
     document.getElementById("result18").innerHTML =`${maxChar}`;    

   };

   //19. Write a js program to find lowest frequency character in a string.

   function example19 () 
  {
    var newString = document.getElementById("text19").value;

       var max = 0,
        maxChar = [];
        
        newString.split('').forEach( function(char)
        {
               
            console.log('max :',max);
            console.log('string :',newString.split(char));

       if(newString.split(char).length > max) 
       {
           max = newString.split(char).length;
           maxChar = char;
           
        }
     });
  

     document.getElementById("resulthead19").innerHTML =`Result Lowest Frequency of  :"${newString}" `;    
     document.getElementById("result19").innerHTML =`${maxChar.toString()}`;    

   };
//20. Write a js program to count frequency of each character in a string.

function example20 () 
  {
    var newArray = [];
    var newString = document.getElementById("text20").value;
    newString = newString.split('');
    document.getElementById("resulthead20").innerHTML =`Frequency of Each Character : `; 
    
    for (let i = 0; i < newString.length; i++) 
    {
        var cnt = 0;
        
        for (let j = 0; j < newString.length; j++) 
        {
             if ( newString[i] ==  newString[j]) 
             {
                 if (newArray.indexOf( newString[j])<0) 
                 {
                     newArray.push(newString[j]);
                     cnt++
                 }
                 else {
                     cnt++
                 }
                 
             }  
              
        }
        var node = document.createElement("tr");               
        var textnode = document.createTextNode(`${newString[i]} : ${cnt}`);        
        node.appendChild(textnode);                              
        document.getElementById("result20").appendChild(node); 

        
        
    }
     
          

   }

  //21. Write a js program to remove first occurrence of a character from string.
   