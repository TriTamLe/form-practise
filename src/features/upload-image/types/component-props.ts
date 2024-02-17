import {FormItemProps, ImageProps} from "antd";
import {NamePath} from "antd/es/form/interface";
import {UploadProps} from "antd/lib";

export type ServedImageProps = {
    fileSrc?: Blob
    width?: ImageProps['width']
    height?: ImageProps["height"]
}

export type UploadImageFormFieldProps = {
    imageUrlFieldName?: NamePath,
    fileUrlFieldName?: NamePath,
    required?: boolean
    uploadProps?: UploadProps
} & FormItemProps