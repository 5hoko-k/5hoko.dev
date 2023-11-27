import { testimonials } from "../Data";

function Testimonials() {
    return (
        <>
        {testimonials.map((tMonial) => {
            return (
                <blockquote key={tMonial.name}>
                    <img src='' alt='' />
                    {tMonial.quote}
                    <footer>
                        <cite>{tMonial.name} {tMonial.company}</cite>
                    </footer>
                </blockquote>
            )
        })}
        </>
    )
}
export default Testimonials;