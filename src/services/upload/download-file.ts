import {supabase, SUPABASE_BUCKET_NAME} from "@/lib";
import {message} from "antd";

export const downloadFile = async (fileUrl: string) => {
    const {data, error} = await supabase.storage.from(SUPABASE_BUCKET_NAME).download(fileUrl)

    if (error) {
        message.error(error.message)
    } else {
        return data
    }
}