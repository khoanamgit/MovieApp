import axios from "axios"
import { useEffect, useState } from "react"

const useHttps = (urlRequest) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(urlRequest).then(response => {
            setMovies(response)
        })
    },[urlRequest])

    return movies
}

export default useHttps