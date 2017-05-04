/*This function use to find sum of numbers passed to it using 
arguments array and return the sum
*/

function sum()
{
    var i = 0;
    var s = 0;
    for(i=0;i<arguments.length;i++)
    {
        s+=arguments[i];
    }

    return s;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9,10));