import React from 'react'
import Card from './components/Card'

function App() {
  let data=[
    {
      plan:"Free",
      price:0,
      user:"Single User",
      isuser:true,
      storage:"5GB Storage",
      isstorage:true,
      pubproject:"Unlimited Public Projects",
      ispubproject:true,
      access:"Community Access",
      isaccess:true,
      priproject:"Unlimited Private Projects",
      ispriproject:false,
      support:"Dedicated Phone Support",
      issupport:false,
      domain:"Free Subdomain",
      isdomain:false,
      report:"Monthly Status Reports",
      isreport:false
    },
    {
      plan:"Plus",
      price:9,
      user:"5 Users",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      pubproject:"Unlimited Public Projects",
      ispubproject:true,
      access:"Community Access",
      isaccess:true,
      priproject:"Unlimited Private Projects",
      ispriproject:true,
      support:"Dedicated Phone Support",
      issupport:true,
      domain:"Free Subdomain",
      isdomain:true,
      report:"Monthly Status Reports",
      isreport:false
    },
    {
      plan:"Pro",
      price:49,
      user:"Unlimited Users",
      isuser:true,
      storage:"150GB Storage",
      isstorage:true,
      pubproject:"Unlimited Public Projects",
      ispubproject:true,
      access:"Community Access",
      isaccess:true,
      priproject:"Unlimited Private Projects",
      ispriproject:true,
      support:"Dedicated Phone Support",
      issupport:true,
      domain:"Unlimited Free Subdomain",
      isdomain:true,
      report:"Monthly Status Reports",
      isreport:true
    }
  ]
  return <>
   <section className="pricing py-5 mt-5">
    <div className="container">
     <div className="row">
      {
        data.map((data,index)=>{
          return <Card data={data} key={index}/>
        })
      }
      </div>
    </div>
  </section>
  </>
}

export default App
