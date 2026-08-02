import Button from "../components/common/Button"
import Title from "../components/common/Title"

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 gap-10">
      <Title />
      <Button variant="wide">Join Our Community</Button>
    </div>
  )
}

export default Home