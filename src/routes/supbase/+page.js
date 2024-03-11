import {sb} from 'kl_sb'

export async function load({fetch}) {
    const {data,error}=await sb.from('peos').select('*')

    return {peos:data}
}