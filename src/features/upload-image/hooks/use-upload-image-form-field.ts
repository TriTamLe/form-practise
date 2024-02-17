import {
    ACCEPTED_FILE_TYPE,
    ACCEPTED_MEDIA_TYPE,
    DEFAULT_FILE_FIELD_NAME,
    DEFAULT_IMAGE_URL_FIELD_NAME,
    DEFAULT_UPLOAD_IMAGE_FIELD_NAME,
    MAXIMUM_FILE_SIZE,
    UPLOAD_VALIDATE_MESSAGE
} from "@/features/upload-image/constant";
import {UploadImageFormFieldProps} from "@/features/upload-image/types";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import {useEffect, useState} from "react";
import {getImageUrl} from "@/features/upload-image/handlers";
import {Rule} from "antd/es/form";
import {UploadProps} from "antd/lib";
import {RcFile} from "antd/lib/upload";
import {message} from "antd";

export const useUploadImageFormField = ({
                                            name = DEFAULT_UPLOAD_IMAGE_FIELD_NAME,
                                            imageUrlFieldName = DEFAULT_IMAGE_URL_FIELD_NAME,
                                            fileUrlFieldName = DEFAULT_FILE_FIELD_NAME,
                                            uploadProps: _uploadProps,
                                            required = false,
                                            ...rest
                                        }: UploadImageFormFieldProps) => {

    const form = useFormInstance()
    const [file, setFile] = useState<Blob | undefined>(form.getFieldValue([name, fileUrlFieldName]))
    const [isUploading, setIsUploading] = useState(false)
    const imageUrl = getImageUrl(form.getFieldValue([name, imageUrlFieldName]))
    const uploadButtonRules: Rule[] = !required ? [{required: false}] : [{
        validator: async () => {
            if (file === undefined) {
                return Promise.reject(new Error(UPLOAD_VALIDATE_MESSAGE.required));
            } else return Promise.resolve();
        }
    }]
    const handleBeforeUpload: UploadProps['beforeUpload'] = async (file: RcFile) => {
        setIsUploading(true)
        const isValidaMediaType = ACCEPTED_MEDIA_TYPE.includes(file.type)
        const isFileSizeExceeded = file.size > MAXIMUM_FILE_SIZE

        switch (true) {
            case !isValidaMediaType:
                message.error(UPLOAD_VALIDATE_MESSAGE.fileType.invalid)
                setIsUploading(false)
                break
            case isFileSizeExceeded:
                message.error(UPLOAD_VALIDATE_MESSAGE.fileSize.tooLarge)
                setIsUploading(false)
                break;
            case isValidaMediaType:
                setFile(file)
                setIsUploading(false)
                break;
            default:
                break;
        }
    }

    const uploadProps: UploadProps = {
        accept: ACCEPTED_FILE_TYPE,
        showUploadList: false,
        beforeUpload: handleBeforeUpload,
        fileList: undefined, ..._uploadProps
    }

    useEffect(() => {
        form.setFieldValue([name, fileUrlFieldName], file)
        if (file !== undefined) form.validateFields([name])
    }, [file, name, fileUrlFieldName, form])

    useEffect(() => {
        form.setFieldValue([name, imageUrlFieldName], imageUrl)
    }, [form, imageUrl, imageUrlFieldName])

    return {
        uploadButtonRules,
        uploadProps,
        isUploading,
        file,
        required,
        restProps: rest,
        imageUrlFieldName,
        fileUrlFieldName,
        name
    }
}