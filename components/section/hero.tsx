import { Button } from "../ui/button"


const Hero = () => {
  return (
    <section className="bg-[#FBF9F9] rounded-[32px]  w-full py-14  px-8 text-center">
        <h1 className="text-6xl max-w-[620px] leading-[120%] mx-auto font-medium">Challenge Your Mind, Master Any Topic!</h1>
        < p className="pt-2 pb-4 max-w-3xl mx-auto">Discover fun and engaging quizzes designed to sharpen your skills, boost your knowledge, and track your progress. Perfect for learning, competing, and growing—anytime, anywhere!</p>
        <Button size="lg">Play Now</Button>
    </section>
  )
}

export default Hero