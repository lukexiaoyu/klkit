export async function load({fetch}){
    const res=await fetch("https://unpkg.com/kldeno/datas/peos.json")
    const item=await res.json()
    return {item} 
}