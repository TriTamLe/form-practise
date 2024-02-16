import {generateUploadUrl} from "@/services/upload/generate-upload-url.ts";
import {DOCUMENT_TYPES} from "@/services/upload/documentType.ts";

export const getImageUrl = (initialUrl: string|undefined|null)=>{
    return initialUrl??generateUploadUrl(DOCUMENT_TYPES.IMAGE)
}