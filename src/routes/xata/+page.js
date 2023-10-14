const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer xau_3RJwVXPAfofuaNGHnc6dIEALNmI822Dy1', 'Content-Type': 'application/json'},
    body: '{"columns":["id","name","age","sex"],"page":{"size":15}}'
  };
  
 


 export async function load({fetch}){
    const res=await fetch('https://lukexiao-s-workspace-j90uf8.us-east-1.xata.sh/db/kl:main/tables/peo/query', options);
    const peos=await res.json();
    return {peos}
  }   