import BestSellers from "@/components/Homepage/BestSellers";
import Galery from "@/components/Homepage/Galery";
import Header from "@/components/Homepage/Header";
import NewArrival from "@/components/Homepage/NewArrival";
import PresRelease from "@/components/Homepage/PresRelease";
import VideoHome from "@/components/Homepage/VideoHome";

export default function Home() {
  return (
    <>
      <Header />
      <NewArrival />
      <VideoHome link={"https://youtu.be/qHhjL367i6I"} />
      <BestSellers />
      <PresRelease />
      <Galery />
    </>
  );
}
