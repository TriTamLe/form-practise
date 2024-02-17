import FallbackProfilePic from '@/assets/undraw_profile_pic_re_iwgo.svg';
import {Image,} from "antd";
import {getLinkFromFile} from "@/features/upload-image/handlers";
import {ServedImageProps} from "@/features/upload-image/types";

export const ServedImage = ({fileSrc, width, height}: ServedImageProps) => {
    const src = fileSrc ? getLinkFromFile(fileSrc) : FallbackProfilePic
    return <Image
        loading={"lazy"}
        alt="profile-picture"
        className="object-cover"
        width={width}
        height={height}
        src={src}
        fallback={FallbackProfilePic}
        style={{
            borderRadius: '50%'
        }}
        preview={false}
    />
}