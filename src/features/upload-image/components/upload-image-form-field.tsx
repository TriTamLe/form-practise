import {FormItemProps} from 'antd'
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import {getImageUrl} from "@/features/upload-image/handlers";
import {NamePath} from "antd/es/form/interface";
import {
    DEFAULT_FILE_FIELD_NAME,
    DEFAULT_IMAGE_URL_FIELD_NAME,
    DEFAULT_UPLOAD_IMAGE_FIELD_NAME
} from "@/features/upload-image/constant";
import {useCallback, useState} from "react";


type UploadImageFormFieldProps = {

    imageUrlFieldName?: NamePath, fileUrlFieldName?: NamePath
} & FormItemProps


export const UploadImageFormField = ({
                                         name = DEFAULT_UPLOAD_IMAGE_FIELD_NAME,
                                         imageUrlFieldName = DEFAULT_IMAGE_URL_FIELD_NAME,
                                         fileUrlFieldName = DEFAULT_FILE_FIELD_NAME
                                     }: UploadImageFormFieldProps) => {
    const form = useFormInstance()
    const [file, setFile] = useState<Blob>(form.getFieldValue([name, fileUrlFieldName]))
    const imageUrl = useCallback(() => {
        return getImageUrl(form.getFieldValue([name, imageUrlFieldName]))
    }, [form, imageUrlFieldName, name])

    console.log(file, imageUrl, setFile)


    return <div>Upload Image field</div>
}