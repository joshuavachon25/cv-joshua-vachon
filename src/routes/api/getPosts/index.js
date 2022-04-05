import supabase from "$lib/utils/db.js";

export const get = async () => {
    let { data: articles, error } = await supabase
        .from('articles')
        .select('*')

    return{
        body: {
            articles
        }
    }
}