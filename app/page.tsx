import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const events=[
  {image:'/images/event1.png',title:'Event 1'},
  {image:'/images/event2.png',title:'Event 2'},
]
const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br />Event you cant miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups, and conferences, All in one Place</p>

      <ExploreBtn/>
      <div className="events">
        {events.map((event)=>(
          <li key={event.title}>
            <EventCard  {...event}/>
          </li>          
        ))}
      </div>
    </section>
      
    
  )
}

export default page
