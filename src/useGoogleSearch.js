import { useEffect, useState } from "react";
import API_KEY from "./Keys";
const SearchID = 'bf335732203938bd3'

const useGoogleSearch = (value) => {
    const [Data, SetData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SearchID}&q=${value}`).then((response) => response.json()).then((data) => {
                SetData(data)
            })
        }
        fetchData()
    }, [value])

    return { Data }
}

export default useGoogleSearch