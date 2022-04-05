import supabase from "$lib/utils/db.js";

export const get = async ({params}) => {
    let { data: projet, error } = await supabase
        .from('projets')
        .select('*')
        .eq('id', params.id)

    return{
        body: {
            projet: projet[0]
        }
    }
}