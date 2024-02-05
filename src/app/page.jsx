import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="flex h-screen justify-center items-center mx-auto">
        <div className="inset-0 text-white flex items-center justify-center w-60">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          ipsum molestiae quisquam! Sit error incidunt distinctio corporis
          magnam culpa provident obcaecati eligendi reprehenderit minima
          voluptatem, nihil accusantium, recusandae omnis. Iusto.{" "}
        </div>
        <div>
          <Image
            src={"/i.png"}
            width={600}
            height={600}
            className="hidden xl:flex mx-auto bottom-0 -z-10"
          />
          <Image
            src={"/BackGround.jpeg"}
            width={600}
            height={600}
            className="absolute"
          />
        </div>
      </section>
    </>
  );
}
