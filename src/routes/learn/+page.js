let option={
    method:'GET',
    headers: {
        'X-LC-Id': 'MKfnJcxoVk4CghtfCDbXGgZO-gzGzoHsz',
        'X-LC-Key': '07oxe84o11rhZUTez5FB9MYU',
        'Content-Type': 'application/json'}
}
const url="https://cloudapi.klpalace.cn/1.1/classes/Peo";

export async function load({fetch}){
    const res=await fetch(url,option);
    const peos=await res.json();
    return {peos}
}