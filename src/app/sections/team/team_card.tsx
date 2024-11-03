import Image from 'next/image';

export function TeamCard({ img, name, role, bio }: { img: string, name: string, role: string, bio: string }) {
  return (
    <div className="flex flex-row mx-auto gap-4 items-center bg-[#002c67] rounded-xl p-4 w-full max-w-md">
      <div className="overflow-hidden bg-white rounded-xl border-solid border-2 border-white flex-shrink-0 w-24 h-24">
        <Image src={img} alt={name} width={96} height={96} />
      </div>
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-row items-center gap-2">
          <p className="text-lg font-semibold text-white truncate">{name}</p>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <p className="text-lg font-semibold text-white truncate">{role}</p>
        </div>
        <div className="h-px w-full bg-white"></div>
        <p className="font-semibold text-white overflow-hidden text-ellipsis">{bio}</p>
      </div>
    </div>
  );
}