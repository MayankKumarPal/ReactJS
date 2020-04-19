console.log(matrix([[1,2,3,4],[10,20,30,40]]));

function matrix(a)
{
  let l1=a.length;
  let l2=a[0].length;
  if(l1==0 || l2==0)
  {
    return [];
  }
  let i,j,k=[];
  for(i=0;i<l2;i++)
  {
    k[i]=[];
    for(j=0;j<l1;j++)
    {
      k[i][j]=a[j][i];
    }
  }
  return k;
}