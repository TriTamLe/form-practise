import {Upload} from 'antd'
import {CustomFormItem} from "@/features/sclub-member";
import {ServedImage} from "@/features/upload-image";
import {UploadImageFormFieldProps} from "@/features/upload-image/types";
import {useUploadImageFormField} from "@/features/upload-image/hooks";


export const UploadImageFormField = (props: UploadImageFormFieldProps) => {

    const {
        uploadProps,
        uploadButtonRules,
        isUploading,
        file,
        name,
        fileUrlFieldName,
        imageUrlFieldName,
        required,
        restProps
    } = useUploadImageFormField(props)

    return <CustomFormItem name={name} required={required} rules={uploadButtonRules} {...restProps}>
        <CustomFormItem name={[name, imageUrlFieldName]}>
            <CustomFormItem name={[name, fileUrlFieldName]} className={'h-12'}>
                <Upload {...uploadProps}>
                    <ServedImage fileSrc={!isUploading ? file : undefined} width={100} height={100}/>
                </Upload>
            </CustomFormItem>
        </CustomFormItem>
    </CustomFormItem>
}