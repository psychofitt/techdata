const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '10+' },
  { id: 2, name: 'Team Of Expert', value: '50+' },
  { id: 3, name: 'Our Partners', value: '100+' },
]

export default function Recounter() {
  return (

    <div className=" bg-gray-900 py-24 sm:py-36 mx-6 bg-[radial-gradient(circle,transparent_50%,#291d3a)] rounded-full">
          <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
    
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-blue-700 ">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        </div>
      </div>
 
     
    </div>
    

  )
}
