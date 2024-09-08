import supabase, { supabaseUrl } from "./supabase"

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        console.error(error)
        throw new Error("Cabins could not be loaded")
    }
    return data
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
    const imageName = hasImagePath ? newCabin.image : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", '');
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    //https://drigeelhjneikhucopma.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-08-10T17%3A16%3A26.524Z
    let query = supabase.from('cabins');
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }])
    if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
    const { data, error } = await query.select().single();
    if (error) {
        console.error(error)
        throw new Error("Cabins could not be created")
    }
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq("id", data.id)
        console.error(storageError)
        throw new Error("Image could not be uploaded and cabin was not created")
    }
    return data
}
export async function deleteCabins(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq("id", id)
    if (error) {
        console.error(error)
        throw new Error("Cabins could not be deleted")
    }
    return data
}