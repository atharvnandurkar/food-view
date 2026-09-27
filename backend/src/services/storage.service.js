const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

async function uploadFile(file, fileName) {
    console.log("Uploading to Supabase...");

    const { data, error } = await supabase.storage
        .from("food-videos")
        .upload(fileName, file, {
            contentType: "video/mp4",
            upsert: false,
        });

    if (error) {
        console.error("SUPABASE ERROR:", error);
        throw error;
    }

    const { data: publicUrlData } = supabase.storage
        .from("food-videos")
        .getPublicUrl(fileName);

    return {
        path: data.path,
        url: publicUrlData.publicUrl,
    };
}

module.exports = {
    uploadFile,
};