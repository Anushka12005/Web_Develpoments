let Num = 234;
let sum =0;

while(Num>0)
{
    Sum += Num %10;
    Num = Math.floor(Num / 10);
}
console.log("Sum 0g Digits =>",Sum);