import Image from "next/image";

interface CustomImageProps {

    src: string;

    alt?: string;

    width?: number;

    height?: number;

    layout?: "fill" | "responsive" | "intrinsic";

    objectFit?: "cover" | "contain" | "none" | "scale-down";

    className?: string;

}

export const CustomImage = (props: CustomImageProps) => {
    const isProduction = process.env.NODE_ENV === "production";
    let src = props.src;

    if (!isProduction && src) {
        src = `${src}`.replace('./', '/');
    }

    return <Image src={src} alt={props.alt || ""} width={props.width} height={props.height} layout={props.layout} objectFit={props.objectFit} className={props.className} />;
}