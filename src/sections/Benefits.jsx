import { benefits} from "../permanent"
import BenefitsCard from "../components/BenefitsCard"


const Benefits = () => {
  return (
    <section className="max-container flex justify-between flex-wrap items-center gap-3">
      {benefits.map ((benefit) => (
        <BenefitsCard key={benefit.label} {...benefit}/>
      ))}
    </section>
  )
}

export default Benefits
 