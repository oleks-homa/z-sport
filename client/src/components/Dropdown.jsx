import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCompany } from '../state';

const Dropdown = ({ setSeed }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    let currentCompany = useSelector(state => state.companies.currentCompany);
    let companies = useSelector(state => state.companies.allCompanies);
    const reset = () => {
        setSeed(Math.random());
    }
    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{currentCompany}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                            dispatch(setCurrentCompany('All'));
                            setIsDropdownOpen(!isDropdownOpen);
                            reset();
                        }
                        } 
                    >All</li>
                    {companies.map(company => (
                        <li
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                                dispatch(setCurrentCompany(company));
                                setIsDropdownOpen(!isDropdownOpen);
                                reset();
                            }
                            }
                        >{company}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Dropdown;