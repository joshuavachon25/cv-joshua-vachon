import supabase from "$lib/utils/db.js";

export const get = async () => {
    let { data: experiments, error } = await supabase
        .from('labo')
        .select('*')
        .order('temps', {ascending: true})

    return{
        body: {
            experiments
        }
    }
}