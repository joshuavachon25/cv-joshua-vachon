import supabase from "$lib/utils/db.js";

export const get = async () => {
    let { data: projets, error } = await supabase
        .from('projets')
        .select('*')
        .order('order', {ascending: true})

    return{
        body: {
             projets
        }
    }
}