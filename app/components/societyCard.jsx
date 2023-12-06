import Image from 'next/image'

export default function SocietyCard(props) {

    const { i, _id, societyName, description, volunteers } = props.society

    const imgPath = "https://www.americasfinestlabels.com/includes/work/image_cache/d53be44a878291f344951999f2ef86c6.thumb.jpg"
    return (
        <div key={i}>
            
            <div className="relative flex w-full max-w-[48rem] flex bg-white bg-clip-border text-gray-700 shadow-md mt-9 rounded-lg bg-zinc-950">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700 flex items-center rounded-lg bg-zinc-950">
    <img
      src={imgPath}
      alt="image"
      className="h-98 w-98 object-cover rounded-lg"
    />
  </div>
  <div className="p-6 bg-zinc-950 rounded-lg">
    <h4 className="mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-base font-bold text-white">
      {societyName}
    </h4>
    <p className="mb-8 font-sans text-gray-700 antialiased text-xs line-clamp-1 text-white">
      {description}
    </p>

    {/* user avatars */}
    <div className="flex -space-x-4">
      <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src=".../public/kalana2001.jpg" alt="" />
      <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/ravindu2001.jpg" alt="" />
      <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/senindu2005.jpg" alt="" />

      <div className="w-3/4 p-4 ml-2 text-xs text-white">
        <p>{volunteers.length} members</p>
      </div>
    </div>
  </div>
</div>;
        </div>
    )
}