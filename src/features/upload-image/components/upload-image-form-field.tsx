import { CustomFormItem } from '@/features/sclub-member'
import { ServedImage } from '@/features/upload-image'
import { useUploadImageFormField } from '@/features/upload-image/hooks'
import { UploadImageFormFieldProps } from '@/features/upload-image/types'
import { Upload } from 'antd'

export const UploadImageFormItem = (props: UploadImageFormFieldProps) => {
  const {
    uploadProps,
    uploadButtonRules,
    isUploading,
    file,
    name,
    fileUrlFieldName,
    imageUrlFieldName,
    required,
    restProps,
  } = useUploadImageFormField(props)

  return (
    <CustomFormItem
      name={name}
      required={required}
      rules={uploadButtonRules}
      {...restProps}>
      <CustomFormItem name={[name, imageUrlFieldName]}>
        <CustomFormItem name={[name, fileUrlFieldName]} className={'h-12'}>
          <Upload {...uploadProps}>
            <ServedImage
              fileSrc={!isUploading ? file : undefined}
              width={100}
              height={100}
            />
          </Upload>
        </CustomFormItem>
      </CustomFormItem>
    </CustomFormItem>
  )
}
