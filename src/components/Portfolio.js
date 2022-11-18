import React from 'react';

// import components
// import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Educational Qualification
          </h2>
        </div>
        {/* <Projects /> */}
      </div>
      {/* table start */}
      <div class="flex flex-col ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center ">
                <thead class="border-b">
                  <tr>
                    <th scope="col" class="text-sm font-bold text-white-900 px-6 py-4">
                      Year
                    </th>
                    <th scope="col" class="text-sm font-bold text-white-900 px-6 py-4">
                      Institution
                    </th>
                    <th scope="col" class="text-sm font-bold text-white-900 px-6 py-4">
                      Qualification
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr class="border-b bg-black-100 border-blue-200">
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      2014-2019
                    </td>
                    <td class="text-sm text-white-900 font-bold px-6 py-4 whitespace-nowrap">
                      University of Bedfordshire UK.
                    </td>
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      PhD. (Consumer Behavior)

                    </td>
                  </tr>
                  <tr class="border-b bg-black-100 border-purple-200">
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      2011-2013
                    </td>
                    <td class="text-sm text-white-900 font-bold px-6 py-4 whitespace-nowrap">
                      Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology Pakistan

                    </td>
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      MS (Marketing)
                    </td>
                  </tr>
                  <tr class="border-b bg-black-100 border-green-200">
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      2003-2005

                    </td>
                    <td class="text-sm text-white-900 font-bold px-6 py-4 whitespace-nowrap">
                      University of Arid Agriculture Rawalpindi

                    </td>
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      MBA (Marketing)

                    </td>
                  </tr>
                  <tr class="border-b bg-black-100 border-red-200">
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      1998-2003
                    </td>
                    <td class="text-sm text-white-900 font-bold px-6 py-4 whitespace-nowrap">
                      University of Arid Agriculture Rawalpindi
                    </td>
                    <td class="text-sm text-white-900 font-medium px-6 py-4 whitespace-nowrap">
                      B.Sc. (Hons) Agriculture
                    </td>
                  </tr>

                  {/* <tr class="border-b bg-gray-800 boder-gray-900">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                Dark
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table ends  */}
      <div className='container mx-auto '>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title mt-8 '>
          Professional Affiliations
          </h2>
        </div>
         {/* table start */}
      <div class="flex flex-col ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center ">
                
                <tbody>
           <tr class="border-b bg-black-800 border-t-2 border-white-600">
              
              <td class="text-sm text-white font-bold px-6 py-4 whitespace-nowrap">
              Institute
              </td>
              <td class="text-sm text-white font-bold px-6 py-4 whitespace-nowrap">
              Affiliations
              </td>
            </tr>
            <tr class="border-b bg-black-800 border-t-2 border-white-600">
             
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
              British Academy of Management
              </td>
              <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
              Member 

              </td>
            </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

        {/* <Projects /> */}
      </div>
      
    </section>
  );
};

export default Portfolio;
