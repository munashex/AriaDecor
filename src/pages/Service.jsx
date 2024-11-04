import { useParams } from "react-router-dom"

const Service = () => {
const {id} = useParams()
    return (
        <div className="mt-20 lg:mt-28">
          <h1 className="text-2xl font-bold">Im working on this page Babe {id}</h1>
        </div>
    )
}

export default Service 