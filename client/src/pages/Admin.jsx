import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Admin = () => {
  const [chosenType, setChosenType] = useState('');
  const [chosenAction, setChosenAction] = useState('');
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(chosenType);
  }, [chosenType]);

  const typeTabs = ['Product', 'Category', 'Subcategory', 'Company'];
  const actionTabs = ['Create', 'Edit', 'Delete', 'Show'];

  return (
    <div>
      <div className='border border-[#D1D1D1] w-full h-[100vh]'>
        <div className='h-[10%] flex flex-row items-center justify-center bg-[#003366] pl-4' key={seed}>
          {!chosenType && typeTabs.map(tab => (
            <p className='admin-tab' onClick={() => setChosenType(tab)}>{tab}</p>
          ))}

          {chosenType && (
            <div className="flex flex-row items-center">
              <ArrowBackIcon className="admin-tab" onClick={() => {setChosenType(null); setSeed(null)}} />
              {actionTabs.map((action, index) => (
                <p
                  key={index}
                  className="admin-tab"
                  onClick={() => setChosenAction(action)}
                >
                  {action}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className='h-[80%] bg-[#F4F4F4]'>

        </div>
        <div className='h-[10%] bg-[#D1D1D1] flex flex-row justify-center items-center'>
          <button className="admin-btn bg-[#003366] hover:bg-[#002244]">Go back to website</button>
          <button className="admin-btn bg-[#FF6F61] hover:bg-[#E55C4F]">Clear all</button>
          <button className="admin-btn bg-[#2ECC71] hover:bg-[#28B463]">Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default Admin