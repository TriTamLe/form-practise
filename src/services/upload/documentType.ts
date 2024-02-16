import {makeTypesFromObject} from "@/utils";

const documentTypes = {
    IMAGE: 'images', VIDEO: 'videos'
} as const

type TDocumentTypeKey = keyof typeof documentTypes
type TDocumentType = typeof documentTypes[TDocumentTypeKey]

const DOCUMENT_TYPES = makeTypesFromObject(documentTypes)

export {DOCUMENT_TYPES, type TDocumentTypeKey, type TDocumentType}