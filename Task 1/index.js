//The class Movie is stated below. An instance of class Movie represents a film. 
//This class has the following three properties: title,studio,rating
class Movie {
    Movie() {
        let title ="";
        let studio="";
        let rating="";
    }
//a) Write a constructor for the class Movie, which takes title, a studio, and a rating as its arguments, 
//and sets the respective class properties to these values.
    setMovieTitleStudioRating(t,s,r)
    {
        this.title = t;
        this.studio = s;
        this.rating = r;
    }
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    setMovieTitleStudio(t, s)
    {
        this.title = t;
        this.studio = s;
        this.rating = "PG";
    }    
    putMovie() {
        console.log("Movie title : ",this.title);       
        console.log("Movie studio : ",this.studio);       
        console.log("Movie rating : ",this.rating);    
        console.log("-------------------------------")   
    }        

};
//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of "PG".
//You may assume the input array is full of Movie instances. The returned array need not be full.

function setPG (joker)
    {
        if (joker.rating==="PG") {
            return true;
        }
        else{
            return false;
        }
    }
    
let m1 = new Movie();
m1.setMovieTitleStudioRating("Harry","Columbia Pictures","AAL")
m1.putMovie();

let m2 = new Movie();
m2.setMovieTitleStudio("Title","Warner Bros")
m2.putMovie();
 

let m3 = new Movie();
m3.setMovieTitleStudio("United Artists","20th Century Fox");
m3.putMovie();

//d) Write a piece of code that creates an instance of the class Movie 
//with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

let m4 = new Movie();
m4.setMovieTitleStudioRating("Casino Royale","Metro-Goldwyn-Mayer","PG13");
m4.putMovie();

let mov = [m1,m2,m3,m4];
let newArrayIndex = 0;


for(let i=0;i<4;i++)
{
    if(setPG(mov[i]))
    {
        mov[i].putMovie();
    }
}