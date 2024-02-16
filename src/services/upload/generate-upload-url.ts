import {v4 as uuidv4} from 'uuid'
import {TDocumentType} from "@/services/upload/documentType.ts";
import {SUPABASE_BUCKET_NAME, SUPABASE_PROJECT_ID} from "@/lib";


export const generateUploadUrl = (documentType: TDocumentType): string => {
    const folderName = documentType as string

    return `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${SUPABASE_BUCKET_NAME}/${folderName}/${uuidv4()}`
}
