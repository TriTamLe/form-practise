import {supabase, SUPABASE_BUCKET_NAME} from "@/lib";
import {message} from 'antd'


export const uploadFile = async (url: string, file: Blob) => {
    const { error} = await supabase.storage.from(SUPABASE_BUCKET_NAME).upload(url, file)

    if (error) {
        message.error(error.message)
    }
}