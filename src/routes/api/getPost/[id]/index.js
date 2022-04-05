import supabase from "$lib/utils/db.js";

export const get = async ({params}) => {
    let { data: article, error } = await supabase
        .from('articles')
        .select('*, users(*)')
        .eq('id', params.id)

    return{
        body: {
            article: article[0]
        }
    }
}