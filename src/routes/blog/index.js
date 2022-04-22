import supabase from "$lib/utils/db.js";

export const get = async () => {
    let { data: articles, error } = await supabase
        .from('articles')
        .select('*')
        .eq('statut', "publie")
        .order('dateCreation', {ascending: false})

    return{
        body: {
            articles
        }
    }
}