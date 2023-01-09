import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions, NEW_WEATHER_API_URL, NEW_WEATHER_API_KEY } from "../../api";


const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        if (inputValue.length < 3) {
            return {
                options: []
            }
        }
        return fetch(
            // `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            `http://api.weatherapi.com/v1/search.json?key=${NEW_WEATHER_API_KEY}&q=${inputValue}`
            
            // geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                return {
                    // options: []
                    options: response.map((city) => {
                        return {
                            value: ``,
                            label: `${city.name}` 
                            
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}

        />
    )
}

export default Search;