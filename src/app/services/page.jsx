import ServicesPageClient from "@/components/servicesClientSide/ServicesClientSidePage";
import getPostMetadata from "@/utils/getPostMetadata";


export default function ServicesPage() {
    const postMetadata = getPostMetadata("services");

    return <ServicesPageClient postMetadata={postMetadata} />;
}