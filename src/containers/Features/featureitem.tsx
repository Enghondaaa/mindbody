import Image from "next/image"

const Featureitem = ({ title, icon }: { title: string, icon: string }) => {
  return (
    <div className="text-white w-2/3 md:w-1/3 xl:w-[31%] 2xl:w-[23%]">
      <Image src={icon} alt="image" width="200" height="250" layout="responsive" />
      <div className="bg-black p-3 mx-3 mt-[-15px] z-30 relative -skew-x-6">
        <h3 className="text-[18px] font-semibold">{title}</h3>
      </div>
    </div>
  )
}

export default Featureitem