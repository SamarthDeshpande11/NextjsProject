import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import events from "@/lib/constants"
const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br />Event you cant miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups, and conferences, All in one Place</p>

      <ExploreBtn/>
      <div className="events">
        {events.map((event) => (
          <div key={event.title}>
            <EventCard {...event}/>
          </div>
        ))}
      </div>

    </section>
      
    
  )
}

export default page
