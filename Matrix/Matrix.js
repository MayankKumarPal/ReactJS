//Convert  Row elements into column elements and vice versa  

console.log(matrix([[1,2,3,4],[10,20,30,40]]));

function matrix(a)  //diffining a function
{
  let l1=a.length;  // declairing l1 to compute the row  
  let l2=a[0].length;  // l2  to compute the column length
  if(l1==0 || l2==0)   // check if they don't have any element in matrix
  {
    return [];
  }
  let i,j,k=[]; //declairing 2 variable i,j and a new array k
  for(i=0;i<l2;i++)  // outer for loop which can traverse till the length coloumn
  {
    k[i]=[];  // diffining the element at k ith positon
    for(j=0;j<l1;j++) //inner loop which traverse till row 
    {
      k[i][j]=a[j][i];  // assiging the values 
    }
  }
  return k; //return the value of array k 
}