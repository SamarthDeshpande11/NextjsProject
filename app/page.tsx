import ExploreBtn from "@/components/ExploreBtn"


const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br />Event you cant miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups, and conferences, All in one Place</p>

      <ExploreBtn/>
      <div className="events">
        {[1,2,3,4,5].map((event)=>(
          <li key={event}>Event {event}</li>
        ))}
      </div>
    </section>
      
    
  )
}

export default page
